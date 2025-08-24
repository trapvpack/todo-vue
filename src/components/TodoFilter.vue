<script setup lang="ts">
import { ref, computed, useTemplateRef, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useTodosStore } from '@/stores'
import { storeToRefs } from 'pinia'
import type { Filter } from '@/composable/useFilter'
import type { Todo } from '@/stores/todo'

const todoStore = useTodosStore()
const { activeFilter, filters } = storeToRefs(todoStore)

const open = ref(false)
function toggleDropdown() {
  open.value = !open.value
}
//TODO: composable useDropdown with arg HTML element or HTML element as state
function selectFilter(filter: Filter<Todo>) {
  activeFilter.value = filter
  open.value = false
}
const activeFilterText = computed(() => {
  return activeFilter.value.text
})

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
      type="button"
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
          :class="{ 'bg-indigo-100': filter.id === activeFilter.id }"
        >
          <button
            type="button"
            class="w-full text-left cursor-pointer"
            @click="selectFilter(filter)"
          >
            {{ filter.text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
