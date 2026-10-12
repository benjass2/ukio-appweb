<script setup>
import {computed} from 'vue';
import {useI18n} from 'vue-i18n';

/**
 * @summary Displays information about a city.
 * @author Benjamin Solorzano
 */

const props = defineProps({
  city: {
    type: Object,
    required: true
  },
  apartmentCount: {
    type: Number,
    default: 0
  }
});

const {t, locale} = useI18n();

const formattedPopulation = computed(() => {
  const language = locale.value === 'es' ? 'es-ES' : 'en-US';

  return new Intl.NumberFormat(language).format(
      props.city.population
  );
});
</script>

<template>
  <pv-card class="city-card">
    <template #title>
      {{ city.cityName }}
    </template>

    <template #subtitle>
      {{ city.country }}
    </template>

    <template #content>
      <p class="city-description">
        {{ city.description }}
      </p>

      <p>
        <strong>{{ t('cities.population') }}:</strong>
        {{ formattedPopulation }}
      </p>
    </template>

    <template #footer>
      <div class="city-card-footer">
        <i class="pi pi-building" aria-hidden="true"></i>
        <span>
          {{ t('cities.apartmentQuantity') }}:
          {{ apartmentCount }}
        </span>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.city-card {
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
}

.city-description {
  line-height: 1.6;
  min-height: 80px;
}

.city-card-footer {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  padding-top: 1rem;
}
</style>
