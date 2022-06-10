# Inactive CSS

In certain situations, CSS properties do not have any effect on an element. This may depend on what other properties are currently applied to it, the type of the element, its parent elements, or which CSS rule the property is included in.\
A simple, but common, example is trying to set `width` on an inline level element like a `<span>`.

There are so many properties in CSS, and so many ways one can combine them that it's nearly impossible for anyone to know which situations are going to lead to CSS properties not doing anything.

The tricky thing is, even if a property and its value apply fine to an element (i.e. there is no syntax error and the property and its value are correct), nothing garanties that it will actually do anything to the element.\
The only thing that knows if a given property should modify the layout or style of an element in a given situation is the layout and style engine of the browsers we use. This information is not readily available and is burried deep into the browser engine's code.

# Idea

The idea here is to put together a list of rules for when these things happen. No such list exist today in a way that can be used in any meaningful way.\
Such a list should describe the various dependencies that exist between a property and other properties or between a property and the element it's applied on, and should describe when that dependency results in the property not having any effect on the element.

# Approach

The approach is not one that can easily lead to creating auditing tools. What that means is, the goal isn't to create a list of rules that could be used to run a tool on your entire CSS codebase to detect things that are useless.

The reason for this is that it isn't possible to determine if a property has any effect unless you know which element it is applied to, and you have access to this element, at runtime.

As an example, only at runtime can you know that an element is a grid item and that, therefore, the `float` property won't have any effect on it.\
Trying to do the same thing statically would require to detect if the CSS rule that `float` property is in even applies to any existing element, and would require to apply all of the other rules in the codebase to know whether the element is a grid item.

# In this repository

## The rules

What you will find in this repository is a list of rules that can be used by people or programs to know when CSS properties are inactive in certain situations.

📕 __[See the list of rules here](rules)__

The file is written in a custom format. It contains a list of rules, each rule having the following shape:

```
DeclarationSet
 = Condition
```

What the above means is: if `Condition` is truthy, then the properties in the DeclarationSet are inactive.

A `DeclarationSet` has the following shape:

```
propertyName[|propertyValue]
```

This means that either a property, as a whole, can be inactive, or a property with a specific value only.

Let's look at a simple example:

```
flex-direction
flex-flow
flex-wrap
  = !flexContainer
```

The above rule means that `flex-direction`, `flex-flow` and `flex-wrap` are inactive (i.e. have no effect) if the element they are applied to is not a flexbox container element.

Let's look at a more complex example:

```
float|left
float|right
  = flexItem || gridItem
```

Here, the `declarationSet` contains both property names and values. In this example, only `float:left` and `float:right` have no effect if the element they apply to is a flexbox item or a grid item. If the property was `float:none`, then it wouldn't have any effect either because this is reseting the `float` property to its default, but the fact that it doesn't have effect isn't due to the element being a flexbox or grid item.

It is worth noting that property names and values can have wildcards in them. Let's look at two examples:

`*` means that a rule applies to all properties.

`align-content|*center` means that a rule applies to all `align-content` properties that have a value ending with the string `center` (so `safe center` would match here too).

That's about it for the format. The only remaining thing is the `[all-but]` specifier that may come before a `declarationSet` which specifies that the rule applies to __all__ properties __except__ the ones listed in the set. 

Here is an example of an all-but rule:

```
[all-but]
font
font-family
font-feature-settings
font-kerning
font-language-override
font-optical-sizing
font-size
font-size-adjust
font-stretch
font-style
font-synthesis
font-variant
font-variant-alternates
font-variant-caps
font-variant-east-asian
font-variant-ligatures
font-variant-numeric
font-variant-position
font-variation-settings
line-height
  = firstLetterPseudo || firstLinePseudo || markerPseudo
```

In the rule above, if the element is a `::first-letter` pseudo, a `::first-line` pseudo or a `::marker` pseudo then all of the properties are inactive except the ones listed in the `declarationSet`.

## The helpers

As you can see above, each rule has a condition. The conditions use some specific keywords like `flexItem` or `firstLinePseudo`.

It's fairly easy to guess what these means, but this repository also comes with a JavaScript file that implements functions for these keywords.

Each keyword is implemented by a helper function that has the same name and returns a boolean. If the function returns `true`, then the part of the condition the keyword represents is true, otherwise it's false.

For these helper functions to work, they need access to some data. In particular: the element's computed style, the element's parent's computed style (note that by element's parent we mean the __rendered__ parent, so if a parent is `display:contents`, we expect to walk up to its parent, and so on), the CSS rule object the property is coming from, and the element itself. This data is given to the helpers as function arguments.

📕 __[See the list of helper functions here](helpers.js)__

## The grammar and parsed rules

In this repository, you will also find a PEG.js grammar file that can be used to generate a parser for the list of rules, and a simple AST-like JSON file, being the output of that parser.

📕 __[See the PEG.js grammar file here](rules.pegjs)__

📕 __[See the rules AST here](rules.json)__

# Background

Back in 2019, I was working at Mozilla on the Firefox DevTools team and we shipped a feature called Inactive CSS then. 

That feature was based on the awesome [research](http://users.eecs.northwestern.edu/~hq/papers/ply.pdf) Sarah Lim and her colleagues had done on the topic, and this Firefox feature went on to becoming quite popular.

To achieve this, we implemented a list of rules, very much like the one here, but in a different format, as [a JavaScript file](https://searchfox.org/mozilla-central/source/devtools/server/actors/utils/inactive-property-helper.js) specifically done for the DevTools, and not thought out to be reusable.

We also understood, at the time, that it was dangerous to make this list too complete too eagerly as any false positive would ruin the trust that users would have in the tool. Indeed the feature was, after all, based on a list of heuristics and not a 100% guaranteed checker. There was room for mistakes, especially given the complexity of how and when CSS applies.\
So the list in Firefox is not as complete as it could be and is likely not going to evolve very fast.

My goal here is to create a similar list, but in a format that people (and tools) can more easily use, and put it on GitHub with the hope that it could benefit from more people contributing to it and making it as complete and correct as it possibly can.

♥ I would love to accept your PRs if you can think of ways to improve this.
