import { defineStore } from 'pinia';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, name: 'Grocery Shopping', dueDate: '2024-03-15', completed: false },
      { id: 2, name: 'Book Appointment', dueDate: '2024-03-16', completed: false },
      { id: 3, name: 'Pay Bills', dueDate: '2024-03-17', completed: false },
      { id: 4, name: 'Plan Trip', dueDate: '2024-03-18', completed: false },
      { id: 5, name: 'Workout', dueDate: '2024-03-19', completed: false },
      { id: 6, name: 'Workout', dueDate: '2024-03-19', completed: false },
      { id: 7, name: 'Workout', dueDate: '2024-03-19', completed: false },
      { id: 8, name: 'Workout', dueDate: '2024-03-19', completed: false },
      { id: 9, name: 'Workout', dueDate: '2024-03-19', completed: false },
      { id: 10, name: 'Workout', dueDate: '2024-03-19', completed: false },
      { id: 11, name: 'Workout', dueDate: '2024-03-19', completed: false },
      { id: 12, name: 'Workout', dueDate: '2024-03-19', completed: false },
    ]
  })
});