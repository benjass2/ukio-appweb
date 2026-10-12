<script setup>
import {useI18n} from 'vue-i18n';

import LanguageSwitcher from './switcher-languaje.vue';
import FooterContent from './footer.vue';

/**
 * @summary Provides the main Ukio application layout.
 * @author Benjamin Solorzano
 */

const {t} = useI18n();
</script>

<template>
  <div class="app-layout">
    <pv-toolbar class="app-toolbar">
      <template #start>
        <language-switcher/>
      </template>

      <template #center>
        <nav class="navigation" aria-label="Main navigation">
          <router-link to="/home">
            {{ t('navigation.home') }}
          </router-link>

          <router-link to="/properties/renting/new">
            {{ t('navigation.apartments') }}
          </router-link>
        </nav>
      </template>

      <template #end>
        <div class="brand">
          <span class="brand-logo" aria-label="Ukio logo">
            UKIO
          </span>

          <span class="brand-slogan">
            {{ t('navigation.slogan') }}
          </span>
        </div>
      </template>
    </pv-toolbar>

    <div class="main-content">
      <router-view/>
    </div>

    <footer-content/>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-toolbar {
  padding: 0.75rem 1.5rem;
  border-radius: 0;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navigation a {
  color: #334155;
  text-decoration: none;
  font-weight: 600;
}

.navigation a.router-link-active {
  color: #2563eb;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-logo {
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: 0.12rem;
}

.brand-slogan {
  font-size: 0.85rem;
  color: #64748b;
}

.main-content {
  flex: 1;
}

@media (max-width: 768px) {
  .app-toolbar {
    padding: 0.75rem;
  }

  .navigation {
    gap: 0.75rem;
  }

  .brand-slogan {
    display: none;
  }
}
</style>
