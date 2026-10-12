import {createApp} from 'vue';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ConfirmationService from 'primevue/confirmationservice';

import Card from 'primevue/card';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import DatePicker from 'primevue/datepicker';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import ConfirmDialog from 'primevue/confirmdialog';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import App from './app.vue';
import {router} from './router.js';
import {pinia} from './pinia.js';
import {i18n} from './i18n.js';

/**
 * @summary Initializes the Ukio Vue application.
 * @author Benjamin Solorzano
 */

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(ConfirmationService);
app.use(router);
app.use(pinia);
app.use(i18n);

app.component('pv-card', Card);
app.component('pv-button', Button);
app.component('pv-toolbar', Toolbar);
app.component('pv-dialog', Dialog);
app.component('pv-datepicker', DatePicker);
app.component('pv-inputtext', InputText);
app.component('pv-message', Message);
app.component('pv-confirmdialog', ConfirmDialog);

app.mount('#app');
