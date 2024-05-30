import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Dashboard');
});

app.get('/notes', (req, res) => {
  res.send('Hola soy notas');
});

app.post('/notes/:id', (req, res) => {
  res.send(`Note ${req.params.id}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
