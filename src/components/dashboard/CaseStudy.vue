<script setup>
import { ref, computed } from "vue"
import slider1Img from "../../assets/images/slide1.webp"
import slider2Img from "../../assets/images/slider2.webp"
import slider3Img from "../../assets/images/slider3.webp"
import slider4Img from "../../assets/images/slider4.webp"

const slides = [
   {
      bg: slider1Img,
      title: "Airtrain: Launched in Just 2 Months for a training company",
   },
   {
      bg: slider2Img,
      title: "WingLeap: Workflow Management for Freelancers",
   },
   {
      bg: slider3Img,
      title: "Retail Dashboard for Real-Time Fashion Analytics",
   },
   {
      bg: slider4Img,
      title: "Invoicer:Medical Invoicing SaaS in 2 Weeks",
   },
]

// Dots: 3 for 4 slides (peeking on sides)
const slideDots = 3
const current = ref(0)

function goToSlide(idx) {
   current.value = idx
}

// Slide style for peeking effect
const slideStyle = computed(() => {

   const cardWidth = (1000 * 3 / 7) + 110;

   // Shift for each dot
   if (current.value === 0) return `transform: translateX(0px)`
   if (current.value === 1) return `transform: translateX(-${cardWidth}px)`
   // Last dot: show cards 3,4 and peek of card 2 on the left
   return `transform: translateX(-${cardWidth * 2 - 100}px)` // peek 100px of card 2
})

const hover1 = ref(false)
const hover2 = ref(false)

</script>

<template>
   <section class="relative max-w-[1230px] py-8 mx-auto px-4 py-12">
      <div class="p-2 mb-4">
         <h2 class="font-style-level10 mb-4">Case study</h2>
         <p class="font-style-level11">A few examples of how businesses launched faster and saved on dev costs using
            low-code and no-code.</p>
      </div>
      <!-- Slider container -->
      <div class="relative overflow-hidden">
         <div class="flex transition-transform duration-500 ease-in-out gap-3" :style="slideStyle">
            <div v-for="(slide, idx) in slides" :key="slide.title" :style="{ backgroundImage: `url('${slide.bg}')` }"
               class="flex-shrink-0 w-3/7 h-[475px] mx-2 relative rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
               @mouseenter="hover1 = true" @mouseleave="hover1 = false">

               <div class="h-3/5"></div>
               <div
                  class="absolute left-0 right-0 bottom-0 bg-[rgba(113,11,19,0.8)] backdrop-blur-[12px] transition-all duration-500 flex flex-col overflow-hidden"
                  :style="hover1
                     ? 'top:0; height:100%; padding:2rem;'
                     : 'top:55%; height:50%; padding:2rem;'" style="z-index:1">
                  <!-- Title & Description -->
                  <div>
                     <h2 class="font-style-level7 text-white font-bold mb-2">{{ slide.title }}</h2>
                     <div>
                        <p class="font-style-level3 mb-3">Resultls:</p>
                        <ul class="ml-4 space-y-1">
                           <li class="list-disc">2-Month MVP Delivery</li>
                           <li class="list-disc">Cross-Platform Access</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Dots -->
         <div class="flex justify-center mt-6 gap-3">
            <button v-for="i in slideDots" :key="i" @click="goToSlide(i - 1)" :class="[
               'w-4 h-4 rounded-full transition',
               current === (i - 1) ? 'bg-[#9C111D]' : 'bg-gray-300'
            ]" aria-label="Go to slide"></button>
         </div>
      </div>
   </section>
</template>
