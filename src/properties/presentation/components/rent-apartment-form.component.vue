<script setup>
import {ref, watch} from 'vue';
import {useI18n} from 'vue-i18n';
import {useConfirm} from 'primevue/useconfirm';

/**
 * @summary Collects rental dates and requests confirmation.
 * @author Benjamin Solorzano
 */

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  apartment: {
    type: Object,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([
  'update:visible',
  'submit'
]);

const {t} = useI18n();
const confirm = useConfirm();

const description = ref('');
const startDate = ref(null);
const endDate = ref(null);
const validationError = ref('');

watch(
    () => props.visible,
    (isVisible) => {
      if (isVisible) {
        description.value = '';
        startDate.value = null;
        endDate.value = null;
        validationError.value = '';
      }
    }
);

function closeDialog() {
  emit('update:visible', false);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function submitRent() {
  validationError.value = '';

  if (!startDate.value || !endDate.value) {
    validationError.value = t('apartments.requiredFields');
    return;
  }

  if (endDate.value <= startDate.value) {
    validationError.value = t('apartments.invalidDates');
    return;
  }

  confirm.require({
    message: t('apartments.confirmMessage'),
    header: t('apartments.confirmTitle'),
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: t('common.yes'),
    rejectLabel: t('common.no'),
    accept: () => {
      emit('submit', {
        apartmentId: props.apartment.id,
        description: description.value,
        startDate: formatDate(startDate.value),
        endDate: formatDate(endDate.value)
      });
    }
  });
}
</script>

<template>
  <pv-dialog
      :visible="visible"
      modal
      :header="t('apartments.rentTitle')"
      :style="{ width: '32rem', maxWidth: '95vw' }"
      @update:visible="emit('update:visible', $event)"
  >
    <form
        class="rent-form"
        @submit.prevent="submitRent"
    >
      <div class="form-field">
        <label for="rent-description">
          {{ t('apartments.description') }}
        </label>

        <pv-inputtext
            id="rent-description"
            v-model="description"
            fluid
        />
      </div>

      <div class="form-field">
        <label for="rent-start-date">
          {{ t('apartments.startDate') }}
        </label>

        <pv-datepicker
            id="rent-start-date"
            v-model="startDate"
            dateFormat="yy-mm-dd"
            showIcon
            fluid
        />
      </div>

      <div class="form-field">
        <label for="rent-end-date">
          {{ t('apartments.endDate') }}
        </label>

        <pv-datepicker
            id="rent-end-date"
            v-model="endDate"
            dateFormat="yy-mm-dd"
            showIcon
            fluid
        />
      </div>

      <p
          v-if="validationError"
          class="validation-error"
          role="alert"
      >
        {{ validationError }}
      </p>

      <div class="form-actions">
        <pv-button
            type="button"
            :label="t('common.cancel')"
            severity="secondary"
            outlined
            @click="closeDialog"
        />

        <pv-button
            type="submit"
            :label="t('apartments.makeRent')"
            :loading="loading"
        />
      </div>
    </form>
  </pv-dialog>
</template>

<style scoped>
.rent-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 0.75rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-weight: 600;
}

.validation-error {
  color: #dc2626;
  font-size: 0.9rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
}
</style>
