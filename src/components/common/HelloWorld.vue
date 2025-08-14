<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="title">{{ msg }}</h1>
    <h3 class="subtitle">
      Una aplicación simple y eficiente para gestionar tus tareas diarias,
      mantenerte organizado y aumentar tu productividad.
    </h3>
  </div>
</template>

<style scoped>
.greetings {
  max-width: 700px;
  margin: 4rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  background: rgba(79, 70, 229, 0.05); /* Sombra multicapa moderna */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.greetings:hover {
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.2);
}

.title {
  font-weight: 700;
  font-size: 2.8rem;
  color: #111827;
  position: relative;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  border-radius: 2px;
  transition: width 0.4s ease;
}

.title:hover::after {
  width: 100px;
}

.subtitle {
  font-size: 1.3rem;
  font-weight: 400;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

@media (min-width: 1024px) {
  .greetings {
    padding: 3.5rem 5rem;
    max-width: 800px;
  }

  .title {
    font-size: 3.2rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .greetings,
  .title,
  .subtitle {
    text-align: left;
  }

  .title::after {
    left: 0;
    transform: none;
  }
}

@media (max-width: 480px) {
  .greetings {
    margin: 2rem 1rem;
    padding: 1.5rem;
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.1),
      0 4px 10px rgba(79, 70, 229, 0.15);
  }

  .title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }
}
</style>