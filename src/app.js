const express = require('express');

const path = require('path');

const app = express();

app.set('PORT', process.env.PORT || 3000);
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
