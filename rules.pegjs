Start
  = __ r:RuleSet __ {
    return {
      rules: r
    };
  }

RuleSet
  = head:Rule le tail:(__ Rule)* {
    return [head, ...tail.map(r => r[1])];
  }

Rule
  = allbut:("[all-but]\n")* ds:DeclarationSet __ "=" __  c:Condition {
    const ret = {
      condition: c
    };

    if (allbut.length) {
      ret.allButDeclarations = ds;
    } else {
      ret.declarations = ds;
    }
    
    return ret;
  }

DeclarationSet
  = head:Declaration tail:(__ Declaration)* {
    return [head, ...tail.map(d => d[1])]; 
  }
  
Declaration
  = name:NameOrValue value:("|" NameOrValue)? {
    return {
      name,
      value: value ? value[1] : null
    };
  }
  
NameOrValue
  = s:([a-zA-Z-*]+) ws* {
  	return s.join("").trim();
  }

Condition
  = left:ConditionHelper right:(ConditionOperator ConditionHelper)* {
    return [left].concat(...right);
  }

ConditionOperator
  = ws* "&&" ws* {
    return "and";
  }
  / ws* "||" ws* {
    return "or";
  }

ConditionHelper
  = not:("!")? name:[a-zA-Z]+ {
    return {
      name: name.join(""),
      not: !!not
    }
  }

le = [\n\r]

Comment
  = "//" (!le .)* le

ws = [ \t]

__
  = (ws / le / Comment)*
