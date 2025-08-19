<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import TodoFilter from './TodoFilter.vue'
import { reactive, ref } from 'vue'
const filters = reactive([
  { id: 1, text: 'All' },
  { id: 2, text: 'Done' },
  { id: 3, text: 'Active' },
])

const props = defineProps<{
  activeFilter: number
}>()

const emit = defineEmits<{
  (e: 'filter', selectedFilter: number): void
  (e: 'search', query: string): void
}>()

const searchQuery = ref('')

function onFilterSelected(activeFilter: number) {
  emit('filter', activeFilter)
}
function onSearch(query: string) {
  searchQuery.value = query
  emit('search', query)
}
</script>

<template>
  <h1 class="text-2xl font-bold mb-8">TODO LIST</h1>

  <div class="flex justify-start space-x-2 w-full max-w-3xl mb-6 items-center">
    <search-bar v-model="searchQuery" @search="onSearch" class="flex-grow" />
    <todo-filter :filters="filters" :activeFilter="props.activeFilter" @filter="onFilterSelected" />
  </div>
</template>

<style scoped></style>
