import {BaseEndpoint} from "../../../shared/infrastructure/base-endpoint.js";
import {environment} from "../../../environments/environment.js";
import {BaseApi} from "../../../shared/infrastructure/base-api.js";

/**
 * @summary Provides HTTP operations for cities and apartments
 * @author Benjamin Solorzano
 */


export class PropertiesApi extends BaseApi {
    #citiesEndpoint;
    #apartmentsEndpoint;

    constructor() {
        super();
        this.#citiesEndpoint = new BaseEndpoint(this, environment.citiesEndpoint);
        this.#apartmentsEndpoint = new BaseEndpoint(this, environment.apartmentEndpoint);
    }

    getCities() {
        return this.#citiesEndpoint.getAll();
    }

    getApartments() {
        return this.#apartmentsEndpoint.getAll();
    }

    getApartmentById(id) {
        return this.#apartmentsEndpoint.getById(id);
    }

    rentApartment(id, resource) {
        return this.#apartmentsEndpoint.patch(id, resource);
    }
}