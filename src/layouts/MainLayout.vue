<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated :class="settingsStore.darkMode ? 'bg-dark' : 'bg-primary'">
      <q-toolbar>
        <q-btn flat @click="settingsStore.toggleSideBar()" round dense icon="menu" />
        <q-toolbar-title>{{ $t('title') }}</q-toolbar-title>
        <q-space />
        <q-btn flat round dense icon="translate" @click="switchLanguage" />
        <q-btn flat round dense :icon="settingsStore.darkMode ? 'light_mode' : 'dark_mode'"
          @click="settingsStore.toggleDarkMode()" />
        <q-btn flat round dense icon="settings" to="/settings" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="settingsStore.sideBar" :side="settingsStore.language === 'en' ? 'left' : 'right'" :width="200"
      :breakpoint="700" elevated>
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 4" :key="n">Drawer {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useSettingsStore } from 'src/stores/settings';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const settingsStore = useSettingsStore();

function switchLanguage() {
  const newLang = settingsStore.language === 'en' ? 'ar' : 'en'
  settingsStore.setLanguage(newLang)
  locale.value = newLang
}
</script>
