<script setup>
import { ref, onMounted } from 'vue'

// Animation Refs
const svg1Transform = ref('matrix(1,0,0,1,633.4967041015625,-95.97756958007812)')
const svg2Transform = ref('matrix(1,0,0,1,642.6896362304688, 815.636962890625)') // +500 Y
const svg3Transform = ref('matrix(1,0,0,1,1281.2662353515625, 204.116943359375)') // +500 X

// Counter Refs
const count30 = ref(0)
const count50 = ref(0)
const count95 = ref(0)

onMounted(() => {
   // Trigger SVG Animations
   setTimeout(() => {
      svg1Transform.value = 'matrix(1, 0, 0, 1, 564.532, 236.006)'
      svg2Transform.value = 'matrix(1,0,0,1,642.6896362304688,315.636962890625)'
      svg3Transform.value = 'matrix(1,0,0,1,781.2662353515625,204.116943359375)'
   }, 100)

   // Trigger Counter Animations
   const duration = 2000 // 2 seconds
   const startTime = performance.now()

   const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (easeOutQuad)
      const ease = 1 - (1 - progress) * (1 - progress)

      count30.value = ease * 30
      count50.value = ease * 50
      count95.value = ease * 95

      if (progress < 1) {
         requestAnimationFrame(animate)
      }
   }
   requestAnimationFrame(animate)
})
</script>

<template>
   <section class="relative mt-20 py-16 overflow-hidden">
      <!-- Graphic Section (background, lowest layer) -->
      <div class="absolute top-[-80px] right-[45%] translate-x-[50%] w-full max-w-[1440px] h-auto max-h-[834px] z-0 m-0 p-0 box-border font-['Poppins'] pointer-events-none">
         <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="885" viewBox="0 0 1440 885"
            preserveAspectRatio="xMidYMid meet"
            style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">
            <defs>
               <clipPath id="__lottie_element_2">
                  <rect width="1440" height="885" x="0" y="0"></rect>
               </clipPath>
               <clipPath id="__lottie_element_4">
                  <path d="M0,0 L1440,0 L1440,885 L0,885z"></path>
               </clipPath>
               <clipPath id="__lottie_element_9">
                  <path d="M0,0 L315,0 L315,940 L0,940z"></path>
               </clipPath>
               <clipPath id="__lottie_element_26">
                  <path d="M0,0 L440,0 L440,236 L0,236z"></path>
               </clipPath>
               <clipPath id="__lottie_element_44">
                  <path d="M0,0 L365,0 L365,703 L0,703z"></path>
               </clipPath>
               <clipPath id="__lottie_element_61">
                  <path d="M0,0 L371,0 L371,965 L0,965z"></path>
               </clipPath>
               <clipPath id="__lottie_element_81">
                  <path d="M0,0 L1287,0 L1287,365 L0,365z"></path>
               </clipPath>
               <clipPath id="__lottie_element_101">
                  <path d="M0,0 L316,0 L316,417 L0,417z"></path>
               </clipPath>
               <clipPath id="__lottie_element_112">
                  <path d="M0,0 L504,0 L504,670 L0,670z"></path>
               </clipPath>
               <clipPath id="__lottie_element_132">
                  <path d="M0,0 L400,0 L400,355 L0,355z"></path>
               </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_2)">
               <g clip-path="url(#__lottie_element_4)" transform="matrix(1,0,0,1,0,0)" opacity="1"
                  style="display: block;">
                  <g transform="matrix(0.918423593044281,0,0,0.918423593044281,259.7541809082031,22.596908569335938)"
                     opacity="1" style="display: block;">
                     <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <g opacity="1" :style="{ transform: svg1Transform, transition: 'transform 1.5s ease-out' }">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M105.07713317871094,224.6114959716797 C105.07713317871094,224.6114959716797 0,224.6114959716797 0,224.6114959716797 C0,224.6114959716797 45.0994758605957,0 45.0994758605957,0 C45.0994758605957,0 150.17660522460938,0 150.17660522460938,0 C150.17660522460938,0 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 C105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797z">
                           </path>
                        </g>
                        <g opacity="1" :style="{ transform: svg2Transform, transition: 'transform 1.5s ease-out' }">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M70.67700958251953,0 C70.67700958251953,0 0,356.6260986328125 0,356.6260986328125 C0,356.6260986328125 104.62056732177734,356.6260986328125 104.62056732177734,356.6260986328125 C104.62056732177734,356.6260986328125 175.76258850097656,0 175.76258850097656,0 C175.76258850097656,0 70.67700958251953,0 70.67700958251953,0 C70.67700958251953,0 70.67700958251953,0 70.67700958251953,0z">
                           </path>
                        </g>
                        <g opacity="1" :style="{ transform: svg3Transform, transition: 'transform 1.5s ease-out' }">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M71.14198303222656,0 C71.14198303222656,0 0,356.6260986328125 0,356.6260986328125 C0,356.6260986328125 105.08554077148438,356.6260986328125 105.08554077148438,356.6260986328125 C105.08554077148438,356.6260986328125 176.2275390625,0 176.2275390625,0 C176.2275390625,0 71.14198303222656,0 71.14198303222656,0 C71.14198303222656,0 71.14198303222656,0 71.14198303222656,0z">
                           </path>
                        </g>
                     </g>
                  </g>
                  <g clip-path="url(#__lottie_element_132)"
                     transform="matrix(0.918423593044281,0,0,0.918423593044281,701.5159301757812,560.7931518554688)"
                     opacity="0.03999999910593033" style="display: block;">
                     <g transform="matrix(1,0,0,1,-481,-586)" opacity="1" style="display: block;">
                        <g opacity="0.21290322580645155" transform="matrix(1,0,0,1,481.4344482421875,660.5546875)">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M105.07713317871094,224.6114959716797 C105.07713317871094,224.6114959716797 0,224.6114959716797 0,224.6114959716797 C0,224.6114959716797 45.0994758605957,0 45.0994758605957,0 C45.0994758605957,0 150.17660522460938,0 150.17660522460938,0 C150.17660522460938,0 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 C105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797z">
                           </path>
                        </g>
                     </g>
                     <g transform="matrix(1,0,0,1,-481,-586)" opacity="1" style="display: block;">
                        <g opacity="0.5" transform="matrix(1,0,0,1,565.587646484375,698.180908203125)">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M70.67700958251953,0 C70.67700958251953,0 0,356.6260986328125 0,356.6260986328125 C0,356.6260986328125 104.62056732177734,356.6260986328125 104.62056732177734,356.6260986328125 C104.62056732177734,356.6260986328125 175.76258850097656,0 175.76258850097656,0 C175.76258850097656,0 70.67700958251953,0 70.67700958251953,0 C70.67700958251953,0 70.67700958251953,0 70.67700958251953,0z">
                           </path>
                        </g>
                     </g>
                     <g transform="matrix(1,0,0,1,-481,-586)" opacity="1" style="display: block;">
                        <g opacity="0.20265486725663717" transform="matrix(1,0,0,1,704.1611328125,586.6693725585938)">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M71.14198303222656,0 C71.14198303222656,0 0,356.6260986328125 0,356.6260986328125 C0,356.6260986328125 105.08554077148438,356.6260986328125 105.08554077148438,356.6260986328125 C105.08554077148438,356.6260986328125 176.2275390625,0 176.2275390625,0 C176.2275390625,0 71.14198303222656,0 71.14198303222656,0 C71.14198303222656,0 71.14198303222656,0 71.14198303222656,0z">
                           </path>
                        </g>
                     </g>
                  </g>
                  <g clip-path="url(#__lottie_element_112)"
                     transform="matrix(0.918423593044281,0,0,0.918423593044281,745.6002807617188,-0.36368125677108765)"
                     opacity="0.03999999910593033" style="display: block;">
                     <g transform="matrix(1,0,0,1,-529,25)" opacity="1" style="display: block;">
                        <g opacity="0.9947712418300654"
                           transform="matrix(1,0,0,1,633.4967041015625,-95.97756958007812)">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M105.07713317871094,224.6114959716797 C105.07713317871094,224.6114959716797 0,224.6114959716797 0,224.6114959716797 C0,224.6114959716797 45.0994758605957,0 45.0994758605957,0 C45.0994758605957,0 150.17660522460938,0 150.17660522460938,0 C150.17660522460938,0 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797z">
                           </path>
                        </g>
                     </g>
                     <g transform="matrix(1,0,0,1,-529,25)" opacity="1" style="display: block;">
                        <g opacity="0.9945054945054946"
                           transform="matrix(1,0,0,1,585.6649169921875,141.31451416015625)">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M105.07713317871094,224.6114959716797 C105.07713317871094,224.6114959716797 0,224.6114959716797 0,224.6114959716797 C0,224.6114959716797 45.0994758605957,0 45.0994758605957,0 C45.0994758605957,0 150.17660522460938,0 150.17660522460938,0 C150.17660522460938,0 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797z">
                           </path>
                        </g>
                     </g>
                     <g transform="matrix(1,0,0,1,-529,25)" opacity="1" style="display: block;">
                        <g opacity="0.20491803278688525"
                           transform="matrix(1,0,0,1,529.9801025390625,420.0038146972656)">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M105.07713317871094,224.6114959716797 C105.07713317871094,224.6114959716797 0,224.6114959716797 0,224.6114959716797 C0,224.6114959716797 45.0994758605957,0 45.0994758605957,0 C45.0994758605957,0 150.17660522460938,0 150.17660522460938,0 C150.17660522460938,0 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797z">
                           </path>
                        </g>
                     </g>
                     <g transform="matrix(1,0,0,1,-529,25)" opacity="1" style="display: block;">
                        <g opacity="0.2222222222222223" transform="matrix(1,0,0,1,717.64990234375,-58.35137939453125)">
                           <path fill="rgb(156,17,29)" fill-opacity="1"
                              d=" M105.07713317871094,224.6114959716797 C105.07713317871094,224.6114959716797 0,224.6114959716797 0,224.6114959716797 C0,224.6114959716797 45.0994758605957,0 45.0994758605957,0 C45.0994758605957,0 150.17660522460938,0 150.17660522460938,0 C150.17660522460938,0 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797 105.07713317871094,224.6114959716797z">
                           </path>
                        </g>
                     </g>
                  </g>
               </g>
            </g>
         </svg>
      </div>

      <!-- Text Section (above graphic) -->
      <div class="relative z-10 max-w-[1230px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
            <h1 class="font-style-level4 mb-6">
               <span class="text-[#9C111D]">Custom software development</span> for startups and businesses
            </h1>
            <p class="font-style-level5 mb-8">
               We build scalable web and mobile applications using pro-code and low-code technologies. Launch your MVP in weeks, not months.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
               <a href="http://calendly.com/archy-sales/30min"
                  class="btn bg-[#9C111D] font-style-level7 text-white px-8 py-3 rounded hover:bg-[#B10213] transition-colors duration-200 text-center">
                  BOOK A CALL
               </a>
               <a href="/"
                  class="btn border border-[#9C111D] font-style-level8 text-[#9C111D] px-8 py-3 rounded hover:bg-[#FFF5F5] transition-colors duration-200 text-center">
                  SEE PORTFOLIO
               </a>
            </div>
         </div>
      </div>

      <!-- Stats / Trust Section -->
      <div class="relative z-10 max-w-[1230px] mx-auto px-4 mt-16">
         <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <!-- Stat 1 -->
            <div>
               <h3 class="font-style-level20 text-[#9C111D] mb-1">
                  {{ Math.floor(count30) }}+
               </h3>
               <p class="font-style-level21 text-gray-600">
                  Projects Delivered
               </p>
            </div>
            <!-- Stat 2 -->
            <div>
               <h3 class="font-style-level20 text-[#9C111D] mb-1">
                  {{ Math.floor(count50) }}+
               </h3>
               <p class="font-style-level21 text-gray-600">
                  Experts on Board
               </p>
            </div>
            <!-- Stat 3 -->
            <div>
               <h3 class="font-style-level20 text-[#9C111D] mb-1">
                  {{ Math.floor(count95) }}%
               </h3>
               <p class="font-style-level21 text-gray-600">
                  Client Retention Rate
               </p>
            </div>
            <!-- TrustPilot / Review placeholder -->
            <div class="flex flex-col items-center md:items-start justify-center">
               <div class="flex items-center gap-1 mb-2">
                  <div class="flex text-[#00b67a]">
                     <!-- Star icons -->
                     <svg v-for="i in 5" :key="i" class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path
                           d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                     </svg>
                  </div>
                  <span class="font-bold text-lg ml-2">4.9/5</span>
               </div>
               <p class="text-sm text-gray-500">Based on 50+ reviews</p>
            </div>
         </div>
      </div>
   </section>
</template>