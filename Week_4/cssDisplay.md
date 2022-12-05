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

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="XGXWPz" data-user="sadief" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sadief/pen/XGXWPz">
  FlexBox Fun</a> by Sadie Freeman (<a href="https://codepen.io/sadief">@sadief</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
