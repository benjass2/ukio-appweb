/**
 * @summary Centralizes Ukio API configuration
 * @author Benjamin Solorzano
 */

export const environment = {
    apiUrl: import.meta.env.VITE_UKIO_API,
    citiesEndpoint:import.meta.env.VITE_CITIES_ENDPOINT_PATH,
    apartmentEndpoint:import.meta.env.VITE_APARTMENTS_ENDPOINT_PATH
};