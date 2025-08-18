import { ref, computed } from "vue";
import { authService } from "@/services/authService";

const user = ref(null);
const token = ref(localStorage.getItem("token") || null);
const isAuthenticated = computed(() => !!token.value);
const loading = ref(false);
const error = ref("");

async function login(email, password) {
  try {
    loading.value = true;
    error.value = "";
    const data = await authService.login(email, password);
    token.value = data.jwt; // ← clave para JWT
    user.value = data.user ?? null;
    localStorage.setItem("token", token.value);
    return data;
  } catch (err) {
    error.value = err;
    throw err;
  } finally {
    loading.value = false;
  }
}

async function register(email, password) {
  try {
    loading.value = true;
    error.value = "";
    const data = await authService.register(email, password);
    return data;
  } catch (err) {
    error.value = err;
    throw err;
  } finally {
    loading.value = false;
  }
}

function logout() {
  user.value = null;
  token.value = null;
  localStorage.removeItem("token");
}

async function restoreSession() {
  if (!token.value) return;
  try {
    const data = await authService.me();
    user.value = data.user ?? null;
  } catch {
    logout();
  }
}

export function useAuth() {
  return { user, token, isAuthenticated, loading, error, login, register, logout, restoreSession };
}
