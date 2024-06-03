# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  HTTP request methods are a way for a client to communicate with a server to access resources on the web. Each method indicates a specific action to perform on a resource, such as creating, reading, updating, or deleting it. The method then sends a relevant response to the client.

- What is the significance of an HTTP response's status?
  HTTP response status codes, also known as response status codes, are three-digit codes that a web server sends to a browser in response to a request. They are a quick and concise way for the server to communicate how it handled the request. The status codes are categorized into five classes, with the first digit of the code indicating the class:
  1xx: Informational requests
  2xx: Success or OK
  3xx: Redirection, meaning further action is required to complete the request
  4xx: Client error, meaning there was an error on the client-side
  5xx: Server error, meaning there was an error on the server-side
- What does the express.json() middleware do and when would you need it?
  It parses incoming requests with JSON payloads. When building RESTful APIs, where clients send data in JSON format in the body of POST, PUT, or PATCH requests.

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
