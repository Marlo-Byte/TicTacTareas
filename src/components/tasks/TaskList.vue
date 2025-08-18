<template>
  <div class="task-list">
    <!-- Barra de búsqueda -->
    <SearchBar @search="updateSearch" />

    <!-- Tabs -->
    <TabBar :activeTab="activeTab" @update:activeTab="updateTab" />

    <!-- Lista filtrada -->
    <TaskItem 
      v-for="task in filteredTasks" 
      :key="task.id" 
      :task="task"
      @edit="editTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import TabBar from '../common/TabBar.vue';
import TaskItem from './TaskItem.vue';
import SearchBar from '../common/SearchBar.vue';
import { useTaskStore } from '../../stores/tasks';

export default {
  components: { TabBar, TaskItem, SearchBar },
  data() {
    return {
      activeTab: 'all',
      searchQuery: ''
    };
  },
  computed: {
    filteredTasks() {
      const store = useTaskStore();
      let tasks = store.tasks;

      // Filtrar por categoría
      if (this.activeTab === 'pending') tasks = tasks.filter(t => !t.completed);
      else if (this.activeTab === 'completed') tasks = tasks.filter(t => t.completed);
      else if (this.activeTab === 'progress') tasks = tasks.filter(t => t.inProgress);

      // Filtrar por búsqueda
      if (this.searchQuery) {
        tasks = tasks.filter(t =>
          t.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return tasks;
    }
  },
  methods: {
    updateTab(tab) { this.activeTab = tab; },
    updateSearch(query) { this.searchQuery = query; },
    async editTask(task) {
      const store = useTaskStore();
      await store.updateTask(task.id, task);
    },
    async deleteTask(task) {
      const store = useTaskStore();
      await store.deleteTask(task.id);
    }
  },
  mounted() {
    const store = useTaskStore();
    store.fetchTasks(); // carga tareas al iniciar
  }
};
</script>
