const express = require('express');
const { clientError, serverError } = require('./error');
const { getPokemonById } = require('./fetchData');

const router = express.Router();

router.use('/search/:name', getPokemonById);

router.use(clientError);
router.use(serverError);

module.exports = router;
