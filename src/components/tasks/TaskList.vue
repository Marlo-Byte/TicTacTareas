<template>
  <div class="task-list">
    <!-- Barra de búsqueda -->
    <SearchBar @search="updateSearch" />

    <!-- Tabs -->
    <TabBar :activeTab="activeTab" @update:activeTab="updateTab" />

    <!-- Lista filtrada -->
    <TaskItem v-for="task in filteredTasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import TabBar from '../common/TabBar.vue';
import TaskItem from './TaskItem.vue';
import SearchBar from '../common/SearchBar.vue'; // 👈 importa tu searchbar
import { useTaskStore } from '../../stores/tasks';

export default {
  components: { TabBar, TaskItem, SearchBar },
  data() {
    return {
      activeTab: 'all',
      searchQuery: '' // 👈 estado local de búsqueda
    };
  },
  computed: {
    filteredTasks() {
      const store = useTaskStore();

      // 1️⃣ Filtrar por pestaña
      let tasks = store.tasks;
      if (this.activeTab === 'pending') {
        tasks = tasks.filter(t => !t.completed);
      } else if (this.activeTab === 'completed') {
        tasks = tasks.filter(t => t.completed);
      } else if (this.activeTab === 'progress') {
        tasks = tasks.filter(t => t.inProgress); // si tienes esta propiedad
      }

      // 2️⃣ Filtrar por búsqueda
      if (this.searchQuery) {
        tasks = tasks.filter(t =>
          t.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return tasks;
    }
  },
  methods: {
    updateTab(tab) {
      this.activeTab = tab;
    },
    updateSearch(query) {
      this.searchQuery = query;
    }
  }
};
</script>

<style scoped>
.task-list {
  padding: 20px;
}
</style>
