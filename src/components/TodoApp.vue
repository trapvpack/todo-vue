<script setup lang="ts">
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import AddButton from './AddButton.vue'
import { ref, computed } from 'vue'

const todos = ref([
  { id: 1, text: 'Note #1', done: false },
  { id: 2, text: 'Note #2', done: true },
  { id: 3, text: 'Note #3', done: false },
])

const activeFilter = ref(1)

function onFilterSelected(selectedFilter: { id: number; text: string; isActive: boolean }) {
  activeFilter.value = selectedFilter.id
}

const filteredTodos = computed(() => {
  if (activeFilter.value === 2) return todos.value.filter((todo) => todo.done)
  if (activeFilter.value === 3) return todos.value.filter((todo) => !todo.done)
  return todos.value
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
    <todo-header :activeFilter="activeFilter" @filter="onFilterSelected"></todo-header>
    <todo-list class="w-full max-w-xl" :todos="filteredTodos" />
    <add-button class="fixed bottom-8 right-8" />
  </div>
</template>

<style scoped></style>
