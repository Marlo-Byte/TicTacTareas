<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    return { router };
  }
};
</script>

<style scoped>
.app-container {
  overflow: hidden; /* Evita barras de desplazamiento innecesarias */
}
</style>