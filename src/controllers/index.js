const express = require('express');

const getPokemon = require('./getPokemon');
const { clientError, serverError } = require('./error');

const router = express.Router();

router.get('/search/', getPokemon);

router.use(clientError);
router.use(serverError);

module.exports = router;
