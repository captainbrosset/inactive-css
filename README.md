# A list of rules for when CSS properties have no effect.

In certain situations, CSS properties do not have any effect. A common example is trying set `width` on an inline element like a `<span>`.

There are so many properties in CSS that it's impossible for anyone to remember which ones do and don't apply in some situations. Some are straight-forward like `flex-wrap` only applies to an element that has `display:flex`. Others are less trivial like setting something else than a color on a `:visited` pseudo-class.

The list of rules is in the [rules.md](https://github.com/captainbrosset/useless-css-properties/blob/master/rules.md) file.

PRs more than welcome, it'd be great to make this list as comprehensive as possible.
