import { ref, computed } from 'vue'

export type Filter<T extends { done: boolean }> = {
  id: number
  text: string
  resolver: (items: T[]) => T[]
}

export default function useFilter<T extends { done: boolean }>() {
  const activeFilterId = ref<Filter<T>['id']>(0)

  const filters = ref<Filter<T>[]>([
    { id: 0, text: 'All', resolver: (items) => items },
    { id: 1, text: 'Active', resolver: (items) => items.filter((item) => !item.done) },
    { id: 2, text: 'Completed', resolver: (items) => items.filter((item) => item.done) },
  ])

  const activeFilter = computed({
    get: () => {
      const filter = filters.value.find((filter) => filter.id === activeFilterId.value)
      return filter ?? (filters.value[0] as Filter<T>)
    },
    set: (filter: Filter<T>) => {
      activeFilterId.value = filter.id
    },
  })

  return {
    filters,
    activeFilter,
  }
}
