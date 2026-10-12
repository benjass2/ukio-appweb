/**
 * @summary Represents an apartment available for rent.
 * @author Benjamin Solorzano
 */
export class Apartment {
    constructor({id = 0, apartmentId = 0, cityId = 0, name = '', numberBedrooms = 0, numberGarage = 0, Price = 0, squareMeters = 0, description = '', startDate = '', endDate = '', state = ''} = {}) {
        this.id = id;
        this.apartmentId = apartmentId;
        this.cityId = cityId;
        this.name = name;
        this.numberBedrooms = numberBedrooms;
        this.numberGarage = numberGarage;
        this.Price = Price;
        this.squareMeters = squareMeters;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.state = state;
    }
}
