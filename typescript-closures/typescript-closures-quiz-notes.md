# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  Scope in JavaScript is determined during the compilation phase before the code is executed.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closures in JavaScript allow functions to "remember" variables from their surrounding scope.

- What values does a closure contain?
  A closure in JavaScript contains the function itself and the lexical environment in which it was declared, including any variables in the outer scope that the function needs access to.

- When is a closure created?
  A closure is created when a function is defined within another function and the inner function has access to the outer function's variables.

- How can you tell if a function will be created with a closure?
  A function will be created with a closure if it accesses variables from its outer scope, even after the outer function has finished executing.

- In React, what is one important case where you need to know if a closure was created?
  In React, it is important to understand closures when working with event handlers to ensure that the event handler has access to the correct state or props values.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
