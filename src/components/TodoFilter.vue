<script setup lang="ts">
import { ref, computed, useTemplateRef, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
const props = defineProps<{
  filters: Array<{ id: number; text: string }>
  activeFilter: number
}>()
const open = ref(false)
function toggleDropdown() {
  open.value = !open.value
}
const emit = defineEmits<{
  (e: 'filter', activeFilter: number): void
}>()
function selectFilter(activeFilter: number) {
  emit('filter', activeFilter)
  open.value = false
}
const activeFilterText = computed(() => {
  const filter = props.filters.find((filter) => filter.id === props.activeFilter)
  return filter ? filter.text : ''
})

function isActive(filterId: number) {
  return props.activeFilter === filterId
}

const target = useTemplateRef<HTMLElement>('target')

watch(target, (el) => {
  if (el) {
    onClickOutside(
      el,
      () => {
        open.value = false
      },
      { capture: true, event: 'pointerdown' },
    )
  }
})
</script>

<template>
  <div class="relative inline-block text-left" ref="target">
    <button
      class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-30 cursor-pointer transition-colors duration-300"
      @click.stop="toggleDropdown"
    >
      {{ activeFilterText }}
    </button>

    <div v-if="open" class="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
      <ul>
        <li
          v-for="filter in filters"
          :key="filter.id"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          :class="{ 'bg-indigo-100': isActive(filter.id) }"
        >
          <button class="w-full text-left cursor-pointer" @click.stop="selectFilter(filter.id)">
            {{ filter.text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
