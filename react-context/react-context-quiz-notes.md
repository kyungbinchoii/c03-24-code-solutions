# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  to allow data to be managed by one component but easily shared with multiple components. With Context, you create a Context Provider that holds onto the data, and each component that wants to use that data accesses it with the useContext hook.
- What values can be stored in context?
  Strings, Objects, Functions, Component references, etc.
- How do you create context and make it available to the components?
  Export the context after creating it then import the useContext Hook and the context
- How do you access the context values?
  useContext hook
- When would you use context? (in addition to the best answer: "rarely")
  Use context in React when you need to share state or data across multiple components without prop drilling

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
