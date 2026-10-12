<script setup>
import {ref, onMounted} from 'vue';
import {storeToRefs} from 'pinia';
import {useI18n} from 'vue-i18n';

import {usePropertiesStore} from '../../application/properties.store.js';
import ApartmentCard from '../components/apartment-card.component.vue';
import RentApartmentForm from '../components/rent-apartment-form.component.vue';

/**
 * @summary Displays apartments and coordinates rental operations.
 * @author Benjamin Solorzano
 */

const {t} = useI18n();

const propertiesStore = usePropertiesStore();

const {apartments, loading, error} =
    storeToRefs(propertiesStore);

const selectedApartment = ref(null);
const showRentDialog = ref(false);
const successMessage = ref('');

onMounted(async () => {
  await propertiesStore.fetchApartments();
});

function openRentDialog(apartment) {
  selectedApartment.value = apartment;
  showRentDialog.value = true;
  successMessage.value = '';
}

async function handleRentSubmit(rentData) {
  const success = await propertiesStore.rentApartment(
      rentData.apartmentId,
      rentData.startDate,
      rentData.endDate
  );

  if (success) {
    showRentDialog.value = false;
    selectedApartment.value = null;
    successMessage.value = t('apartments.rentSuccess');
  }
}
</script>

<template>
  <main class="renting-page">
    <header class="page-header">
      <h1>{{ t('apartments.title') }}</h1>
    </header>

    <pv-message
        v-if="successMessage"
        severity="success"
        class="status-message"
    >
      {{ successMessage }}
    </pv-message>

    <pv-message
        v-if="error"
        severity="error"
        class="status-message"
    >
      {{ error }}
    </pv-message>

    <p v-if="loading && !showRentDialog" role="status">
      {{ t('common.loading') }}
    </p>

    <div v-else class="apartments-grid">
      <apartment-card
          v-for="apartment in apartments"
          :key="apartment.id"
          :apartment="apartment"
          @rent="openRentDialog"
      />
    </div>

    <rent-apartment-form
        v-model:visible="showRentDialog"
        :apartment="selectedApartment"
        :loading="loading"
        @submit="handleRentSubmit"
    />

    <pv-confirmdialog/>
  </main>
</template>

<style scoped>
.renting-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2.5rem;
}

.status-message {
  margin-bottom: 1.5rem;
}

.apartments-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 1000px) {
  .apartments-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .renting-page {
    padding: 1rem;
  }

  .apartments-grid {
    grid-template-columns: 1fr;
  }
}
</style>
