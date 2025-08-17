<script setup lang="ts">
import searchIcon from '../assets/icons/Vector.svg'

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
    <img
      class="w-5 h-5 absolute right-7 pointer-events-none"
      :src="searchIcon"
      alt="search icon"
      aria-hidden="true"
    />
  </div>
</template>

<style scoped></style>
