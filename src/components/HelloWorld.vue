<script setup lang="ts">
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
         <div class="max-w-2.5xl">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
               Build Apps 3–5× Faster with <br />
               Low-Code/No-Code Development
            </h1>
            <p class="text-gray-600 mt-4 text-lg">
               Cut your dev costs by up to 50% and launch faster with scalable, cross-platform apps
               built on Bubble, FlutterFlow, or your preferred tools.
            </p>
            <div class="mt-6 flex flex-wrap gap-4">
               <button class="bg-[#9c111d] cursor-pointer hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow">
               Let’s talk about your idea
               </button>
               <button class="bg-white cursor-pointer border border-red-600 text-red-600 font-semibold py-3 px-6 rounded shadow hover:bg-red-50">
               View a live demo
               </button>
            </div>

            <div class="sertificate_container">
               <div class="flex gap-8 items-center justify-start mt-10">
                  <a href="https://clutch.co/profile/archysoft">
                     <img src="/Clutch.svg" alt="Clutch" class="w-30 h-20 object-contain" />
                  </a>
                  <a href="https://www.upwork.com/agencies/archysoft/">
                     <img src="/Upwork.svg" alt="Upwork" class="w-30 h-20 object-contain" />
                  </a>
                  <a href="https://bubble.io/agency/archysoft">
                     <img src="/Buble.svg" alt="Bubble" class="w-30 h-20 object-contain" />
                  </a>
               </div>
            </div>
         </div>
         <!-- Stats -->

         <!-- The right side is intentionally left empty or can be used for an image/illustration if needed -->
         <div class="w-full md:w-1/2"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
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
  </section>
</template>

