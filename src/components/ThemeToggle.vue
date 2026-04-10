<script setup>
import { useTheme } from 'src/composables/useTheme';

const { isDark } = useTheme();
</script>

<template>
  <q-toggle v-model="isDark" dense color="amber" unchecked-icon="light_mode" checked-icon="dark_mode" />
</template>
