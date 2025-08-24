<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  open: Boolean,
})
const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<template>
  <div
    v-if="props.open"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div class="bg-white rounded shadow-lg max-w-lg w-full p-6 relative">
      <slot name="body">
        <p>Основное содержимое модального окна</p>
      </slot>
      <slot name="footer">
        <button
          @click="close"
          class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Закрыть
        </button>
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
