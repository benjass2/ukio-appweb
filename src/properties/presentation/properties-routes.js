
/**
 * @summary Defines the routes for the Properties bounded context.
 * @author Benjamin Solorzano
 */

const ApartmentRenting = () =>
    import('./views/apartment-renting.component.vue');

export const propertiesRoutes = [
    {
        path: '/properties/renting/new',
        name: 'apartment-renting',
        component: ApartmentRenting
    }
];
