import {environment} from "../../environments/environment.js";
import axios from "axios";

/**
 * @summary Configures the shared Axios HTTP client
 * @author Benjamin Solorzano
 */
export class BaseApi{
    #http;

    constructor() {
        this.#http=axios.create({
            baseURL:environment.apiUrl,
            headers:{
                'Content-Type':'application/json'
            }
        });
    }

    get http(){
        return this.#http;
    }
}