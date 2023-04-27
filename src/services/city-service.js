const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = this.cityRepository.createCity({ name: data.name });
      return city;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await this.cityRepository.deleteCity(cityId);
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("Something wrong at service layer");
      throw { error };
    }
  }

  async bulkCreateCities(data) {
    try {
      const cities = await this.cityRepository.bulkCreateCities({
        cities: data.cities,
      });
      return cities;
    } catch (error) {
      console.log("Something wrong in service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
