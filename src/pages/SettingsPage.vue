
<template>
    <q-page padding>
      <h1>{{ $t('settings.language') }}</h1>

      <q-select
        v-model="settingsStore.language"
        :options="availableLanguages"
        option-value="value"
        option-label="label"
        label="Language"
        @update:model-value="settingsStore.setLanguage($event)"
        emit-value
        map-options
      />

      <q-toggle
        v-model="settingsStore.darkMode"
        :label="$t('settings.darkMode')"
        @update:model-value="settingsStore.toggleDarkMode()"
      />
    </q-page>
  </template>

  <script setup>
  import { useSettings } from 'src/composables/useSettings';

  const { settingsStore, availableLanguages } = useSettings();
  </script>
