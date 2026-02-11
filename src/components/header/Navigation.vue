<script setup lang="ts">
import { ref } from 'vue'
import ServicesDropdown from './ServicesDropdown.vue'

const showDropdown = ref(false)
</script>

<template>
  <nav class="flex-1 flex justify-center">
    <ul class="flex space-x-4 items-center h-full">
      <li>
        <a href="#" class="text-gray-700 hover:text-red-600 transition-colors px-4 py-2 font-medium transition-colors duration-200">Home</a>
      </li>
      <li
        class="relative h-full"
        @mouseenter="showDropdown = true"
        @mouseleave="showDropdown = false"
      >
        <button class="text-gray-700 hover:text-red-600 px-4 py-2 font-medium transition-colors duration-200 flex items-center h-full cursor-pointer">
          Our Services
          <svg v-if="!showDropdown" class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          <svg v-else class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 15l-7-7-7 7"/></svg>
        </button>
        <transition name="fade">
          <ServicesDropdown v-if="showDropdown" />
        </transition>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-red-600 px-4 py-2 font-medium transition-colors duration-200">About Us</a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-red-600 px-4 py-2 font-medium transition-colors duration-200">Cases</a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-red-600 px-4 py-2 font-medium transition-colors duration-200">Blog</a>
      </li>
      <li>
        <a href="#" class="text-gray-700 hover:text-red-600 px-4 py-2 font-medium transition-colors duration-200">Vacancies</a>
      </li>
      <li>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
