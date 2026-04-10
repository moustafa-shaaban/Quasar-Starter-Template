<script setup>
import { useI18n } from 'vue-i18n'
import { useSettings } from 'src/composables/useSettings';
import { storeToRefs } from "pinia";
import ThemeToggle from 'src/components/ThemeToggle.vue';

const { locale } = useI18n()
const { settingsStore, availableLanguages } = useSettings();
const { language } = storeToRefs(settingsStore)

function setLanguage(lang) {
  const newLang = settingsStore.language = lang
  settingsStore.setLanguage(newLang)
  locale.value = newLang
}
</script>

<template>
  <q-page padding>
    <h5>{{ $t('switch_language') }}</h5>

    <q-select v-model="language" :options="availableLanguages" option-value="value" option-label="label"
      label="Language" @update:model-value="setLanguage($event)" emit-value map-options />

    <h5>{{ $t('toggle_theme') }}</h5>
    <theme-toggle></theme-toggle>
  </q-page>
</template>
