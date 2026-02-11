<script setup>
import { ref } from 'vue'

import mobileAppImg from '../../assets/images/Mobile-App-Development.webp'
import nolowCodeImg from '../../assets/images/no-code-development.webp'
import mvpDevelopmentImg from '../../assets/images/MVP-Development.webp'
import outstaffImg from '../../assets/images/Outstaff-outsource.webp'

const hover2 = ref(false)
const hover3 = ref(false)
const hover4 = ref(false)
const hover5 = ref(false)
</script>

<template>
   <section class="relative max-w-[1230px] py-8 mx-auto px-4 py-12">
      <div class="mb-12">
         <h2 class="font-style-level22 mb-4">What we do</h2>
         <p class="font-style-level23 max-w-3xl">
            From rapid MVP launches to enterprise-grade platforms, we provide end-to-end development services tailored to your business needs.
         </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
         <!-- Child 1: Web App Development -->
         <div :style="{ backgroundImage: `url('${mobileAppImg}')` }"
            class="relative h-115 w-full rounded-xl overflow-hidden shadow-lg group bg-cover bg-center"
            @mouseenter="hover2 = true" @mouseleave="hover2 = false">
            <div class="h-1/2"></div>
            <div
               class="absolute left-0 right-0 bottom-0 bg-[rgba(113,11,19,0.8)] backdrop-blur-[12px] transition-all duration-500 flex flex-col overflow-hidden"
               :style="hover2
                  ? 'top:0; height:100%; padding:2rem;'
                  : 'top:50%; height:50%; padding:2rem;'">
               <div>
                  <h2 class="font-style-level1 text-white mb-2">Web App Development</h2>
                  <p class="font-style-level3 mb-3">Build scalable business apps 3–5x faster using no-code tools.</p>
               </div>
               <div class="mt-4 text-white opacity-0 transition-opacity duration-500 delay-100 flex flex-col h-full"
                  :class="{ 'opacity-100': hover2 }">
                  <p class="font-style-level24 mb-6">
                     We create powerful web applications tailored to your business processes. Whether it's a CRM, ERP, or a customer portal, our solutions are designed to scale and perform.
                  </p>
                  <ul class="list-disc list-inside space-y-2 mb-6 font-style-level25">
                     <li>Custom CRM & ERP Systems</li>
                     <li>SaaS Platform Development</li>
                     <li>Customer Portals & Dashboards</li>
                     <li>API Integrations & Automation</li>
                  </ul>
                  <div class="mt-auto">
                     <a href="/"
                        class="inline-flex items-center px-6 py-3 border border-white rounded text-white font-semibold hover:bg-white hover:text-[#710B13] transition-colors duration-200">
                        <span>LEARN MORE</span>
                        <svg class="ml-2 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none">
                           <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <!-- Child 2: No-Code & Low-Code -->
         <div :style="{ backgroundImage: `url('${nolowCodeImg}')` }"
            class="relative h-115 w-full rounded-xl overflow-hidden shadow-lg group bg-cover bg-center"
            @mouseenter="hover3 = true" @mouseleave="hover3 = false">
            <div class="h-1/2"></div>
            <div
               class="absolute left-0 right-0 bottom-0 bg-[rgba(113,11,19,0.8)] backdrop-blur-[12px] transition-all duration-500 flex flex-col overflow-hidden"
               :style="hover3
                  ? 'top:0; height:100%; padding:2rem;'
                  : 'top:50%; height:50%; padding:2rem;'">
               <div>
                  <h2 class="font-style-level1 text-white mb-2">No-Code & Low-Code Development</h2>
                  <p v-if="!hover3" class="font-style-level3 mb-3 truncate">Deliver production-ready apps 4× faster and cut development costs by up to 70 % using Bubble, FlutterFlow, Webflow and other visual platforms.</p>
               </div>
               <div class="mt-4 text-white opacity-0 transition-opacity duration-500 delay-100 flex flex-col h-full"
                  :class="{ 'opacity-100': hover3 }">
                  <p class="font-style-level24 mb-6">
                     Deliver production-ready apps 4× faster and cut development costs by up to 70 % using Bubble, FlutterFlow, Webflow and other visual platforms.
                  </p>
                  <ul class="list-disc list-inside space-y-2 mb-6 font-style-level25">
                     <li>Rapid MVP Launch</li>
                     <li>Cost-Effective Scalability</li>
                     <li>Visual Development Platforms</li>
                     <li>Easy Maintenance & Updates</li>
                  </ul>
                  <div class="mt-auto">
                     <a href="/"
                        class="inline-flex items-center px-6 py-3 border border-white rounded text-white font-semibold hover:bg-white hover:text-[#710B13] transition-colors duration-200">
                        <span>LEARN MORE</span>
                        <svg class="ml-2 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none">
                           <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <!-- Child 3: MVP Development -->
         <div :style="{ backgroundImage: `url('${mvpDevelopmentImg}')` }"
            class="relative h-115 w-full rounded-xl overflow-hidden shadow-lg group bg-cover bg-center"
            @mouseenter="hover4 = true" @mouseleave="hover4 = false">
            <div class="h-1/2"></div>
            <div
               class="absolute left-0 right-0 bottom-0 bg-[rgba(113,11,19,0.8)] backdrop-blur-[12px] transition-all duration-500 flex flex-col overflow-hidden"
               :style="hover4
                  ? 'top:0; height:100%; padding:2rem;'
                  : 'top:50%; height:50%; padding:2rem;'">
               <div>
                  <h2 class="font-style-level1 text-white mb-2">MVP Development</h2>
                  <p class="font-style-level3 mb-3">Validate your idea quickly with a Minimum Viable Product.</p>
               </div>
               <div class="mt-4 text-white opacity-0 transition-opacity duration-500 delay-100 flex flex-col h-full"
                  :class="{ 'opacity-100': hover4 }">
                  <p class="font-style-level24 mb-6">
                     Launch your product idea in weeks, gather user feedback, and iterate fast. We help startups find product-market fit with minimal risk.
                  </p>
                  <ul class="list-disc list-inside space-y-2 mb-6 font-style-level25">
                     <li>Concept Validation</li>
                     <li>Prototype & Design</li>
                     <li>Core Feature Implementation</li>
                     <li>Launch Strategy Support</li>
                  </ul>
                  <div class="mt-auto">
                     <a href="/"
                        class="inline-flex items-center px-6 py-3 border border-white rounded text-white font-semibold hover:bg-white hover:text-[#710B13] transition-colors duration-200">
                        <span>LEARN MORE</span>
                        <svg class="ml-2 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none">
                           <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <!-- Right Column: Split into Top (IT Outstaff) and Bottom (Consultation) -->
         <div class="flex flex-col gap-6">
            <!-- Child 2 -->
            <div :style="{ backgroundImage: `url('${outstaffImg}')` }"
               class="relative h-115 w-full rounded-xl overflow-hidden shadow-lg group bg-cover bg-center"
               @mouseenter="hover5 = true" @mouseleave="hover5 = false">
               <!-- Overlay / Content -->
               <div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>

               <!-- Sliding Panel -->
               <div
                  class="absolute left-0 right-0 bottom-0 bg-[#eacfd1] backdrop-blur-[12px] transition-all duration-500 flex flex-col overflow-hidden"
                  :style="hover5
                     ? 'top:0; height:100%; padding:2rem;'
                     : 'top:60%; height:40%; padding:2rem;'">
                  <div>
                     <h2 class="font-style-level1 text-[#710B13] mb-2">IT Outstaff & Outsource</h2>
                     <p v-if="!hover5" class="font-style-level3 text-[#710B13] mb-3 truncate">
                        Expand your team with pre-vetted senior developers, designers, and PMs.
                     </p>
                  </div>
                  <div class="mt-4 text-[#710B13] opacity-0 transition-opacity duration-500 delay-100 flex flex-col h-full"
                     :class="{ 'opacity-100': hover5 }">
                     <p class="font-style-level24 mb-6">
                        Scale your development capacity instantly. We provide dedicated experts who integrate seamlessly into your existing workflows.
                     </p>
                     <ul class="list-disc list-inside space-y-2 mb-6 font-style-level25">
                        <li>Dedicated Teams</li>
                        <li>Staff Augmentation</li>
                        <li>Project-Based Outsourcing</li>
                        <li>Technical Consulting</li>
                     </ul>
                     <div class="mt-auto">
                        <a href="/"
                           class="ml-6 inline-flex items-center px-8 py-3 rounded-xl text-[#710B13] font-bold bg-white hover:bg-[#ffffff] hover:text-[#cf2e2e] transition-colors duration-200">
                           <span>VIEW MORE</span>
                           <svg class="ml-2 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- Child 3 -->
         <div
            class="flex flex-col items-start h-56 p-7 md:p-8 gap-5 border border-gray-300 rounded-2xl text-[18px] leading-7">
            <p class="font-style-level2">Not sure which services fit your use case? Talk to an expert</p>
            <div class="flex items-center justify-between w-full flex-wrap gap-4">
               <div class="flex items-center gap-4">
                  <img src="https://www.archysoft.com/wp-content/uploads/2025/06/image.png" alt="Sales Manager"
                     class="w-20 h-20 rounded-2xl object-cover" />
                  <div>
                     <p class="font-style-level6">Michael</p>
                     <span class="font-style-level7">Sales Manager</span>
                  </div>
               </div>
               <a href="/" class="bg-[#9c111d] hover:bg-red-700 font-style-level8 px-5 py-2 rounded-lg transition">
                  BOOK A CALL
               </a>
            </div>
         </div>

      </div>
   </section>
</template>