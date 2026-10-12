/**
 *@summary Represents a city supported by Ukio
 * @author Benjamin Solorzano
 */

export class City {
    constructor({cityId = 0, cityName = '', country = '', population = 0, description = ''} = {}) {
        this.cityId = cityId;
        this.cityName = cityName;
        this.country = country;
        this.population = population;
        this.description = description;
        this.cityId = cityId;
    }
}