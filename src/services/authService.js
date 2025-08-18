import http from './http';

export const authService = {
  async login(email, password) {
    const { data } = await http.post('/auth/login', { email, password });
    return data; // { token, user }
  },

  async register(email, password) {
    const { data } = await http.post('/auth/register', { email, password });
    return data; // { user }
  },

  async me() {
    const { data } = await http.get('/auth/me');
    return data;
  },

  isAuthenticated() {
    return !!localStorage.getItem("token");
  }
};
