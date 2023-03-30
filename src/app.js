const express = require('express');

const path = require('path');
const controllers = require('./controllers/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('PORT', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(controllers);

module.exports = app;
