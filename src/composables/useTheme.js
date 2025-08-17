import { ref, watch } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  // Inicializar según localStorage o sistema
  const savedTheme = localStorage.getItem('isDark');
  if (savedTheme === 'true') isDark.value = true;
  else if (savedTheme === 'false') isDark.value = false;
  else isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Aplicar al body
  document.body.classList.toggle('dark-theme', isDark.value);

  // Guardar cambios automáticamente
  watch(isDark, (newVal) => {
    document.body.classList.toggle('dark-theme', newVal);
    localStorage.setItem('isDark', newVal);
  });

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return { isDark, toggleTheme };
}
