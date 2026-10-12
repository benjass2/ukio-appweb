<script setup>
import {onMounted} from 'vue';
import {storeToRefs} from 'pinia';
import {useI18n} from 'vue-i18n';

import {usePropertiesStore} from '../../../properties/application/properties.store.js';
import CityCard from '../../../properties/presentation/components/city-card.component.vue';

/**
 * @summary Displays Ukio cities and their apartment quantities.
 * @author Benjamin Solorzano
 */

const {t} = useI18n();

const propertiesStore = usePropertiesStore();

const {cities, loading, error} = storeToRefs(propertiesStore);

const {getApartmentCountByCity} = propertiesStore;

onMounted(async () => {
  await Promise.all([
    propertiesStore.fetchCities(),
    propertiesStore.fetchApartments()
  ]);
});
</script>

<template>
  <main class="home-page">
    <header class="home-header">
      <h1>{{ t('home.title') }}</h1>
      <p>{{ t('home.welcome') }}</p>
    </header>

    <section
        class="cities-section"
        aria-labelledby="cities-heading"
    >
      <h2 id="cities-heading">
        {{ t('home.title') }}
      </h2>

      <p v-if="loading" role="status">
        {{ t('common.loading') }}
      </p>

      <p v-if="error" role="alert" class="error-message">
        {{ error }}
      </p>

      <div v-if="!loading" class="cities-grid">
        <city-card
            v-for="city in cities"
            :key="city.cityId"
            :city="city"
            :apartment-count="getApartmentCountByCity(city.cityId)"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.home-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.home-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.home-header p {
  font-size: 1.1rem;
  color: #64748b;
}

.cities-section h2 {
  margin-bottom: 1.5rem;
}

.cities-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

.error-message {
  color: #dc2626;
}

@media (max-width: 1100px) {
  .cities-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .home-page {
    padding: 1rem;
  }

  .cities-grid {
    grid-template-columns: 1fr;
  }
}
</style>
