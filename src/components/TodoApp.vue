<script setup lang="ts">
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import AddButton from './AddButton.vue'
import { computed } from 'vue'
import { useTodosStore } from '@/stores'
import { storeToRefs } from 'pinia'

const todoStore = useTodosStore()
const { todos, activeFilter } = storeToRefs(todoStore)

function onToggle(todoId: number) {
  todos.value.forEach((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done
    }
  })
}

function onDelete(todoId: number) {
  const index = todos.value.findIndex((t) => t.id === todoId)
  if (index !== -1) {
    todos.value.splice(index, 1)
  }
}

const filteredTodos = computed(() => {
  return activeFilter.value.resolver(todos.value)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center pt-10 max-w-5xl w-5xl relative">
    <todo-header></todo-header>
    <todo-list
      class="w-full max-w-xl"
      :todos="filteredTodos"
      @delete="onDelete"
      @toggle="onToggle"
    />
    <add-button class="bottom-8 right-8 absolute" />
  </div>
</template>

<style scoped></style>
