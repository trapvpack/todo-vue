<script setup lang="ts">
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import AddButton from './AddButton.vue'
import { ref, computed, reactive } from 'vue'

const todos = reactive([
  { id: 1, text: 'Note #1', done: false },
  { id: 2, text: 'Note #2', done: true },
  { id: 3, text: 'Note #3', done: false },
])

function onToggle(todo: { id: number; text: string; done: boolean }) {
  todo.done = !todo.done
}

function onDelete(todo: { id: number; text: string; done: boolean }) {
  const index = todos.findIndex((t) => t.id === todo.id)
  if (index !== -1) {
    todos.splice(index, 1)
  }
}
const activeFilter = ref(1)

function onFilterSelected(selectedFilter: { id: number; text: string; isActive: boolean }) {
  activeFilter.value = selectedFilter.id
}

const filteredTodos = computed(() => {
  if (activeFilter.value === 2) return todos.filter((todo) => todo.done)
  if (activeFilter.value === 3) return todos.filter((todo) => !todo.done)
  return todos
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center pt-10 max-w-5xl w-5xl relative">
    <todo-header @filter="onFilterSelected"></todo-header>
    <todo-list
      class="w-full max-w-xl"
      :todos="filteredTodos"
      @delete="onDelete"
      @toggle="onToggle"
    />
    <add-button class="bottom-8 right-8 absolute" />
  </div>
</template>

<style scoped></style>
