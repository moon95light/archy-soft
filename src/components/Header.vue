<script setup lang="ts">
import Navigation from './header/Navigation.vue'
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200">
    <div class="container mx-auto flex justify-between items-center h-20 px-4 relative">
      <!-- Logo -->
      <div class="flex items-center h-full">
        <img src="/logo.svg" alt="Logo" class="h-10 w-auto" />
      </div>
      <!-- Navigation -->
      <Navigation />
      <!-- Book a call Button -->
      <div class="flex items-center h-full">
         <a href="#" class="text-gray-700 hover:text-red-600 px-4 py-2 font-medium transition-colors duration-200">Contact us</a>
         <div class="w-6"></div>
        <a href="#" class="bg-[#9c111d] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors duration-200">Book a call</a>
      </div>
    </div>
  </header>
</template>

