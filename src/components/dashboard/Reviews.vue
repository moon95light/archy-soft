<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import avatar1Img from '../../assets/images/avatars/1.webp'
import avatar2Img from '../../assets/images/avatars/2.webp'
import avatar3Img from '../../assets/images/avatars/3.webp'
import avatar4Img from '../../assets/images/avatars/4.webp'
import avatar5Img from '../../assets/images/avatars/5.webp'
import avatar6Img from '../../assets/images/avatars/6.webp'


const slides = [
   {
      bg: avatar1Img,
      title: "Co-Founder, Wingleap",
      name: "Andrew Davis",
      description: "I wish I could give ArchySoft more than 5 stars. I promise you, this is a the partner you want if your building an MVP and you are not a technical person."
   },
   {
      bg: avatar2Img,
      title: "Founder SaaS Founders and LeadForce",
      name: "Dmitri Rodenko",
      description: "Archysoft enhanced our LeadForce recruitment platform, expanding the database and integrating AI-driven emails and secure payments. The project went smoothly and on time."
   },
   {
      bg: avatar3Img,
      title: "Co-Founder of Ecom Education",
      name: "Maik Biemans",
      description: "Working with Archysoft was comfortable and productive. All processes were transparent, I understood the whole situation on the project and saw how my dream turned into reality!"
   },
   {
      bg: avatar4Img,
      title: "CEO at Forward Partners",
      name: "Frank Debance",
      description: "What I truly value about ArchySoft is that they don't just do the job-they strive to execute the task as efficiently as possible and in the way I initailly evisioned it in my mind."
   },
   {
      bg: avatar5Img,
      title: "CEO at PermitEdge",
      name: "Victor kolotov",
      description: "Archysoft was commnicative and met every deadline, making the process smooth. Their professionalism and attention to detail delivered a final product that exceeded our expectations."
   },
   {
      bg: avatar6Img,
      title: "CTO at TubeSense",
      name: "Peter Philippens",
      description: "I like their work, and we plan to continue our collaboration. For projects where technological depth and reliability are crucial, I can recommend Archysoft with 100% confidence!"
   },
]

const slidesPerPage = 2
const dotCount = slides.length - 1 // Each dot shows two consecutive slides
const current = ref(0)

// Drag/Swipe
const dragging = ref(false)
const dragStartX = ref(0)
const dragDelta = ref(0)

function goToPage(idx) {
   current.value = idx
   dragDelta.value = 0
}

function clampPage(idx) {
   return Math.max(0, Math.min(dotCount - 1, idx))
}

function onDragStart(e) {
   dragging.value = true
   dragStartX.value = (e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX)
}

function onDragMove(e) {
   if (!dragging.value) return
   const x = (e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX)
   dragDelta.value = x - dragStartX.value
}

function onDragEnd() {
   if (!dragging.value) return
   if (Math.abs(dragDelta.value) > 80) {
      if (dragDelta.value < 0 && current.value < dotCount - 1) goToPage(current.value + 1)
      else if (dragDelta.value > 0 && current.value > 0) goToPage(current.value - 1)
      else goToPage(current.value)
   } else {
      goToPage(current.value)
   }
   dragging.value = false
   dragDelta.value = 0
}

onMounted(() => {
   // Mouse/touch events for drag
   const container = document.getElementById('slider-track2')
   container.addEventListener('mousedown', onDragStart)
   container.addEventListener('touchstart', onDragStart)
   window.addEventListener('mousemove', onDragMove)
   window.addEventListener('touchmove', onDragMove)
   window.addEventListener('mouseup', onDragEnd)
   window.addEventListener('touchend', onDragEnd)
})
onUnmounted(() => {
   const container = document.getElementById('slider-track2')
   if (!container) return
   container.removeEventListener('mousedown', onDragStart)
   container.removeEventListener('touchstart', onDragStart)
   window.removeEventListener('mousemove', onDragMove)
   window.removeEventListener('touchmove', onDragMove)
   window.removeEventListener('mouseup', onDragEnd)
   window.removeEventListener('touchend', onDragEnd)
})

</script>

<template>
   <section class="relative max-w-[1230px] py-8 mx-auto px-4 py-12">
      <div class="p-2 mb-4">
         <h2 class="font-style-level10 mb-4">Reviews</h2>
      </div>
      <!-- Slider container -->
      <div class="relative overflow-hidden">
         <div id="slider-track2"
            class="flex gap-5 transition-transform duration-400 ease-in-out select-none cursor-grab" :style="{
               width: `100%`,
               transform: `translateX(-${current * 50}%)`,
               transitionDuration: dragging ? '0ms' : '400ms',
            }">
            <div v-for="(slide, idx) in slides" :key="slide.title"
              class="w-[48%] h-[400px] p-4 rounded-2xl shadow-lg relative flex-shrink-0 flex flex-col justify-between bg-white"
            >
               <!-- Stars -->
               <div class="flex mt-4 text-[#B10213]">
                  <template v-for="n in 5" :key="n">
                     <svg class="w-5 h-5 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <polygon
                           points="10,1 12.59,6.96 19,7.69 14,12.14 15.27,18.51 10,15.25 4.73,18.51 6,12.14 1,7.69 7.41,6.96" />
                     </svg>
                  </template>
               </div>
               <!-- Testimonial Text -->
               <p class="font-style-level24 mb-4">
                 {{ slide.description }}
               </p>
               <!-- Author -->
               <div class="flex items-end gap-4 mb-4">
                  <img :src="slide.bg"
                     class="w-26 h-26 rounded-xl object-cover border-2 border-gray-200" />
                  <div>
                     <div class="font-style-level25">{{ slide.name }}</div>
                     <div class="font-style-level25">{{ slide.title }}</div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Dots -->
         <div class="flex gap-2 justify-center mt-8">
            <button v-for="n in dotCount" :key="n" @click="goToPage(n - 1)" :class="[
               'w-4 h-4 rounded-full',
               current === n - 1 ? 'bg-[#9C111D]' : 'bg-gray-300'
            ]"></button>
         </div>
      </div>
   </section>
</template>
