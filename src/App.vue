<script setup>
import { watch } from 'vue'
import { useQuasar } from 'quasar'
import { useTheme } from './composables/useTheme'

const $q = useQuasar()
const { isDark } = useTheme()

watch(() => isDark.value, val => {
  $q.dark.set(val)
}, { immediate: true })
</script>

<template>
  <router-view />
</template>