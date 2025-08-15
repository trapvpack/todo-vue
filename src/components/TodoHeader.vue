<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import TodoFilter from './TodoFilter.vue'
</script>

<template>
  <h1 class="text-2xl font-bold mb-8">TODO LIST</h1>

  <div class="flex space-x-2 mb-6 w-full max-w-xl">
    <search-bar class="flex-grow" />
    <todo-filter />
  </div>
</template>

<style scoped></style>
