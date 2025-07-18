// client/src/services/api.js
import axios from 'axios';

const API_URL = 'https://tpserver-production.up.railway.app/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

export const taskService = {
  getAll: async () => (await api.get('/tasks')).data,
  create: async (task) => (await api.post('/tasks', task)).data,
  toggle: async (id) => (await api.put(`/tasks/${id}`)).data,
  remove: async (id) => (await api.delete(`/tasks/${id}`)).data,
};