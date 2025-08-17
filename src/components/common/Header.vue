<template>
  <header class="header">
    <!-- LOGO -->
    <div class="logo">
      <h1>TicTacTareas</h1>
    </div>

    <!-- Acciones rápidas -->
    <div class="actions">
      <!-- Botón añadir tarea -->
      <button class="icon-button" @click="$emit('add-task')">➕</button>

      <!-- Notificaciones -->
      <button class="icon-button" @click="toggleNotifications">
        🔔
        <span v-if="notifications > 0" class="badge">{{ notifications }}</span>
      </button>

      <!-- Modo oscuro -->
      <button class="icon-button" @click="toggleTheme">
        <span v-if="isDark">☀️</span>
        <span v-else>🌙</span>
      </button>

      <!-- Perfil -->
      <div class="profile-container">
        <img
          :src="profilePic"
          alt="Profile"
          @click="toggleDropdown"
          class="profile-pic"
        />
        <ProfileDropdown v-if="showDropdown" @close="toggleDropdown" />
      </div>
    </div>
  </header>
</template>

<script>
import ProfileDropdown from './ProfileDropdown.vue';
import { useTheme } from '@/composables/useTheme.js';

export default {
  components: { ProfileDropdown },
  setup() {
    const { isDark, toggleTheme } = useTheme();
    return { isDark, toggleTheme };
  },
  data() {
    return {
      showDropdown: false,
      profilePic: '/src/assets/icons/profile-placeholder.png',
      notifications: 3
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleNotifications() {
      alert('Abrir centro de notificaciones');
      this.notifications = 0;
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin-bottom: 20px;
}

.logo h1 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #007bff;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  position: relative;
  transition: transform 0.2s;
}
.icon-button:hover { transform: scale(1.1); }

.badge {
  position: absolute;
  top: -4px;
  right: -6px;
  background: red;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 50%;
}

.profile-container {
  position: relative;
}
.profile-pic {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  border: 2px solid #ddd;
  transition: 0.2s;
}
.profile-pic:hover { border-color: #007bff; }

/* Modo oscuro */
body.dark-theme .header {
  background-color: #1f2937;
  color: #f5f5f5;
}
</style>
