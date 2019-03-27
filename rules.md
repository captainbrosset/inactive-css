# SVG attributes used on non-SVG elements

- fill has no effect on this element since it's not an SVG element
- fill-opacity has no effect on this element since it's not an SVG element
- fill-rule has no effect on this element since it's not an SVG element
- marker has no effect on this element since it's not an SVG element
- marker-start has no effect on this element since it's not an SVG element
- marker-mid has no effect on this element since it's not an SVG element
- marker-end has no effect on this element since it's not an SVG element
- stroke has no effect on this element since it's not an SVG element
- stroke-dasharray has no effect on this element since it's not an SVG element
- stroke-dashoffset has no effect on this element since it's not an SVG element
- stroke-linecap has no effect on this element since it's not an SVG element
- stroke-miterlimit has no effect on this element since it's not an SVG element
- stroke-opacity has no effect on this element since it's not an SVG element
- stroke-width has no effect on this element since it's not an SVG element
- text-rendering has no effect on this element since it's not an SVG element
- alignment-baseline has no effect on this element since it's not an SVG element
- baseline-shift has no effect on this element since it's not an SVG element
- dominant-baseline has no effect on this element since it's not an SVG element
- kerning has no effect on this element since it's not an SVG element
- stop-color has no effect on this element since it's not an SVG element
- stop-opacity has no effect on this element since it's not an SVG element

# Position properties on non-positioned elements

- top has no effect on this element since it's not positioned, use position:relative, position:absolute, position:fixed or position:sticky
- right has no effect on this element since it's not positioned, use position:relative, position:absolute, position:fixed or position:sticky
- bottom has no effect on this element since it's not positioned, use position:relative, position:absolute, position:fixed or position:sticky
- left has no effect on this element since it's not positioned, use position:relative, position:absolute, position:fixed or position:sticky

# Size properties on inline elements

- height has no effect on this element since it's an inline element
- width has no effect on this element since it's an inline element

# Margin and padding properties on tables

- margin has no effect on this element since it is has a table-cell display type
- margin has no effect on this element since it is has a table-column display type
- margin has no effect on this element since it is has a table-column-group display type
- margin has no effect on this element since it is has a table-footer-group display type
- margin has no effect on this element since it is has a table-header-group display type
- margin has no effect on this element since it is has a table-row display type
- margin has no effect on this element since it is has a table-row-group display type
- padding has no effect on this element since it has a table-row-group display type
- padding has no effect on this element since it has a table-header-group display type
- padding has no effect on this element since it has a table-footer-group display type
- padding has no effect on this element since it has a table-row display type
- padding has no effect on this element since it has a table-column-group display type
- padding has no effect on this element since it has a table-column display type

# Grid & flex properties

- grid-template-columns has no effect on this element since it is not a grid container (try adding display:grid)
- grid-template-rows has no effect on this element since it is not a grid container (try adding display:grid)
- grid-template-areas has no effect on this element since it is not a grid container (try adding display:grid)
- grid-template has no effect on this element since it is not a grid container (try adding display:grid)
- grid-column-gap has no effect on this element since it is not a grid container (try adding display:grid)
- grid-row-gap has no effect on this element since it is not a grid container (try adding display:grid)
- grid-gap has no effect on this element since it is not a grid container (try adding display:grid)
- grid-auto-columns has no effect on this element since it is not a grid container (try adding display:grid)
- grid-auto-rows has no effect on this element since it is not a grid container (try adding display:grid)
- grid-auto-flow has no effect on this element since it is not a grid container (try adding display:grid)
- grid has no effect on this element since it is not a grid container (try adding display:grid)
- grid-column-start has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- grid-column-end has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- grid-row-start has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- grid-row-end has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- grid-column has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- grid-row has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- grid-area has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- flex-direction has no effect on this element since it is not a flex container (try adding display:flex)
- flex-wrap has no effect on this element since it is not a flex container (try adding display:flex)
- flex-flow has no effect on this element since it is not a flex container (try adding display:flex)
- flex has no effect on this element since it is not a flex item (try adding display:flex to its parent)
- flex-basis has no effect on this element since it is not a flex item (try adding display:flex to its parent)
- flex-shrink has no effect on this element since it is not a flex item (try adding display:flex to its parent)
- flex-grow has no effect on this element since it is not a flex item (try adding display:flex to its parent)
- order has no effect on this element since it is not a flex item (try adding display:flex to its parent)
- justify-content has no effect on this element since it is not a flex or grid container (try adding display:flex or display:grid)
- align-items has no effect on this element since it is not a flex or grid container (try adding display:flex or display:grid)
- align-content has no effect on this element since it is not a flex or grid container (try adding display:flex or display:grid)
- align-self has no effect on this element since it is not a flex or grid item (try adding display:flex or display:grid to its parent)
- justify-items has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- justify-self has no effect on this element since it is not a grid item (try adding display:grid to its parent)
- width/height have no effect on this element since flex-basis is already defined

# Table properties

- border-collapse has no effect on this element since it is not a table
- border-spacing has no effect on this element since it is not a table
- caption-side has no effect on this element since it is not a table-caption
- empty-cells has no effect on this element since it is not a table cell
- table-layout has no effect on this element since it is not a table

# Pseudo-elements and pseudo-classes

- X has no effect on ::first-letter since it is not in the limited set of properties that can be set on this pseudo-element (try font properties, background properties, margin properties, padding properties, border properties, text letter and words properties instead)
- X has no effect on :visited since it is not in the limited set of properties that can be set on this pseudo-class (try changing the text, background or border color instead)
- X has no effect on ::before since this pseudo-element does not exist (try adding content:"")
- X has no effect on ::after since this pseudo-element does not exist (try adding content:"")
- X has no effect on ::marker since it is not in then limited set of properties that can be set on this pseudo-element (TO BE COMPLETED)

# Animation properties

- animation-delay has no effect on this element since it is not animated
- animation-direction has no effect on this element since it is not animated
- animation-duration has no effect on this element since it is not animated
- animation-fill-mode has no effect on this element since it is not animated
- animation-iteration-count has no effect on this element since it is not animated
- animation-play-state has no effect on this element since it is not animated
- animation-timing-function has no effect on this element since it is not animated
- transition-delay has no effect on this element since it does no define any transition
- transition-duration has no effect on this element since it does no define any transition
- transition-timing-function has no effect on this element since it does no define any transition

# Transform properties

- perspective has no effect on this element because it is not transformed
- perspective-origin has no effect on this element because it is not transformed
- backface-visibility has no effect on this element because it is not transformed
- transform-box has no effect on this element because it is not transformed
- transform-origin has no effect on this element because it is not transformed
- transform-style has no effect on this element because it is not transformed

# Scroll-snapping properties

- scroll-snap-coordinate has no effect on this element since it is not a scrollable container (try overflow:scroll)
- scroll-snap-destination has no effect on this element since it is not a scrollable container (try overflow:scroll)
- scroll-snap-points-x has no effect on this element since it is not a scrollable container (try overflow:scroll)
- scroll-snap-points-y has no effect on this element since it is not a scrollable container (try overflow:scroll)
- scroll-snap-type has no effect on this element since it is not a scrollable container (try overflow:scroll)
- scroll-snap-type-x has no effect on this element since it is not a scrollable container (try overflow:scroll)
- scroll-snap-type-y has no effect on this element since it is not a scrollable container (try overflow:scroll)

# Misc

- list-style-image has no effect on this element since it is list-style-type:none
- resize has no effect on this element because it is overflow:visible
- text-overflow has no effect on this element because it is not a block container element and/or doesn't clip content (try overflow:hidden)
- float has no effect on this element since it is a flex item
- float has no effect on this element since it is a grid item
- display inline/block/inline-block/table-row/table-row-group/table-column/table-column-group/table-cell/table-caption/table-header-group/table-footer-group has no effect on this element. Because it is floated, its display is computed to block (note: table, flex and grid are valid, also inline-table gets computed to table, inline-flex to flex and inline-grid to grid)
- clip has no effect on this element since its position is not one of absolute or fixed
- z-index has no effect on this element since its position is static
