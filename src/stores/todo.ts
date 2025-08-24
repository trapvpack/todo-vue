import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useFilter } from '@/composable'
export type Todo = {
  id: number
  text: string
  done: boolean
}
const useTodosStore = defineStore('todos', () => {
  const { activeFilter, filters } = useFilter<Todo>()

  const todos = ref<Todo[]>([
    { id: 1, text: 'Note #1', done: false },
    { id: 2, text: 'Note #2', done: true },
    { id: 3, text: 'Note #3', done: false },
  ])

  return { activeFilter, todos, filters }
})
export default useTodosStore
