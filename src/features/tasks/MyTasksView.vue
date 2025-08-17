<template>
  <div class="my-tasks">
    <Header @search="filterTasks" />
    <TaskList :activeTab.sync="activeTab" />
  </div>
</template>

<script>
import Header from '../../components/common/Header.vue';
import TaskList from '../../components/tasks/TaskList.vue';

export default {
  components: { Header, TaskList },
  data() {
    return { activeTab: 'all' };
  },
  methods: {
    filterTasks(query) {
      console.log('Search query:', query);
    }
  }
};
</script>

<style scoped>
.my-tasks {       /* ocupa toda la altura */
  width: 100%;             /* ocupa todo el ancho */ 
  padding: 20px;           /* espacio interno */
  display: flex;
  flex-direction: column;
}
</style>
