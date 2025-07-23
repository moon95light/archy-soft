<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import logo from '/logo-white.svg'

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
   <footer class="w-full border-t border-black" style="background: linear-gradient(90deg, #221F20 62%, #fff 0%)">
      <div class="max-w-[1230px] py-8 mx-auto px-4 py-12 flex flex-row">
         <div class="w-7/10">
            <img :src="logo" alt="" class="w-35 h-30">
            <div class="full flex flex-row mb-8 gap-18">
               <ul class="flex flex-col gap-2">
                  <li class="mb-4">
                     <p class="font-style-level26">Company</p>
                  </li>
                  <li>
                     <ul class="font-style-level27">
                        <li class="mb-4">Home</li>
                        <li class="mb-4">About us</li>
                        <li class="mb-4">Cases</li>
                        <li class="mb-4">Blog</li>
                        <li class="mb-4">Vacancies</li>
                     </ul>
                  </li>
               </ul>
               <ul class="flex flex-col gap-2">
                  <li class="mb-4">
                     <p class="font-style-level26">Services</p>
                  </li>
                  <li>
                     <ul class="font-style-level27">
                        <li class="mb-4">Service map</li>
                        <li class="mb-4">Custom Web development</li>
                        <li class="mb-4">NoCode | MVP Development​</li>
                        <li class="mb-4">Team Augmentation​</li>
                        <li class="mb-4">Low-Code development service</li>
                     </ul>
                  </li>
               </ul>
               <ul class="flex flex-col gap-2">
                  <li class="mb-4">
                     <p class="font-style-level26">Legal</p>
                  </li>
                  <li>
                     <ul class="font-style-level27">
                        <li class="mb-4">Privacy Policy</li>
                        <li class="mb-4">Legal Information</li>
                     </ul>
                  </li>
               </ul>
               <ul class="flex flex-col gap-2">
                  <li>
                     <p class="font-style-level26">Contact</p>
                  </li>
               </ul>
            </div>
            <div class="flex flex-row gap-10">
               <img src="https://www.archysoft.com/wp-content/uploads/2025/06/logo.png" alt="icon">
               <img src="https://www.archysoft.com/wp-content/uploads/2025/06/logo.png" alt="icon">
               <img src="https://www.archysoft.com/wp-content/uploads/2025/06/logo.png" alt="icon">
            </div>
         </div>
         <div class="w-3/10">
            <p class="footer_form_title font-style-level9 mb-6 text-gray-900 pl-6">
               Leave a request to contact us
            </p>
            <form class="footer_contact_form flex flex-col gap-4 pl-6"
               enctype="multipart/form-data" method="POST">
               <label class="flex flex-col">
                  <input name="name" type="text" required placeholder="Your name"
                     class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9C111D]"/>
               </label>
               <label class="flex flex-col">
                  <input name="email" type="email" required placeholder="Your email"
                     class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9C111D]"/>
               </label>
               <label class="flex flex-col">
                  <textarea name="message" required placeholder="Your question"
                     class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9C111D]"></textarea>
               </label>
               <input
                  class="footer_contact_submit btn bg-[#9C111D] font-style-level7 text-white rounded w-5/7 px-6 py-2 cursor-pointer hover:bg-[#B10213] transition-colors duration-200"
                  type="submit" value="Leave a request" />
            </form>
         </div>

      </div>
   </footer>

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
