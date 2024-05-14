# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are hooks in React?
  Version 16.8 of React instituted React Hooks for controlling state in React. A hook is a type of function that allows a code base to make use of external functionality such as a log in system, or a data store. In React, hooks are used to add state functionality into individual components so that the state can be used to persist data between component calls and schedule component re-renders.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The function name must start with use followed by an uppercase letter. Hooks can only be called by React components and other hooks. All hooks in a component must always be called at the top level of a component, and in the same order.
  This means you cannot call hooks in nested functions or conditional statements

- What is the purpose of state in React?
  State in React is the process of using data to modify the output of a component. It is what allows React to create dynamic components that have the ability to respond to user input and update what is being displayed to the DOM based on user interactions or variable value changes.

- Why can't we just maintain state in a local variable?
  we cannot maintain state in a local variable the values contained in local variables of functions do not persist between function calls because each time a function is called, it is a new invocation of that function.
- What two actions happen when you call a `state setter` function?
  updates the value of state and assigned it to the variable named for example setCount.
- When does the local `state variable` get updated with the new value?
  the local state variable gets updated with the new value when uhhhhhh?

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
