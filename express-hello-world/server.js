import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Method:', req.method);
  next();
});

app.use((req, res) => {
  res.send('Hello, Everybody!');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
