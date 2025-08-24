<script setup lang="ts">
import TodoCard from './TodoCard.vue'
const props = defineProps<{
  todos: Array<{ id: number; text: string; done: boolean }>
}>()

const emit = defineEmits<{
  (e: 'toggle', todoId: number): void
  (e: 'delete', todoId: number): void
}>()
</script>

<template>
  <div class="max-w-xl mx-auto bg-white rounded shadow p-6">
    <ul>
      <TodoCard
        v-for="todo in props.todos"
        :key="todo.id"
        :todo="todo"
        @toggle="() => emit('toggle', todo.id)"
        @delete="() => emit('delete', todo.id)"
      >
      </TodoCard>
    </ul>
  </div>
</template>

<style scoped></style>
