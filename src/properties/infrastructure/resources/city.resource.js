/**
 * @summary Represents a city resource received from the API.
 * @author Benjamin Solorzano
 */
export class CityResource {
    constructor({
                    cityId = 0,
                    cityName = '',
                    country = '',
                    population = 0,
                    description = ''
                } = {}) {
        this.cityId = cityId;
        this.cityName = cityName;
        this.country = country;
        this.population = population;
        this.description = description;
    }
}
