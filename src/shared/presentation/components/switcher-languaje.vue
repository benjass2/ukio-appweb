
<script setup>
import { useI18n } from 'vue-i18n';

/**
 * @summary Allows users to switch between English and Spanish.
 * @author Benjamin Solorzano
 */

const { locale } = useI18n();

function changeLanguage(language) {
  locale.value = language;
}
</script>

<template>
  <div
      class="language-switcher"
      role="group"
      aria-label="Language selection"
  >
    <pv-button
        label="EN"
        text
        size="small"
        :severity="locale === 'en' ? 'primary' : 'secondary'"
        :aria-pressed="locale === 'en'"
        @click="changeLanguage('en')"
    />

    <pv-button
        label="ES"
        text
        size="small"
        :severity="locale === 'es' ? 'primary' : 'secondary'"
        :aria-pressed="locale === 'es'"
        @click="changeLanguage('es')"
    />
  </div>
</template>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
