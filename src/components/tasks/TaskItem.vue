<template>
  <div class="task-item">
    <!-- Checkbox personalizado -->
    <label class="checkbox-container">
      <input type="checkbox" v-model="task.completed" />
      <span class="checkmark"></span>
    </label>

    <!-- Nombre y vencimiento -->
    <div class="task-info">
      <span :class="{ completed: task.completed }">{{ task.name }}</span>
      <small class="due-date">Vence: {{ task.dueDate }}</small>
    </div>

    <!-- Estado y acciones -->
    <div class="task-actions">
      <span class="task-status" :class="statusClass">{{ statusText }}</span>

      <!-- Botones editar y eliminar -->
      <button class="action-btn edit-btn" @click="$emit('edit', task)">✏️</button>
      <button class="action-btn delete-btn" @click="$emit('delete', task)">🗑️</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  computed: {
    statusText() {
      if (this.task.completed) return 'Completado';
      if (this.task.inProgress) return 'En progreso';
      return 'Pendiente';
    },
    statusClass() {
      if (this.task.completed) return 'completed-status';
      if (this.task.inProgress) return 'progress-status';
      return 'pending-status';
    }
  }
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.task-item:hover {
  background-color: var(--color-background-mute);
}

.task-info {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  flex: 1;
}

.task-item span {
  font-size: 14px;
}

.task-item span.completed {
  text-decoration: line-through;
  color: rgba(200, 200, 200, 0.8);
}

.due-date {
  font-size: 12px;
  color: rgba(200,200,200,0.7);
  margin-top: 2px;
}

/* Checkbox personalizado */
.checkbox-container {
  display: inline-block;
  position: relative;
  width: 22px;
  height: 22px;
}

.checkbox-container input {
  opacity: 0;
  width: 0;
  height: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: var(--color-background-mute);
  border: 2px solid var(--color-border);
  border-radius: 6px;
  transition: 0.2s;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #28a745;
  border-color: #28a745;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Estado y acciones */
.task-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Estado visual */
.task-status {
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
}

.pending-status { background-color: #f0ad4e; color: white; }
.progress-status { background-color: #5bc0de; color: white; }
.completed-status { background-color: #28a745; color: white; }

/* Botones de acción */
.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  transition: transform 0.2s;
}

.action-btn:hover {
  transform: scale(1.2);
}

.edit-btn { color: #ffc107; }   /* amarillo */
.delete-btn { color: #dc3545; } /* rojo */
</style>
