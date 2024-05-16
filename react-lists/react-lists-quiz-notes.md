# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?

When we need to display a variable number of items like dynamically creating a list of React components. This makes sure the UI is synchronized and manage changes to the list without manual intervention.

- Why is it important for React components to be data-driven?
  It separates how data is displayed from the data itself, allowing components to be easily reused with various datasets. This approach streamlines maintenance and testing. Plus, data-driven components enable seamless UI updates when data changes, enhancing performance and user experience. In short, data-driven React components make development easier, more flexible, and responsive to data changes.

- Where in the component code would a list of React components typically be built?
  within the render method of a component. You can use the map function to iterate over an array of data and create a list of React components.
- What `Array` method is commonly used to create a list of React components?
  .map() method.
- Why do components in a list need to have unique keys?
  React uses keys to optimize the rendering process. When a list is updated, React compares the keys of the new list with the keys of the previous list. By having unique keys, React can quickly identify which components have been added, removed, or re-ordered. It can then update only the necessary components in the DOM, rather than re-rendering the entire list.

- What is the best value to use as a "key" prop when rendering lists?
  Id

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
