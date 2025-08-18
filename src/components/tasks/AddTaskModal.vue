<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <h2>{{ isEdit ? 'Editar Tarea' : 'Nueva Tarea' }}</h2>

      <form @submit.prevent="submitTask">
        <label>
          Título:
          <input type="text" v-model="form.title" required />
        </label>

        <label>
          Descripción:
          <textarea v-model="form.description"></textarea>
        </label>

        <label>
          Fecha de vencimiento:
          <input type="date" v-model="form.dueDate" required />
        </label>

        <div class="buttons">
          <button type="submit">{{ isEdit ? 'Guardar Cambios' : 'Crear Tarea' }}</button>
          <button type="button" @click="close">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useTaskStore } from '@/stores/tasks';
import { useAuth } from '@/composables/useAuth.js';
import http from '@/services/http.js';

const emit = defineEmits(['close']);
const props = defineProps({
  task: { type: Object, default: null }
});

const taskStore = useTaskStore();
const { token } = useAuth();

const form = ref({ title: '', description: '', dueDate: '' });
const isEdit = computed(() => !!props.task);

watch(() => props.task, (t) => {
  if (t) form.value = { ...t };
});

async function submitTask() {
  try {
    const headers = { Authorization: `Bearer ${token.value}` };

    if (isEdit.value) {
      await http.put(
        `https://tictactareas-production.up.railway.app/tictactareas/api/v1/task/${form.value.id}`,
        form.value,
        { headers }
      );
    } else {
      await http.post(
        'https://tictactareas-production.up.railway.app/tictactareas/api/v1/task',
        form.value,
        { headers }
      );
    }

    await taskStore.fetchTasks(); // refresca todas las tareas desde backend
    emit('close');

  } catch (err) {
    alert('Error al guardar la tarea: ' + err);
  }
}

function close() {
  emit('close');
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
}
label {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  font-weight: 500;
}
input, textarea {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}
textarea { resize: none; }
.buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
button { padding: 8px 12px; border-radius: 6px; border: none; cursor: pointer; }
button[type="submit"] { background-color: #007bff; color: white; }
button[type="button"] { background-color: #ccc; color: black; }
</style>
