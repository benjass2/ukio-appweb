<script setup>
import {useI18n} from 'vue-i18n';

/**
 * @summary Displays apartment information and emits rent requests.
 * @author Benjamin Solorzano
 */

const props = defineProps({
  apartment: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['rent']);

const {t} = useI18n();

function onRentClick() {
  emit('rent', props.apartment);
}
</script>

<template>
  <pv-card class="apartment-card">
    <template #title>
      {{ apartment.name }}
    </template>

    <template #content>
      <p class="description">
        {{ apartment.description }}
      </p>

      <div class="apartment-details">
        <p>
          <i class="pi pi-car" aria-hidden="true"></i>
          <strong>{{ t('apartments.parking') }}:</strong>
          {{ apartment.numberGarage }}
        </p>

        <p>
          <i class="pi pi-home" aria-hidden="true"></i>
          <strong>{{ t('apartments.bedrooms') }}:</strong>
          {{ apartment.numberBedrooms }}
        </p>

        <p>
          <i class="pi pi-wallet" aria-hidden="true"></i>
          <strong>{{ t('apartments.price') }}:</strong>
          {{ apartment.Price }}
        </p>
      </div>
    </template>

    <template #footer>
      <pv-button
          :label="t('apartments.rent')"
          icon="pi pi-key"
          :disabled="apartment.state === 'C'"
          @click="onRentClick"
          class="rent-button"
          :aria-label="`${t('apartments.rent')} ${apartment.name}`"
      />
    </template>
  </pv-card>
</template>

<style scoped>
.apartment-card {
  height: 100%;
  border-radius: 12px;
}

.description {
  line-height: 1.6;
  min-height: 75px;
}

.apartment-details {
  margin-top: 1rem;
}

.apartment-details p {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.rent-button {
  width: 100%;
}
</style>
