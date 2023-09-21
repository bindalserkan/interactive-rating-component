# Simple Interactive Rating Component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). I have been using Frontend Mentor challenges to help improving my coding, especially design skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" state after submitting a rating

### Screenshots

#### First-State

![](design/first-state.png)

#### Rating-State

![](design/rating-state.png)

#### Thank-You-State
![](design/thank-you-state.png)

## My process

### Built with

- Semantic and accessible HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

While working through this project, I preferred manipulating the DOM with editing the relevant HTML class attribute and CSS property as hidden/visible with Javascript code rather than removing the DOM nodes and replacing them with the new ones. 
I learned doing so is a useful approach to have a lightweight workflow when it comes to extensive applications (i.e. websites)

Here are some useful code snippets from my work:

```html
<div class="second-container hidden">
```
```css
.hidden {
    display: none;
}
```
```js
submitButton.addEventListener("click", () => {
    secondContainer.classList.remove("hidden");
    firstContainer.style.display = "none";
});
```

### Useful resources

- [MDN Javascript Pathway](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) - MDN's frontend developer pathway really helped me about understanding what the DOM is and how to manipulate it properly.
- [css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This comprehensive site is an amaizing guide for getting better insight about CSS3. It enlightened me about the way how Flexbox layout concept is used.
