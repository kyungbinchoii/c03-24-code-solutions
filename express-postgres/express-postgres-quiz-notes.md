# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  the pg NPM package is the official client for Node.js so we can send SQL to the PostgreSQL server and receive a response.
- How do you tell `pg` which database to connect to?
  in the connection string
- How do you send SQL to PostgreSQL from your Express server?
  through async functions using pg package and db.query
- How do you get the rows returned from the SQL query?
  To get just the one returned row, you can use const row = result.rows[0]; or destructuring (const [row] = result.rows;).
- What must you always remember to put around your asynchronous route handlers? Why?
  try catch
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  SQL injection is a common attack vector that uses malicious SQL code for backend database manipulation to access information that was not intended to be displayed. Use parameterized queries where you insert a $ and an integer into your SQL where you want to insert the values and provide an array of values to substitute as the second argument to db.query().

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
