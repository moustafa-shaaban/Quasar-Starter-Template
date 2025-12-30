<!-- <template>
  <router-view />
</template>

<script setup>
//
</script> -->

<template>
  <q-layout :dir="settings.language === 'ar' ? 'rtl' : 'ltr'" view="lHh Lpr lFf"
    :class="{ 'bg-grey-10': $q.dark.isActive }">
    <router-view />
  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { watch } from 'vue'
import { useSettingsStore } from 'stores/settings'
import { useTheme } from './composables/useTheme'

const $q = useQuasar()
const settings = useSettingsStore()
const { isDark } = useTheme()

watch(() => isDark.value, val => {
  $q.dark.set(val)
}, { immediate: true })
</script>
