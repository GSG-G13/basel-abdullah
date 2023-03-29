const app = require('./app');

const PORT = app.get('PORT');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port http://127.0.0.1:${PORT} ...`);
});
