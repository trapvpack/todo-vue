<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import TodoFilter from './TodoFilter.vue'
import { ref } from 'vue'

const emit = defineEmits<{
  search: [query: string]
}>()

const searchQuery = ref('')

function onSearch(query: string) {
  searchQuery.value = query
  emit('search', query)
}
</script>

<template>
  <h1 class="text-2xl font-bold mb-8">TODO LIST</h1>

  <div class="flex justify-start space-x-2 w-full max-w-3xl mb-6 items-center">
    <search-bar v-model="searchQuery" @search="onSearch" class="flex-grow" />
    <todo-filter />
  </div>
</template>

<style scoped></style>
