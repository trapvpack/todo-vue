<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{
  filters: Array<{ id: number; text: string; isActive: boolean }>
}>()
const open = ref(false)
function toggleDropdown() {
  open.value = !open.value
}
const emit = defineEmits<{
  (e: 'filter', filter: { id: number; text: string; isActive: boolean }): void
}>()
function selectFilter(filter: { id: number; text: string; isActive: boolean }) {
  emit('filter', filter)
}
const activeFilterText = computed(() => {
  return props.filters.filter((f) => f.isActive)[0].text
})
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-30 cursor-pointer"
      @click="toggleDropdown"
    >
      {{ activeFilterText }}
    </button>

    <div v-if="open" class="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
      <ul>
        <li
          v-for="filter in filters"
          :key="filter.id"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          :class="{ 'bg-indigo-100': filter.isActive }"
        >
          <button class="w-full text-left cursor-pointer" @click="selectFilter(filter)">
            {{ filter.text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
