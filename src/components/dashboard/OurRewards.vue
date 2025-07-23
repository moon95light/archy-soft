<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import svg1 from '../../assets/images/svg/1.svg'
import svg2 from '../../assets/images/svg/2.svg'
import svg3 from '../../assets/images/svg/3.svg'
import svg4 from '../../assets/images/svg/4.svg'
import svg5 from '../../assets/images/svg/5.svg'
import svg6 from '../../assets/images/svg/6.svg'
import svg7 from '../../assets/images/svg/7.svg'
import svg8 from '../../assets/images/svg/8.svg'

const slides = [
  { img: svg1, title: 'Reward 1' },
  { img: svg2, title: 'Reward 2' },
  { img: svg3, title: 'Reward 3' },
  { img: svg4, title: 'Reward 4' },
  { img: svg5, title: 'Reward 5' },
  { img: svg6, title: 'Reward 6' },
  { img: svg7, title: 'Reward 7' },
  { img: svg8, title: 'Reward 8' },
]

const current = ref(0)
let interval = null

function nextSlide() {
  // Only slide if not at the last visible group
  if (current.value < slides.length - 6) {
    current.value++
  } else {
    current.value = 0
  }
}

onMounted(() => {
  interval = setInterval(nextSlide, 3000)
})
onUnmounted(() => {
  clearInterval(interval)
})

// Mouse drag logic
let startX = null
function onMouseDown(e) {
  startX = e.clientX
}
function onMouseUp(e) {
  if (startX !== null) {
    const diff = e.clientX - startX
    if (diff > 50) {
      // Swipe right
      current.value = Math.max(current.value - 1, 0)
    } else if (diff < -50) {
      // Swipe left
      nextSlide()
    }
    startX = null
  }
}
</script>

<template>
  <section class="relative max-w-[1230px] py-8 mx-auto px-4 py-12">
    <div class="p-2 mb-4">
      <h2 class="font-style-level10 mb-4">Our rewards</h2>
    </div>
    <div
      class="relative w-full h-[260px] overflow-hidden rounded-xl shadow flex items-center justify-center select-none"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    >
      <div
        class="flex transition-transform duration-500 ease-in-out w-full h-full gap-x-[1px]"
        :style="`transform: translateX(-${current * (100/6)}%); width: ${slides.length * (100/6)}%;`"
      >
        <div
          v-for="(slide, idx) in slides"
          :key="idx"
          class="w-1/6 h-full flex-shrink-0 flex flex-col items-center justify-center"
        >
          <img
            :src="slide.img"
            alt=""
            class="w-full max-w-[180px] h-[180px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] rounded-[12px] object-contain mb-2"
          />
        </div>
      </div>
    </div>
  </section>
</template>
