## Block-Level elements
A block level element will take up the entire space of its parent element. It can contain other block elements or inline elements.

* headings
* div
* section
* footer
* article
* paragraph
* lists
* nav

&nbsp;
## Inline elements
Inline elements do not start a new line when redndered. They only take up as much space as the content needs.

* anchor
* em
* strong
* span

&nbsp;
## Inline-Block elements
Doesn't automatically create a new line in the browser, but can have a margin, padding, height, width.


* img
* button

&nbsp;
## [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
Flexible, reacts to different screen sizes and display types.

`display: flex`

```css
.parent {
  display: flex;
  flex-direction: row;
  justify-content: Determine where flex items are along the main axis;
  align-items: Determine where flex items are laid out on the cross axis;
}
```

See the CodePen <a href="https://codepen.io/sadief/pen/XGXWPz">
FlexBox Fun</a>.

