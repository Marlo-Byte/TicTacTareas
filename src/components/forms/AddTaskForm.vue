<template>
  <form @submit.prevent="createTask" class="task-form">
    <input v-model="title" placeholder="Título" required />
    <textarea v-model="description" placeholder="Descripción"></textarea>
    <input type="date" v-model="dueDate" required />
    <button type="submit">Añadir Tarea</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/tasks';
import { useAuth } from '@/composables/useAuth.js';
import http from '@/services/http.js';

const taskStore = useTaskStore();
const { token } = useAuth();

const title = ref('');
const description = ref('');
const dueDate = ref('');

async function createTask() {
  if (!title.value || !dueDate.value) return;

  try {
    const headers = { Authorization: `Bearer ${token.value}` };
    await http.post(
      'https://tictactareas-production.up.railway.app/tictactareas/api/v1/task',
      {
        title: title.value,
        description: description.value,
        dueDate: new Date(dueDate.value).getTime()
      },
      { headers }
    );

    await taskStore.fetchTasks(); // refresca tareas desde backend

    // limpiar inputs
    title.value = '';
    description.value = '';
    dueDate.value = '';

  } catch (err) {
    alert('Error al crear la tarea: ' + err);
  }
}
</script>

<style scoped>
.task-form input,
.task-form textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
}
.task-form button {
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
.task-form button:hover { opacity: 0.9; }
</style>
