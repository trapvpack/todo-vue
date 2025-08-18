<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import TodoFilter from './TodoFilter.vue'
import { reactive } from 'vue'
const filters = reactive([
  { id: 1, text: 'All', isActive: true },
  { id: 2, text: 'Completed', isActive: false },
  { id: 3, text: 'Incompleted', isActive: false },
])

const props = defineProps<{
  activeFilter: number
}>()

const emit = defineEmits<{
  (e: 'filter', selectedFilter: { id: number; text: string; isActive: boolean }): void
}>()

function onFilterSelected(selectedFilter: { id: number; text: string; isActive: boolean }) {
  filters.forEach((f) => {
    f.isActive = f.id === selectedFilter.id
  })
  emit('filter', selectedFilter)
}
</script>

<template>
  <h1 class="text-2xl font-bold mb-8">TODO LIST</h1>

  <div class="flex justify-start space-x-2 w-full max-w-xl mb-6 items-center">
    <search-bar class="flex-grow" />
    <todo-filter :filters="filters" @filter="onFilterSelected" />
  </div>
</template>

<style scoped></style>
