<script setup>
import groupImg from '../../assets/images/Group.webp'
</script>

<template>
   <section class="relative max-w-[1230px] py-8 mx-auto px-4 py-12">
      <div
         class="flex flex-col md:flex-row bg-[#FEF0F2] rounded-2xl items-center justify-between relative overflow-hidden min-h-[220px]">
         <!-- Left Content -->
         <div class="py-10 pl-8 pr-4 flex-1">
            <h2 class="font-style-level9 mb-4">
               Not sure where to start with no-code? Let’s talk.
            </h2>
            <p class="text-gray-600 font-style-level15 mb-6 max-w-lg">
               Book a free 20-minute call with our product team — we’ll help you understand what’s possible, what
               tools to use, and how to launch faster.
            </p>
            <a href="http://calendly.com/archy-sales/30min"
               class="inline-block px-6 py-3 bg-[#910f20] text-white font-bold rounded-lg shadow hover:bg-[#710B13] transition">
               BOOK A FREE CALL
            </a>
         </div>
         <!-- Right Illustration -->
         <div class="flex-1 flex justify-end h-full pr-4 md:pr-10">
            <img :src="groupImg" alt="No-code abstract art"
               class="h-60 md:h-80 w-auto object-contain select-none pointer-events-none" draggable="false" />
         </div>
      </div>
   </section>
</template>