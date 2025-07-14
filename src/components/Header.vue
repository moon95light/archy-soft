<script setup lang="ts">
import { ref } from 'vue'

const showDropdown = ref(false)
</script>

<template>
  <header class="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 w-full">
    <div class="container mx-auto flex justify-between items-center h-20 px-4 relative">
      <!-- Logo -->
      <div class="flex items-center h-full">
        <img src="/logo.svg" alt="Logo" class="h-10 w-auto" />
      </div>
      <!-- Navigation -->
      <nav class="flex-1 flex justify-center">
        <ul class="flex space-x-4 items-center h-full">
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Home</a>
          </li>
          <li
            class="relative h-full"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <button class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200 flex items-center h-full">
              Our Services
              <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <transition name="fade">
              <div
                v-if="showDropdown"
                class="fixed left-0 w-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-xl z-50 flex items-center justify-center"
                :style="{ top: '80px', height: '300px' }"
              >
                <div class="text-center text-2xl text-gray-700 dark:text-gray-200 w-full">
                  <!-- Replace with your dropdown content -->
                  <span class="font-semibold">Our Services Dropdown (Full Width, 300px Height)</span>
                </div>
              </div>
            </transition>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">About Us</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Cases</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Blog</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Vacancies</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Contact us</a>
          </li>
        </ul>
      </nav>
      <!-- Book a call Button -->
      <div class="flex items-center h-full">
        <a href="#" class="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors duration-200">Book a call</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
