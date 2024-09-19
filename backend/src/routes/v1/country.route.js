const express = require('express');

const { countryController: controller } = require('../../controllers');

const router = express.Router();

router.get('/', controller.getCountries);
router.get('/:countryCode', controller.getCountryInfo);

module.exports = router;
