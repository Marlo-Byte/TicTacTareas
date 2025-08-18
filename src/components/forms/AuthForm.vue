<template>
  <form @submit.prevent="props.isLogin ? handleLogin() : handleRegister()" class="form">
    <!-- Email -->
    <div class="form-group">
      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Tu correo electrónico"
        required
        autocomplete="email"
      />
    </div>

    <!-- Contraseña -->
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Tu contraseña"
        required
        minlength="6"
        autocomplete="current-password"
      />
    </div>

    <!-- Errores -->
    <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
    <p v-else-if="globalError" class="error-text">{{ globalError }}</p>

    <!-- Botón -->
    <button type="submit" :disabled="loadingBtn">
      <span v-if="loadingBtn">Procesando…</span>
      <span v-else>{{ props.isLogin ? 'Iniciar Sesión' : 'Registrarse' }}</span>
    </button>

    <!-- Toggle -->
    <p class="toggle-text">
      {{ props.isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?' }}
      <button type="button" @click="emit('toggle')" class="toggle-button">
        {{ props.isLogin ? 'Regístrate' : 'Inicia Sesión' }}
      </button>
    </p>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const props = defineProps({
  isLogin: { type: Boolean, required: true },
});

const emit = defineEmits(["toggle", "success"]);

const router = useRouter();
const { login, register, loading, error } = useAuth();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const loadingBtn = computed(() => loading.value);
const globalError = computed(() => error.value);

function resetLocalErrors() {
  errorMessage.value = "";
}

async function handleLogin() {
  resetLocalErrors();
  if (password.value.length < 6) {
    errorMessage.value = "La contraseña debe tener al menos 6 caracteres";
    return;
  }

  try {
    await login(email.value, password.value);
    emit("success", { type: "login" });
    router.push("/my-tasks"); // ruta privada
  } catch (e) {
    // error global ya viene de useAuth.error
  }
}

async function handleRegister() {
  resetLocalErrors();
  if (password.value.length < 6) {
    errorMessage.value = "La contraseña debe tener al menos 6 caracteres";
    return;
  }

  try {
    await register(email.value, password.value);
    emit("success", { type: "register" });
    router.push("/login");
  } catch (e) {
    // error global ya viene de useAuth.error
  }
}
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
}

input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #4f46e5;
  font-weight: 600;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
}

input:focus {
  border-color: #4f46e5;
  outline: none;
  box-shadow: 0 0 4px rgba(79, 70, 229, 0.5);
}

input::placeholder {
  color: #a5b4fc;
}

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

button[type="submit"]:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

button[type="submit"]:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(127, 29, 255, 0.4);
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

.error-text {
  color: #dc2626;
  font-size: 13px;
  margin-top: -8px;
  margin-bottom: 10px;
}
</style>
