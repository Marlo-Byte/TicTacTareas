import { defineStore } from 'pinia';
import http from '@/services/http';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: []
  }),
  actions: {
    async fetchTasks() {
      try {
        const { data } = await http.get('/task'); // trae todas las tareas
        this.tasks = data; // reemplaza el array completo para evitar duplicados
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    },
    async addTask(task) {
      try {
        await http.post('/task', task); // crea en backend
        await this.fetchTasks(); // recarga todas desde backend
      } catch (err) {
        console.error('Error adding task:', err);
      }
    },
    async updateTask(id, updatedTask) {
      try {
        await http.put(`/task/${id}`, updatedTask);
        await this.fetchTasks();
      } catch (err) {
        console.error('Error updating task:', err);
      }
    },
    async deleteTask(id) {
      try {
        await http.delete(`/task/${id}`);
        await this.fetchTasks();
      } catch (err) {
        console.error('Error deleting task:', err);
      }
    }
  }
});
