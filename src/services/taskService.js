import http from './http';

export const taskService = {
  async getTasks(params = {}) {
    const { data } = await http.get('/task', { params });
    return data;
  },

  async createTask(task) {
    const { data } = await http.post('/task', task);
    return data;
  },

  async updateTask(id, task) {
    const { data } = await http.put(`/task/${id}`, task);
    return data;
  },

  async deleteTask(id) {
    const { data } = await http.delete(`/task/${id}`);
    return data;
  }
};
