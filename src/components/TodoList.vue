<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  todos: Array<{ id: number; text: string; done: boolean }>
}>()
</script>

<template>
  <div class="max-w-xl mx-auto bg-white rounded shadow p-6">
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex items-center justify-between p-2 border-b last:border-b-0"
      >
        <label class="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            v-model="todo.done"
            class="form-checkbox h-5 w-5 text-indigo-600"
            @change="$emit('toggle', todo)"
          />
        </input>
        <span :class="{ 'line-through text-gray-400': todo.done }">
          {{ todo.text }}
        </span>
        </label>

        <button
          @click="$emit('delete', todo)"
          class="text-red-500 hover:text-red-700"
          aria-label="Удалить задачу"
        >
          &#x2716;
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
