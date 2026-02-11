<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollTop = ref(false)

function handleScroll() {
   showScrollTop.value = window.scrollY > 300
}

function scrollToTop() {
   window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
   window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
   window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
      v-if="showScrollTop"
      @click="scrollToTop"
      aria-label="Scroll to top"
      class="fixed bottom-8 right-8 z-50 bg-transparent p-0 border-none"
   >
      <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="1" y="1" width="72" height="72" rx="36" fill="white" fill-opacity="0.5"></rect>
         <rect x="1" y="1" width="72" height="72" rx="36" stroke="#9C111D" stroke-width="2"></rect>
         <path d="M50.5 43.75L37 30.25L23.5 43.75" stroke="#9C111D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
   </button>
</template>
