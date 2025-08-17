<script setup>
import { useTheme } from '@/composables/useTheme.js';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button @click="toggleTheme" class="theme-button">
    {{ isDark ? '☀️ Claro' : '🌙 Oscuro' }}
  </button>
</template>

<style scoped>
.theme-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.2s;
}
.theme-button:hover { transform: scale(1.1); }
</style>
