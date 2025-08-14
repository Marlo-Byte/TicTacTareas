<template>
  <form @submit.prevent="handleRegister" class="form">
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

    <div class="form-group">
      <label for="confirmPassword">Confirmar Contraseña</label>
      <input
        id="confirmPassword"
        v-model="confirmPassword"
        type="password"
        placeholder="Repite tu contraseña"
        required
      />
    </div>

    <button type="submit">
      Registrarse
    </button>

    <p class="toggle-text">
      ¿Ya tienes cuenta?
      <button type="button" @click="$emit('toggle')" class="toggle-button">
        Inicia Sesión
      </button>
    </p>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      console.log("Registrando:", this.username, this.password);
      // Lógica real de registro
    },
  },
};
</script>

<style scoped>
/* Reutiliza los mismos estilos que LoginForm.vue para mantener consistencia */
.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 16px;
}

label {
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

button[type="submit"] {
  margin-top: 10px;
  padding: 12px;
  font-size: 16px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #4338ca;
}

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
