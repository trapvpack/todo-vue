<script setup lang="ts">
import { IconSearch } from '@iconify-prerendered/vue-mdi'
const emit = defineEmits<{
  (e: 'search', query: string): void
}>()

const searchQuery = defineModel<string>()

function onSearch() {
  emit('search', searchQuery.value ?? '')
}
</script>

<template>
  <div class="relative flex items-center">
    <input
      class="flex-grow px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Search notes"
      type="text"
      v-model="searchQuery"
      @keyup.enter="onSearch"
      @keyup.esc="onSearch"
      aria-label="Search notes"
    />
    <IconSearch
      class="absolute right-2 w-7 h-7 cursor-pointer text-indigo-500"
      @click="onSearch"
      aria-hidden="true"
    />
  </div>
</template>

<style scoped></style>
