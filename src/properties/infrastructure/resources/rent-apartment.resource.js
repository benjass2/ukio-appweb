/**
 * @summary Represents the request payload for renting an apartment
 * @author Benjamin Solorzano
 */

export class RentApartmentResource {
    constructor({startDate = null, endDate = null} = {}) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.state = 'C';
    }
}
