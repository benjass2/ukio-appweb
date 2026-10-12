import {defineStore} from 'pinia';
import {ref, computed} from 'vue';

import {PropertiesApi} from '../infrastructure/services/properties-api.js';
import {CityAssembler} from '../infrastructure/assembler/city.assembler.js';
import {ApartmentAssembler} from '../infrastructure/assembler/apartment.assembler.js';
import {RentApartmentResource} from '../infrastructure/resources/rent-apartment.resource.js';

/**
 * @summary Manages cities, apartments and rental operations.
 * @author Benjamin Solorzano
 */
export const usePropertiesStore = defineStore('properties', () => {

    // State
    const cities = ref([]);
    const apartments = ref([]);
    const loading = ref(false);
    const error = ref(null);

    // API Service
    const propertiesApi = new PropertiesApi();

    // Getters
    const availableApartments = computed(() =>
        apartments.value.filter(apartment => apartment.state !== 'C')
    );

    // Actions
    async function fetchCities() {
        loading.value = true;
        error.value = null;

        try {
            const response = await propertiesApi.getCities();

            cities.value = CityAssembler.toEntitiesFromResponse(response);
        } catch (err) {
            error.value = 'Failed to load cities';
            console.error(err);
        } finally {
            loading.value = false;
        }
    }

    async function fetchApartments() {
        loading.value = true;
        error.value = null;

        try {
            const response = await propertiesApi.getApartments();

            apartments.value =
                ApartmentAssembler.toEntitiesFromResponse(response);
        } catch (err) {
            error.value = 'Failed to load apartments';
            console.error(err);
        } finally {
            loading.value = false;
        }
    }

    function getApartmentCountByCity(cityId) {
        return apartments.value.filter(
            apartment => apartment.cityId === cityId
        ).length;
    }

    async function rentApartment(apartmentId, startDate, endDate) {
        loading.value = true;
        error.value = null;

        try {
            const apartment = apartments.value.find(
                apartment => apartment.id === apartmentId
            );

            if (!apartment) {
                throw new Error('Apartment not found');
            }

            if (apartment.state === 'C') {
                throw new Error('Apartment is already rented');
            }

            if (!startDate || !endDate) {
                throw new Error('Both dates are required');
            }

            const start = new Date(startDate);
            const end = new Date(endDate);

            if (
                Number.isNaN(start.getTime()) ||
                Number.isNaN(end.getTime()) ||
                end <= start
            ) {
                throw new Error('Invalid rental date range');
            }

            const resource = new RentApartmentResource({
                startDate,
                endDate
            });

            const response = await propertiesApi.rentApartment(
                apartmentId,
                resource
            );

            const updatedApartment =
                ApartmentAssembler.toEntityFromResource(response.data);

            const index = apartments.value.findIndex(
                apartment => apartment.id === apartmentId
            );

            apartments.value[index] = updatedApartment;

            return true;
        } catch (err) {
            error.value = err.message || 'Failed to rent apartment';
            console.error(err);
            return false;
        } finally {
            loading.value = false;
        }
    }

    return {
        cities,
        apartments,
        loading,
        error,
        availableApartments,
        fetchCities,
        fetchApartments,
        getApartmentCountByCity,
        rentApartment
    };
});
