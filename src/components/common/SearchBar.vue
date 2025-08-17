<template>
  <input
    type="text"
    v-model="searchQuery"
    @input="emitSearch"
    placeholder="🔍 Buscar tareas..."
    class="search-input"
  />
</template>

<script>
export default {
  data() {
    return { searchQuery: '' };
  },
  methods: {
    emitSearch() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.search-input {
  padding: 10px 14px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: 0.2s;
}
.search-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0,123,255,0.3);
}
</style>
