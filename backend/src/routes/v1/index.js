const express = require('express');

const countryRoute = require('./country.route');

const router = express.Router();

router.use('/countries', countryRoute);

module.exports = router;
