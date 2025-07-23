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
      results: [
         "2-Month MVP Delivery",
         "Cross-Platform Access",
      ],
      description: "A German corporate training provider needed a custom MVP to support compliance-focused learning. We built and refined the platform in just 2 months, boosting employee engagement and operational efficiency across their client base."
   },
   {
      bg: slider2Img,
      title: "WingLeap: Workflow Management for Freelancers",
      results: [
         "Freelancer Onboarding in 1 Week",
         "Integrated Payment System",
      ],
      description: "We built an all-in-one SaaS MVP for managing projects, time, and invoices. With an intuitive dashboard and smart automation, freelancers and small teams saw a significant drop in admin work and boosted productivity."
   },
   {
      bg: slider3Img,
      title: "Retail Dashboard for Real-Time Fashion Analytics",
      results: [
         "Live Sales Tracking",
         "Inventory Alerts",
      ],
      description: "We built a lightning-fast sales dashboard for a French fashion tech startup, combining custom ApexCharts with secure multi-login and CSV/JSON exports. Now retail managers access KPIs in under a second, tailored by brand and role."
   },
   {
      bg: slider4Img,
      title: "Invoicer: Medical Invoicing SaaS in 2 Weeks",
      results: [
         "2-Week SaaS Launch",
         "HIPAA Compliance",
      ],
      description: "We built a HIPAA-friendly invoicing tool with secure e-signatures, role-based access, and real-time alerts. Completed in just two sprints, the app received great early feedback and is ready to scale for compliance-heavy use cases."
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
   if (current.value === 0) return `transform: translateX(0px)`
   if (current.value === 1) return `transform: translateX(-${cardWidth}px)`
   return `transform: translateX(-${cardWidth * 2 - 100}px)`
})

// Track hover state per slide
const hoverStates = ref(Array(slides.length).fill(false))
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
            <div
               v-for="(slide, idx) in slides"
               :key="slide.title"
               :style="{ backgroundImage: `url('${slide.bg}')` }"
               class="flex-shrink-0 w-3/7 h-[475px] mx-2 relative rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
               @mouseenter="hoverStates[idx] = true"
               @mouseleave="hoverStates[idx] = false"
            >
               <div class="h-3/5"></div>
               <div
                  class="absolute left-0 right-0 bottom-0 bg-[rgba(113,11,19,0.8)] backdrop-blur-[12px] transition-all duration-500 flex flex-col overflow-hidden"
                  :style="hoverStates[idx]
                     ? 'top:0; height:100%; padding:2rem;'
                     : 'top:55%; height:50%; padding:2rem;'" style="z-index:1">
                  <!-- Title & Description -->
                  <div>
                    <h2
                      :class="[
                        'text-white mb-2 transition-all duration-300',
                        hoverStates[idx] ? 'font-style-level9 mb-4' : 'font-style-level20'
                      ]"
                    >
                      {{ slide.title }}
                    </h2>
                    <div>
                      <p
                        v-if="hoverStates[idx]"
                        class="mt-4 text-white font-style-level3 mt-10 mb-6"
                      >
                        {{ slide.description }}
                      </p>
                      <p
                        :class="[
                          'font-style-level3 mb-3',
                          hoverStates[idx] ? 'mt-2' : ''
                        ]"
                      >
                        Results:
                      </p>
                      <ul class="ml-4 space-y-1 mb-2 font-style-level3">
                        <li v-for="(result, rIdx) in slide.results" :key="rIdx" class="list-disc">{{ result }}</li>
                      </ul>
                      <!-- Show description only on hover -->
                      <p
                        v-if="hoverStates[idx]"
                        class="font-style-levelflex flex-row justify-center items-center max-w-max min-w-max px-2 py-[1px] bg-white border border-white rounded font-light text-[12px] text-black mt-10"
                      >
                        Built with Bubble.io
                      </p>
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
