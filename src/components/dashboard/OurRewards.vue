<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { img: 'https://www.archysoft.com/wp-content/uploads/2025/06/image-62.svg', title: 'Reward 1' },
  { img: 'https://www.archysoft.com/wp-content/uploads/2025/06/image-61.svg', title: 'Reward 2' },
  { img: 'https://www.archysoft.com/wp-content/uploads/2025/06/slide111.svg', title: 'Reward 3' },
  { img: 'https://www.archysoft.com/wp-content/uploads/2025/06/image-60.svg', title: 'Reward 4' },
  { img: 'https://www.archysoft.com/wp-content/uploads/2025/06/slide10.svg', title: 'Reward 5' },
  { img: 'https://www.archysoft.com/wp-content/uploads/2025/06/slide8.svg', title: 'Reward 6' },
  { img: 'https://www.archysoft.com/wp-content/uploads/2025/06/image-60-1.svg', title: 'Reward 7' },
  { img: 'https://www.archysoft.com/wp-content/uploads/2025/06/image-63.svg', title: 'Reward 8' },
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
