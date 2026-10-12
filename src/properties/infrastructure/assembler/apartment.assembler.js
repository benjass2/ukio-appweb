import {Apartment} from '../../domain/model/apartment.entity.js';
import {ApartmentResource} from "../resources/apartment.resource.js";

/**
 * @summary Converts apartment API resources into domain entities.
 * @author Benjamin Solorzano
 */
export class ApartmentAssembler {

    static toEntityFromResource(resource) {
        return new Apartment({...resource});
    }

    static toEntitiesFromResponse(response) {
        const resources = response.data;

        return resources.map(resource =>
            this.toEntityFromResource(
                new ApartmentResource(resource)
            )
        );
    }
}
