<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/common/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/icons/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="TicTacTareas" />

      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/login">Iniciar Sesión</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: rgba(79, 70, 229, 0.05); /* Fondo sutil para integrar con .greetings */
  padding: 0.5rem 1rem;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra suave para coherencia */
  transition: box-shadow 0.3s ease;
}

nav:hover {
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.2);
}

nav a {
  color: #4f46e5; /* Color índigo consistente */
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

nav a:hover::after,
nav a.router-link-exact-active::after {
  transform: translateX(0);
}

nav a:hover {
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  color: white;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  transform: translateY(-2px);
}

nav a.router-link-exact-active {
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  color: white;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    font-size: 3rem;
  font-weight: 700;
  color: #2563eb; /* azul */
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
