const express = require('express');

const { clientError, serverError } = require('./error');

const router = express.Router();

router.use(clientError);
router.use(serverError);

module.exports = router;
