<script setup lang="ts">
import TodoCard from './TodoCard.vue'
const props = defineProps<{
  todos: Array<{ id: number; text: string; done: boolean }>
}>()

const emit = defineEmits<{
  (e: 'toggle', todo: { id: number; text: string; done: boolean }): void
  (e: 'delete', todo: { id: number; text: string; done: boolean }): void
}>()

function onToggle(todo: { id: number; text: string; done: boolean }) {
  emit('toggle', todo)
}
function onDelete(todo: { id: number; text: string; done: boolean }) {
  emit('delete', todo)
}
</script>

<template>
  <div class="max-w-xl mx-auto bg-white rounded shadow p-6">
    <ul>
      <TodoCard
        v-for="todo in props.todos"
        :key="todo.id"
        :todo="todo"
        @toggle="onToggle"
        @delete="onDelete"
      >
      </TodoCard>
    </ul>
  </div>
</template>

<style scoped></style>
