<template>
  <div class="login-container">
    <div class="login-box">
      <!-- Botón para cambiar tema -->
      <button class="theme-toggle" @click="toggleTheme">
        {{ isDark ? '☀️' : '🌙' }}
      </button>

      <!-- Título -->
      <h2 class="title">
        {{ isLogin ? 'Bienvenido de nuevo' : 'Crea una cuenta' }}
      </h2>

      <!-- Slot para formulario -->
      <slot></slot>

      <!-- Botón para volver a Home -->
      <router-link to="/" class="back-home">← Volver a Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js';

const props = defineProps({
  isLogin: {
    type: Boolean,
    required: true,
  },
});

const { isDark, toggleTheme } = useTheme();
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f3f4f6;
  transition: background 0.3s ease;
}

/* Login box */
.login-box {
  background: white;
  padding: 48px;
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  position: relative;
  z-index: 1;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    0 5px 15px rgba(79, 70, 229, 0.3),
    inset 0 0 10px rgba(79, 70, 229, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.3s ease, color 0.3s ease;
}

.login-box:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 10px 20px rgba(79, 70, 229, 0.4),
    inset 0 0 15px rgba(79, 70, 229, 0.2);
}

/* Botón toggle */
.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: rgba(255,255,255,0.2);
  color: #4f46e5;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Título */
.title {
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 36px;
  text-align: center;
  color: #111827;
  letter-spacing: -0.8px;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.title:hover::after {
  transform: translateX(0);
}

/* Botón volver */
.back-home {
  display: block;
  margin-top: 24px;
  text-align: center;
  font-weight: 600;
  color: #4f46e5;
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-home:hover {
  color: #7c3aed;
}

/* Responsive */
@media (max-width: 480px) {
  .login-box {
    padding: 32px;
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 
      0 10px 25px rgba(0, 0, 0, 0.15),
      0 5px 10px rgba(79, 70, 229, 0.25),
      inset 0 0 8px rgba(79, 70, 229, 0.1);
  }

  .title {
    font-size: 28px;
    margin-bottom: 28px;
  }
}

@media (max-width: 360px) {
  .login-box {
    padding: 24px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
</style>
