const axios = require('axios');

class CountryService {
  async getCountries() {
    try {
      const response = await axios.get(
        'https://date.nager.at/api/v3/AvailableCountries'
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw new Error('Failed to fetch countries');
    }
  }

  async getCountryInfo(countryCode) {
    try {
      const borderResponse = await axios.get(
        `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
      );
      const borderCountries = borderResponse.data.borders;

      const populationResponse = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/population',
        {
          country: borderResponse.data.commonName,
        }
      );
      const populationData = populationResponse.data.data.populationCounts;

      const flagResponse = await axios.post(
        'https://countriesnow.space/api/v0.1/countries/flag/images',
        {
          country: borderResponse.data.commonName,
        }
      );
      const flagUrl = flagResponse.data.data.flag;

      return {
        name: borderResponse.data.commonName,
        borderCountries,
        populationData,
        flagUrl,
      };
    } catch (error) {
      console.error('Error fetching country info:', error);
      throw new Error('Failed to fetch country info');
    }
  }
}

module.exports = new CountryService();
