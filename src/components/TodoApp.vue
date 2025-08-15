<script setup lang="ts">
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import AddButton from './AddButton.vue'
import { ref } from 'vue'

const todos = ref([
  { id: 1, text: 'Note #1', done: false },
  { id: 2, text: 'Note #2', done: true },
  { id: 3, text: 'Note #3', done: false },
])
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
    <todo-header></todo-header>
    <todo-list class="w-full max-w-xl" :todos="todos" />
    <add-button class="fixed bottom-8 right-8" />
  </div>
</template>

<style scoped></style>
