
<script setup>
import { useI18n } from 'vue-i18n';

/**
 * @summary Displays the shared application footer.
 * @author Benjamin Solorzano
 */

const { t } = useI18n();
</script>

<template>
  <footer class="app-footer">
    <p>
      © {{ new Date().getFullYear() }} Ukio.
      {{ t('footer.rights') }}
    </p>
  </footer>
</template>

<style scoped>
.app-footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #f8fafc;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
}
</style>
