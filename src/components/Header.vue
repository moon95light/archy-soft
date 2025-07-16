<script setup lang="ts">
import { ref } from 'vue'

const showDropdown = ref(false)
const tabs = ['demo1', 'demo2', 'demo3']
const activeTab = ref(0)
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
            <button class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200 flex items-center h-full cursor-pointer">
              Our Services
              <svg v-if="!showDropdown" class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              <svg v-else class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 15l-7-7-7 7"/></svg>
            </button>
            <transition name="fade">
              <div
                v-if="showDropdown"
                class="fixed left-0 w-screen bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-xl z-50 flex items-center justify-center rounded-b-2xl"
                :style="{ top: '80px', height: '300px' }"
              >
                <div class="flex w-full h-full">
                  <!-- First part: 1/8 width, blank -->
                  <div class="w-2/8 h-full"></div>
                  <!-- Second part: 3/8 width, title and list -->
                  <div class="w-2/8 h-full flex flex-col pt-2 border-r border-gray-200 dark:border-gray-700">
                    <div class="text-left">
                      <div class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Services</div>
                      <ul class="space-y-2">
                        <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Web Development</a></li>
                        <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mobile Apps</a></li>
                        <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">UI/UX Design</a></li>
                        <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
                        <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Consulting</a></li>
                      </ul>
                    </div>
                  </div>
                  <!-- Third part: 4/8 width, tabs -->
                  <div class="w-4/8 h-full flex flex-col px-8">
                    <div class="flex space-x-4 border-b border-gray-200 dark:border-gray-700 mb-4">
                      <button
                        v-for="(tab, idx) in tabs"
                        :key="tab"
                        @click="activeTab = idx"
                        :class="['font-mgm py-2 px-4 font-semibold focus:outline-none', activeTab === idx ? 'border-b-2 border-red-600 text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300']"
                      >
                        {{ tab }}
                      </button>
                    </div>
                    <div class="flex-1 text-gray-700 dark:text-gray-200 text-lg">
                      <div v-if="activeTab === 0">
                        <div class="mb-2">demo 1</div>
                        <p>We build scalable, robust web applications tailored to your business needs.</p>
                      </div>
                      <div v-else-if="activeTab === 1">
                        <div class="mb-2">demo 2</div>
                        <p>Our team creates high-performance mobile apps for iOS and Android platforms.</p>
                      </div>
                      <div v-else>
                        <div class="mb-2">demo 3</div>
                        <p>We design intuitive and engaging user experiences for your digital products.</p>
                      </div>
                    </div>
                  </div>
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
