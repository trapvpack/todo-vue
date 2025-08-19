<script setup lang="ts">
import { IconTrash } from '@iconify-prerendered/vue-mdi'
const emit = defineEmits<{
  (e: 'toggle', todoId: number): void
  (e: 'delete', todoId: number): void
}>()
const props = defineProps<{
  todo: { id: number; text: string; done: boolean }
}>()
function toggleTodo(todoId: number) {
  emit('toggle', todoId)
}
function deleteTodo(todoId: number) {
  emit('delete', todoId)
}
</script>

<template>
  <li class="flex items-center justify-between p-2 border-b last:border-b-0">
    <label class="flex items-center gap-3">
      <input
        type="checkbox"
        :checked="props.todo.done"
        class="form-checkbox h-5 w-5 text-indigo-600 cursor-pointer"
        @change="() => toggleTodo(props.todo.id)"
      />
      <span :class="{ 'line-through text-gray-400': props.todo.done }">
        {{ props.todo.text }}
      </span>
    </label>

    <button
      @click="() => deleteTodo(todo.id)"
      class="text-red-500 hover:text-red-700"
      aria-label="Удалить задачу"
    >
      <IconTrash
        class="cursor-pointer w-5 h-5 transform transition-transform duration-300 hover:scale-125"
      ></IconTrash>
    </button>
  </li>
</template>

<style scoped></style>
