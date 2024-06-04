# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?
  Fetch
- What two things need to be done to properly handle HTTP request errors? Why?
  try catch block, check the response.ok
- How can `useEffect` be used to load data for a component?
  To load data for a component using `useEffect`, you can fetch the data inside the `useEffect` hook. Make sure to include any dependencies that affect the data loading process in the dependency array. This ensures that the data is fetched when those dependencies change.
- How do you use `useEffect` to load component data just once when the component mounts?
  To load component data just once when the component mounts using `useEffect`, you can pass an empty dependency array as the second argument to `useEffect`. This will ensure that the effect runs only once when the component mounts.

- How do you use `useEffect` to load component data every time the data key changes?
  To load component data every time the data key changes using `useEffect`, you can include the data key as a dependency in the dependency array of `useEffect`. This way, the effect will run whenever the data key changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  React Query or Vercel SWR.

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
