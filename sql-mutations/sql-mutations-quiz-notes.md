# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create = Inser, Read = Select, Update = Update, Delete = Delete
- How do you add a row to a SQL table?
  Insert keyword. example - insert into "products" ("name", "description", "price", "category")
  values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care')
  returning \*;
- How do you add multiple rows to a SQL table at once?
  use commas for example - insert into "products" ("name", "description", "price", "category")
  values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care'),
  ('Tater Mitts', 'Scrub some taters!', 6, 'cooking')
  returning \*;
- How do you update rows in a database table?
  update keyword, follow with set and with a where
- How do you delete rows from a database table?
  delete keyword with a from and where
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  so you specify which column and rows specifically you want to target
- How do you accidentally delete or update all rows in a table?
  dont put a where.
- How do you get back the modified row without a separate `select` statement?
  returning \*
- Why did you get an error when trying to delete certain films?
  foreign key restraints

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
