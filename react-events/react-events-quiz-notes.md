# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  In React, an "event" refers to an action that can be detected and handled by a React component. Examples of events in React include button clicks, form submissions, mouse movements, and keyboard inputs. React components can listen for these events and execute specific functions or update state based on the event.
- What is an "event handler"? Which component declares the handler?
  In React, an "event handler" is a function that is responsible for handling an event that occurs within a component. It is the function that gets executed when the event is triggered. The component that declares the event handler is the component that is listening for the event to occur.

- How do you pass an event handler to a React component?
  To pass an event handler to a React component, you can pass it as a prop when rendering the component.
- What is the naming convention for event handlers?
  In React, the naming convention for event handlers is typically camelCase. It is common to prefix the event handler function with "handle" followed by a descriptive name that indicates the event being handled.
- What is an "event handler prop"? Which component declares the prop?
  In React, an "event handler prop" refers to a prop that is passed from a parent component to a child component in order to provide an event handler function. This prop allows the child component to communicate with the parent component and trigger specific actions or behaviors when an event occurs.

The component that declares the event handler prop is the parent component. It is responsible for defining the event handler function and passing it down to the child component as a prop.

- What are some custom event handler props a component may wish to define?
  onSubmit, onChange, onclick, onToggle, onClose
- What is the naming convention for custom event handler props?
  In React, the naming convention for custom event handler props is typically camelCase. It is common to prefix the event handler prop with "on" followed by a descriptive name that indicates the event being handled.

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
