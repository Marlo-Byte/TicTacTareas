<template>
  <div class="my-tasks">
    <Header @open-add-task="showModal = true" />
    <TaskList :activeTab.sync="activeTab" :tasks="tasks" />
    <AddTaskModal v-if="showModal" :visible="showModal" @close="showModal=false" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useTaskStore } from '@/stores/tasks';
import Header from '../../components/common/Header.vue';
import TaskList from '../../components/tasks/TaskList.vue';
import AddTaskModal from '../../components/tasks/AddTaskModal.vue';

export default {
  components: { Header, TaskList, AddTaskModal },
  setup() {
    const taskStore = useTaskStore();
    const showModal = ref(false);
    const activeTab = ref('all');

    onMounted(async () => {
      await taskStore.fetchTasks();
    });

    return {
      showModal,
      activeTab,
      tasks: taskStore.tasks
    };
  }
};
</script>

<style scoped>
.my-tasks {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
