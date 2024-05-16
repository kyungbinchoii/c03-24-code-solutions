# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?
  In controlled components, form data is handled by the React component's state.
  A component is "controlled" if its parent manages its state, usually in a useState variable.
  In uncontrolled components, form data is handled by the DOM itself
  A component is "uncontrolled" if it manages its own state.

- What are some advantages of using uncontrolled components?
  One advantage of using uncontrolled components is that they can be simpler to implement compared to controlled components. Uncontrolled components can also be useful when dealing with form inputs that don't need to be controlled by React state.

- What are some advantages of using controlled components?
  One advantage of using controlled components is that they provide more control and flexibility over form inputs. Controlled components allow you to have full control over the user input, validation, and behavior of the form elements.

- Which style do you prefer?
  uncontrolled

- What two props must you pass to an input for it to be "controlled"?
  To make an input "controlled" in React, you need to pass the `value` prop to the input element to control its current value, and you also need to pass an `onChange` prop to handle the changes to the input value. These two props are essential for creating a controlled input component in React.

- What are some popular npm packages for creating forms in React?
  React Hook Form, Formik, and React Final Form.

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
