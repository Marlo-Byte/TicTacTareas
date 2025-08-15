<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="landing">
    <section class="hero">
      <h1>✨ Bienvenido a <span>TicTacTareas</span></h1>
      <p>Organiza tus tareas con estilo, rapidez y sin complicaciones.</p>

      <div class="cta-buttons">
        <RouterLink to="/register" class="cta-button primary">🚀 Crear Cuenta</RouterLink>
        <RouterLink to="/login" class="cta-button secondary">🔑 Iniciar Sesión</RouterLink>
      </div>
    </section>
    <RouterView />
  </main>
</template>

<style scoped>
/* Fondo gradiente moderno */
.landing {
  min-height: 100vh; /* Ocupa toda la pantalla */
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
}

/* Contenedor centrado */
.hero {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 4rem 3rem; /* Más espacio interno */
  border-radius: 20px;
  backdrop-filter: blur(12px);
  background: linear-gradient(135deg, #6d28d9 0%, #4f46e5 50%, #3b82f6 100%);
  color: white;
  max-width: 900px; /* Más ancho */
  width: 100%;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  animation: fadeIn 0.8s ease-in-out;
}

/* Título con degradado */
.hero h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.hero h1 span {
  background: linear-gradient(90deg, #ff9f43, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* Botones */
.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  padding: 0.9rem 1.6rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.primary {
  background: linear-gradient(90deg, #ff9f43, #ff6b6b);
  color: white;
}

.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
}

.secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid white;
}

.secondary:hover {
  background: white;
  color: #4f46e5;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
}

/* Animación de entrada */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 640px) {
  .hero h1 {
    font-size: 2rem;
  }
  .hero p {
    font-size: 1rem;
  }
}
</style>
