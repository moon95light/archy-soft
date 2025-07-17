<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
   <section class="relative mt-20 bg-gradient-to-b from-white to-[#eacfd1] py-16 overflow-hidden">
    <!-- Graphic Section (background, lowest layer) -->
      <div class="absolute left-0 w-full flex gap-4 justify-center z-0 pointer-events-none ml-60 mt-40">
         <div v-for="i in 4" :key="'pale2-' + i" class="w-24 h-48 skew-x-[-20deg]" style="background: linear-gradient(to bottom, #fff, #ebd0d3);"></div>
         <!-- Three red parallelograms -->
         <div class="w-24 h-48 skew-x-[-20deg]" style="background: linear-gradient(to bottom, #fff, #ebd0d3);"></div>
         <div class="flex gap-2">
            <div class="w-24 h-48 bg-[#9c111d] skew-x-[-20deg] translate-y-4"></div>
            <div class="w-24 h-66 bg-[#9c111d] skew-x-[-20deg]"></div>
            <div class="w-24 h-86 bg-[#9c111d] skew-x-[-20deg] -translate-y-4"></div>
         </div>
         <!-- Three #ebd0d3 parallelograms -->
         <div v-for="i in 2" :key="'pale2b-' + i" class="w-24 h-68 skew-x-[-20deg]" style="background: linear-gradient(to bottom, #fff, #ebd0d3);"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <!-- Text Section -->
      <div class="max-w-xl">
         <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Build Apps 3–5× Faster with <br />
            Low-Code/No-Code Development
         </h1>
         <p class="text-gray-600 mt-4 text-lg">
            Cut your dev costs by up to 50% and launch faster with scalable, cross-platform apps
            built on Bubble, FlutterFlow, or your preferred tools.
         </p>
         <div class="mt-6 flex flex-wrap gap-4">
            <button class="bg-[#9c111d] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow">
            Let’s talk about your idea
            </button>
            <button class="border border-red-600 text-red-600 font-semibold py-3 px-6 rounded shadow hover:bg-red-50">
            View a live demo
            </button>
         </div>

         <!-- Badges -->
         <div class="mt-10 flex gap-10 items-center flex-wrap">
            <div class="text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Clutch_logo_2020.svg" alt="Clutch" class="h-6 mx-auto mb-1" />
            <p class="text-xs text-gray-500">BASED ON REVIEWS</p>
            </div>
            <div class="text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Upwork-logo.svg" alt="Upwork" class="h-6 mx-auto mb-1" />
            <p class="text-xs text-gray-500">TOP RATED</p>
            </div>
            <div class="text-center">
            <img src="https://uploads-ssl.webflow.com/5d82e6bb3b7b6b8ecbfb9b46/631f024cb2a13990f4232f8d_bubble-logo.svg" alt="Bubble" class="h-6 mx-auto mb-1" />
            <p class="text-xs text-gray-500">TRUST AGENCY</p>
            </div>
         </div>

         <!-- Stats -->
         <div class="mt-8 flex gap-10 text-center">
            <div>
            <p class="text-2xl font-bold text-gray-900">30+</p>
            <p class="text-gray-600 text-sm">MVPs launched</p>
            </div>
            <div>
            <p class="text-2xl font-bold text-gray-900">50+</p>
            <p class="text-gray-600 text-sm">Tools mastered</p>
            </div>
            <div>
            <p class="text-2xl font-bold text-gray-900">95%</p>
            <p class="text-gray-600 text-sm">Clients satisfaction</p>
            </div>
         </div>
      </div>
      <!-- The right side is intentionally left empty or can be used for an image/illustration if needed -->
      <div class="w-full md:w-1/2"></div>
      </div>
  </section>
</template>

