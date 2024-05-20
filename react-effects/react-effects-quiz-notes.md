# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When a component is "mounted" to the DOM means that the component has been initialized and added to the DOM tree, making it visible and interactive to the user.

- What is a React Effect?
  A React Effect is a function that React runs after rendering and re-rendering to perform side effects in function components.

- When should you use an Effect and when should you not use an Effect?
  You should use a React Effect when you need to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM. You should not use an Effect for operations that do not require cleanup, like logging or updating state synchronously.

- When do Effects run?
  Effects in React run after the initial render and after every update to the component/or the dependency array changes.

- What function is used to declare an Effect?
  The `useEffect` hook is used to declare an Effect in a functional component in React.

- What are Effect dependencies and how do you declare them?
  Effect dependencies are values that the effect depends on, and the effect should re-run if any of these values change. You declare effect dependencies by passing them as an array as the second argument to the `useEffect` hook.

- Why would you want to clean up from an Effect?
  You would want to clean up from an Effect to prevent memory leaks, unsubscribe from subscriptions, clear timers, or perform any necessary cleanup when the component unmounts or before re-running the effect.

- How do you clean up from an Effect?
  To clean up from an Effect in React, you return a function from the effect function. This cleanup function will be called before the effect runs again or when the component unmounts.

- When does the cleanup function run?
  The cleanup function in a React Effect runs before the effect runs again or when the component unmounts.

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
