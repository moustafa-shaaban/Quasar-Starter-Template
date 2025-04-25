<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated :class="settingsStore.darkMode ? 'bg-dark' : 'bg-primary'">
      <q-toolbar>
        <q-toolbar-title>{{ $t('app.title') }}</q-toolbar-title>
        <q-space />
        <q-btn
          flat
          round
          dense
          :icon="settingsStore.darkMode ? 'light_mode' : 'dark_mode'"
          @click="settingsStore.toggleDarkMode()"
        />
        <q-btn flat round dense icon="settings" to="/settings" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useSettingsStore } from 'src/stores/settings';

const settingsStore = useSettingsStore();
</script>
