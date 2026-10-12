import {CityResource} from "../resources/city.resource.js";
import {City} from "../../domain/model/city.entity.js";

/**
 * @summary Converts City API resources into City entities
 * @author Benjamin Solorzano.
 */

export class CityAssembler{
    static toEntityFromResource(resource){
        return new City({...resource});
    }

    static toEntitiesFromResponse(response){
        const resources = response.data;

        return resources.map(resource=>this.toEntityFromResource(new CityResource(resource)));
    }
}