<template>
  <div class="dropdown">
    <button @click="$emit('close')">⚙️ Configurar</button>
    <button @click="handleLogout">🚪 Cerrar Sesión</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth.js';

const emit = defineEmits(['close']);
const router = useRouter();
const { logout } = useAuth();

function handleLogout() {
  logout();
  router.push('/login');
  emit('close');
}
</script>

<style scoped>
.dropdown { position: absolute; top: 55px; right: 0; background: white; border: 1px solid #eee; border-radius: 8px; padding: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); min-width: 140px; z-index: 50; animation: fadeIn 0.2s ease; }
.dropdown button { display: block; width: 100%; text-align: left; padding: 8px; background: none; border: none; cursor: pointer; font-size: 14px; border-radius: 6px; transition: background 0.2s; }
.dropdown button:hover { background: #f7f7f7; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
</style>
