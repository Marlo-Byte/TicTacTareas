<template>
  <form @submit.prevent="isLogin ? handleLogin() : handleRegister()" class="form">
    <div class="form-group">
      <label for="username">Usuario</label>
      <input
        id="username"
        v-model="username"
        type="text"
        placeholder="Tu nombre de usuario"
        required
      />
    </div>

    <div class="form-group">
      <label for="password">Contraseña</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Tu contraseña"
        required
      />
    </div>

    <button type="submit">
      {{ isLogin ? 'Iniciar Sesión' : 'Registrarse' }}
    </button>

    <p class="toggle-text">
      {{ isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?' }}
      <button type="button" @click="$emit('toggle')" class="toggle-button">
        {{ isLogin ? 'Regístrate' : 'Inicia Sesión' }}
      </button>
    </p>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    isLogin: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      console.log("Iniciar sesión con:", this.username, this.password);
      // Lógica real del login
    },
    handleRegister() {
      console.log("Registrar usuario:", this.username, this.password);
      // Lógica real del registro
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 16px;
}

label {
  font-size: 14px;
  color: #111827;
  margin-bottom: 6px;
  display: block;
  font-weight: 600;
  transition: color 0.3s ease;
}

/* Inputs con color y placeholder */
input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  color: #4f46e5; /* color del texto */
  font-weight: 600;
  transition: all 0.3s ease;
  background: rgba(255,255,255,0.8);
}

input::placeholder {
  color: #a5b4fc; /* placeholder */
}

/* Botón submit */
button[type="submit"] {
  margin-top: 16px;
  padding: 12px;
  font-size: 16px;
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

button[type="submit"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(127, 29, 255, 0.4);
}

/* Toggle */
.toggle-text {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #555;
}

.toggle-button {
  background: none;
  border: none;
  color: #4f46e5;
  font-weight: bold;
  cursor: pointer;
  padding-left: 4px;
  text-decoration: underline;
}
</style>
