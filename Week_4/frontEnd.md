# Front-End Tools and Resources
## Lil' Table of Contents
* [DOM](/Week_4/frontEnd.md#dom-document-object-model)
* [Event Propogation](/Week_4/frontEnd.md#event-propogation)
  * [Bubbling](/Week_4/frontEnd.md#bubbling)
  * [Capturing](/Week_4/frontEnd.md#capturing)

&nbsp;
### Front-End References 
* [CSS Cheatsheet](/Week_4/cssCheatsheet.pdf)
* [Event References - MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
* [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [HTML References - MDN](https://developer.mozilla.org/en-US/docs/Web/Events)


### Chrome Dev-Tools
* [Chrome DevTools Overview](https://developer.chrome.com/docs/devtools/overview/)
* [CSS References](https://developer.chrome.com/docs/devtools/css/reference/)
* [JS Debugging Reference](https://developer.chrome.com/docs/devtools/javascript/reference/)



&nbsp;
***

## DOM (Document Object Model)
Interface that allows a programming language to manipulate the content, structure, and style of a website. 

e.g. Javascript is the client-side scripting language that connects to the DOM in an internet browser.

Almost anytime a website performs an action, it is the result of Javascript accessing and manipulating the DOM.

[...Read More](https://www.digitalocean.com/community/tutorials/introduction-to-the-dom)


&nbsp;
## DOM Events
[Intro to Events (w/ jQuery)](https://learn.jquery.com/events/introduction-to-events/)


&nbsp;
## Event Propogation
There are 3 phases of standard event propogation:
 1. Capturing phase - the event goes down to the element
 2. Target phase    - The event reaches the chosen (targeted) element
 3. Bubbling phase  - The event bubbles up from the element

[Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)

&nbsp;
### Bubbling
When an event happens on an element, it first runs the (event) handlers on it (the target element), then on its parent, than all the way up on other ancestors.

### Capturing
The event moving down through ancestor elements to meet and handle the target element. The capturing phase has a handler that is by default set to `false`. This prevents accidental handling on events during the capture phase.