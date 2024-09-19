const httpStatus = require('http-status');

const { countryService: service } = require('../services');

class CountryController {
  async getCountries(req, res, next) {
    try {
      const countries = await service.getCountries();
      res.status(httpStatus.OK).send(countries);
    } catch (error) {
      next(error);
    }
  }

  async getCountryInfo(req, res, next) {
    try {
      const { countryCode } = req.params;
      const countryInfo = await service.getCountryInfo(countryCode);
      res.status(httpStatus.OK).send(countryInfo);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CountryController();
