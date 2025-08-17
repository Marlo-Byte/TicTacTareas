<template>
  <div class="tab-bar">
    <button :class="{ active: activeTab === 'all' }" @click="setTab('all')">Todas</button>
    <button :class="{ active: activeTab === 'pending' }" @click="setTab('pending')">Pendientes</button>
    <button :class="{ active: activeTab === 'completed' }" @click="setTab('completed')">Completadas</button>
    <button :class="{ active: activeTab === 'progress' }" @click="setTab('progress')">En progreso</button>
  </div>
</template>

<script>
export default {
  props: ['activeTab'],
  methods: {
    setTab(tab) {
      this.$emit('update:activeTab', tab);
    }
  }
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
.tab-bar button {
  padding: 8px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}
.tab-bar button:hover {
  background-color: #f0f8ff;
}
.tab-bar button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
