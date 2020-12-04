// Helpers are functions that accept a single argument and return a boolean.
// The argument is an object with the following properties:
// - element: the current element
// - style: the computed style of the current element
// - parentStyle: the computed style of the *rendered* parent element
// - cssRule: the rule applied to the current element where the property is

function gridContainer({style}) {
  return style.display.endsWith("grid");
}

function flexContainer({style}) {
  return style.display.endsWith("flex");
}

function multicolContainer({style}) {
  return style.columnWidth === "auto" || style.columnCount === "auto";
}

function gridItem({parentStyle}) {
  return parentStyle.display.endsWith("grid");
}

function flexItem({parentStyle}) {
  return parentStyle.display.endsWith("flex");
}

function inlineLevel({style}) {
  return [
      "inline",
      "inline-block",
      "inline-table",
      "inline-flex",
      "inline-grid",
      "table-cell",
      "table-row",
      "table-row-group",
      "table-header-group",
      "table-footer-group"
  ].includes(style.display);
}

function animated({style}) {
  return style.animationName !== "none";
}

function transitioned({style}) {
  // FIXME: how can we detect that an element is transitioned?
  // transition-property's default value is 'all'. Maybe use the WAAPI?
  return true;
}

function nonReplacedInlineLevel(data) {
  return inlineLevel(data) && !replaced(data);
}

function firstLetterPseudo({cssRule}) {
  return cssRule.selectorText && cssRule.selectorText.includes("::first-letter");
}

function markerPseudo({cssRule}) {
  return cssRule.selectorText && cssRule.selectorText.includes("::marker");
}

function firstLinePseudo({cssRule}) {
  return cssRule.selectorText && cssRule.selectorText.includes("::first-line");
}

function beforeOrAfterPseudo({cssRule}) {
  return cssRule.selectorText && 
    (cssRule.selectorText.includes("::before") || cssRule.selectorText.includes("::after"));
}

function emptyContent({style}) {
  return !style.content;
}

function floated({style}) {
  return style.cssFloat !== "none";
}

function positioned({style}) {
  return [
      "relative",
      "absolute",
      "fixed",
      "sticky"
  ].includes(style.position);
}

function absPositioned({style}) {
  return [
      "absolute",
      "fixed",
  ].includes(style.position);
}

function overflowHidden({style}) {
  return style.overflow === "hidden";
}

function overflowVisible({style}) {
  return style.overflow === "visible";
}

function visitedRule({cssRule}) {
  return cssRule.selectorText && cssRule.selectorText.endsWith(":visited");
}

function svgElement({element}) {
  return element.namespaceURI !== "http://www.w3.org/2000/svg";
}

function cssLayout({element}) {
  return !svgElement({element}) && element.namespaceURI !== "http://www.w3.org/1998/Math/MathML";
}

function table({style}) {
  return style.display === "table";
}

function tableCaption({style}) {
  return style.display === "table-caption";
}

function tableCell({style}) {
  return style.display === "table-cell";
}

function tableTrackAndGroup({style}) {
  return [
      "table-column",
      "table-column-group",
      "table-row",
      "table-row-group",
      "table-footer-group",
      "table-header-group",
  ].includes(style.display);
}

function replaced({element}) {
  if ([
        "audio",
        "br",
        "button",
        "canvas",
        "embed",
        "hr",
        "iframe",
        // Inputs are generally replaced elements. E.g. checkboxes and radios are replaced
        // unless they have `appearance: none`. However unconditionally treating them
        // as replaced is enough for our purpose here, and avoids extra complexity that
        // will likely not be necessary in most cases.
        "input",
        "math",
        "object",
        "picture",
        // Select is a replaced element if it has `size<=1` or no size specified, but
        // unconditionally treating it as replaced is enough for our purpose here, and
        // avoids extra complexity that will likely not be necessary in most cases.
        "select",
        "svg",
        "textarea",
        "video",
      ].includes(element.nodeName.toLowerCase())) {
      return true;
  }

  // img tags are replaced elements only when the image has finished loading.
  if (this.nodeName === "img" && this.node.complete) {
      return true;
  }

  return false; 
}

function nonReplacedInlineBox(data) {
  return cssLayout(data) && !replaced(data) && data.style.display === "inline";
}
