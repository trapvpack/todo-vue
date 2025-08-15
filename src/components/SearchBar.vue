<script setup lang="ts">
import { ref } from 'vue';
import searchIcon from "../assets/icons/Vector.svg"
const searchQuery = ref('');
</script>

<template>
    <div class="relative flex items-center mx-4">
    <input class="flex-grow mx-4 px-3 py-2 
    border rounded-md ring-indigo-400 
    focus:outline-none focus:border-none focus:ring-2 focus:ring-indigo-500"
    placeholder="Search notes"
    type="text"
    v-model="searchQuery"
    @keyup.enter="$emit('search', searchQuery)"
    @keyup.esc="$emit('search', '')"
    aria-label="Search notes"       
    ></input>
    <img
      class="w-5 h-5 absolute right-7 pointer-events-none"
      :src="searchIcon"
      alt="search icon"
      aria-hidden="true"
    />
</div>
</template>

<style scoped></style>
