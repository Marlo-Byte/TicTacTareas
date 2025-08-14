<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="title">
        {{ isLogin ? 'Bienvenido de nuevo' : 'Crea una cuenta' }}
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginLayout",
  props: {
    isLogin: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background: #f9fafb;*/ /* Fondo neutro y limpio */
  padding: 20px;
}

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
    inset 0 0 10px rgba(79, 70, 229, 0.1); /* Sombra multicapa para un efecto sorprendente */
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.login-box:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 10px 20px rgba(79, 70, 229, 0.4),
    inset 0 0 15px rgba(79, 70, 229, 0.2); /* Sombra más intensa al hover */
}

.title {
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 36px;
  text-align: center;
  color: #111827;
  letter-spacing: -0.8px;
  position: relative;
  overflow: hidden;
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