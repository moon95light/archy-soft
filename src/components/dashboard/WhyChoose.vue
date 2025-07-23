<script setup>
import { ref } from 'vue'

const achievements = [
  {
    icon: "https://www.archysoft.com/wp-content/uploads/2025/06/Icon.svg",
    title: "Save up to 40% in development costs compare to traditional development",
    desc: "Low-code and no-code platforms reduce time and engineering overhead. That means lower budgets without cutting corners"
  },
  {
    icon: "https://www.archysoft.com/wp-content/uploads/2025/06/Icon-1.svg",
    title: "Stay in control with full transparency",
    desc: "You'll get regular updates and check-ins throughout the project. No surprises, just clear progress you can track."
  },
  {
    icon: "https://www.archysoft.com/wp-content/uploads/2025/06/Icon-2.svg",
    title: "Work with proven experts",
    desc: "Our team brings over 5 years of experience in no-code development across 50+ projects, from MVPs to enterprise apps."
  },
  {
    icon: "https://www.archysoft.com/wp-content/uploads/2025/06/Icon-4.svg",
    title: "Get fast delivery without the stress",
    desc: "We commit to strict timelines and deliver on time. Expect faster launches, smoother handoffs, and no project drag."
  },
  {
    icon: "https://www.archysoft.com/wp-content/uploads/2025/06/Icon-3.svg",
    title: "Pay less without sacrificing quality",
    desc: "Our pricing stays competitive while still giving you senior-level support, custom design, and reliable build quality."
  },
  {
    icon: "https://www.archysoft.com/wp-content/uploads/2025/06/Icon-5.svg",
    title: "Choose the setup that fits your business",
    desc: "Need just the MVP? Full app + backend? Integrations only? We’ll tailor the scope to fit your goals, budget, and timeline."
  }
]
</script>

<template>
   <section class="relative max-w-[1230px] py-8 mx-auto px-4 py-12">
      <div class="p-2 mb-4">
         <h2 class="font-style-level10 mb-4">Why choose low code/no code development from Archysoft</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(item, idx) in achievements" :key="idx"
        class="bg-white rounded-xl p-6 flex flex-col items-center border-1 border-gray-200 min-h-[280px]">
          <div
            class="w-16 h-16 mb-4 bg-center bg-no-repeat bg-cover rounded-full"
            :style="{ backgroundImage: `url('${item.icon}')` }"
          ></div>
          <h3 class="text-lg font-semibold text-center mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 text-center">{{ item.desc }}</p>
        </div>
      </div>
   </section>
</template>
