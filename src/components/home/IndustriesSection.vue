<script setup>
import { ref, computed } from 'vue'

const industries = [
   {
      key: 'education',
      name: 'EdTech',
      icon: `<svg width="24" height="25" fill="none"><path d="M21.9836 9.92877V17.6429M5.99574 13.143V17.6429C5.99574 18.6659 6.6274 19.6469 7.75177 20.3703C8.87613 21.0936 10.4011 21.5 11.9912 21.5C13.5813 21.5 15.1062 21.0936 16.2306 20.3703C17.355 19.6469 17.9866 18.6659 17.9866 17.6429V13.143M21.4041 11.1143C21.583 11.0128 21.7348 10.846 21.8407 10.6345C21.9466 10.4231 22.002 10.1763 21.9999 9.92472C21.9979 9.67317 21.9386 9.42791 21.8293 9.21932C21.72 9.01073 21.5656 8.84798 21.3851 8.75122L12.8206 3.73188C12.5602 3.57908 12.2774 3.5 11.9912 3.5C11.7051 3.5 11.4222 3.57908 11.1619 3.73188L2.59837 8.74608C2.42047 8.84633 2.26913 9.01111 2.16286 9.22026C2.0566 9.42942 2 9.67389 2 9.92378C2 10.1737 2.0566 10.4181 2.16286 10.6273C2.26913 10.8364 2.42047 11.0012 2.59837 11.1015L11.1619 16.126C11.4222 16.2788 11.7051 16.3578 11.9912 16.3578C12.2774 16.3578 12.5602 16.2788 12.8206 16.126L21.4041 11.1143Z" stroke="#818386" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      description: 'Launch gamified quizzes, learning dashboards, and admin panels that boost student engagement. Cut time spent on content delivery and course tracking.',
      features: ['Quiz Builder', 'Gamified Learning App', 'Learning Management System', 'and others'],
      moreLink: ''
   },
   {
      key: 'logistics',
      name: 'Logistics',
      icon: `<svg width="24" height="25" fill="none"><path d="M14.2 19.25V5.75C14.2 5.15326 13.9682 4.58097 13.5556 4.15901C13.1431 3.73705 12.5835 3.5 12 3.5H3.2C2.61652 3.5 2.05695 3.73705 1.64436 4.15901C1.23178 4.58097 1 5.15326 1 5.75V18.125C1 18.4234 1.11589 18.7095 1.32218 18.9205C1.52847 19.1315 1.80826 19.25 2.1 19.25H4.3M4.3 19.25C4.3 20.4926 5.28497 21.5 6.5 21.5C7.71503 21.5 8.7 20.4926 8.7 19.25M4.3 19.25C4.3 18.0074 5.28497 17 6.5 17C7.71503 17 8.7 18.0074 8.7 19.25M15.3 19.25H8.7M15.3 19.25C15.3 20.4926 16.285 21.5 17.5 21.5C18.715 21.5 19.7 20.4926 19.7 19.25M15.3 19.25C15.3 18.0074 16.285 17 17.5 17C18.715 17 19.7 18.0074 19.7 19.25M19.7 19.25H21.9C22.1917 19.25 22.4715 19.1315 22.6778 18.9205C22.8841 18.7095 23 18.4234 23 18.125V14.0188C22.9996 13.7634 22.9142 13.5159 22.758 13.3167L18.93 8.423C18.8271 8.29124 18.6966 8.18482 18.5481 8.1116C18.3996 8.03838 18.2369 8.00024 18.072 8H14.2" stroke="#818386" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      description: 'Get custom tools to monitor shipments, manage vehicle inspections, and automate dispatching. Eliminate delays caused by disconnected systems and slow manual updates.',
      features: ['WMS', 'Fleet Tracking', 'Driver App', 'and others'],
      moreLink: ''
   },
   {
      key: 'real-estate',
      name: 'Real Estate',
      icon: `<svg width="22" height="21" fill="none"><path d="M6.66667 14.6668H13.3333M9.18141 2.80345L3.52949 7.19939C3.15168 7.49324 2.96278 7.64017 2.82669 7.82417C2.70614 7.98716 2.61633 8.17077 2.56169 8.366C2.5 8.58639 2.5 8.8257 2.5 9.30433V15.3334C2.5 16.2669 2.5 16.7336 2.68166 17.0901C2.84144 17.4037 3.09641 17.6587 3.41002 17.8185C3.76654 18.0001 4.23325 18.0001 5.16667 18.0001H14.8333C15.7668 18.0001 16.2335 18.0001 16.59 17.8185C16.9036 17.6587 17.1586 17.4037 17.3183 17.0901C17.5 16.7336 17.5 16.2669 17.5 15.3334V9.30433C17.5 8.8257 17.5 8.58639 17.4383 8.366C17.3837 8.17077 17.2939 7.98716 17.1733 7.82417C17.0372 7.64017 16.8483 7.49324 16.4705 7.19939L10.8186 2.80345C10.5258 2.57574 10.3794 2.46189 10.2178 2.41812C10.0752 2.37951 9.92484 2.37951 9.78221 2.41812C9.62057 2.46189 9.47418 2.57574 9.18141 2.80345Z" stroke="#818386" stroke-width="1.39167" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      description: 'Use smart CRMs, multi-listing dashboards, and virtual property tours to streamline sales and rental workflows. Stop juggling spreadsheets or outdated platforms.',
      features: ['CRM for Agents', 'Multi-Listing Platform', 'Property Valuation Tool', 'and others'],
      moreLink: ''
   },
   {
      key: 'healthcare',
      name: 'Healthcare',
      icon: `<svg width="24" height="25" fill="none"><path d="M3.21997 12.5H9.49997L9.99997 11.5L12 16L14 9L15.5 12.5H20.77M19 14.5C20.49 13.04 22 11.29 22 9C22 7.54131 21.4205 6.14236 20.3891 5.11091C19.3576 4.07946 17.9587 3.5 16.5 3.5C14.74 3.5 13.5 4 12 5.5C10.5 4 9.26 3.5 7.5 3.5C6.04131 3.5 4.64236 4.07946 3.61091 5.11091C2.57946 6.14236 2 7.54131 2 9C2 11.3 3.5 13.05 5 14.5L12 21.5L19 14.5Z" stroke="#818386" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      description: 'Access secure platforms for handling patient records, prescriptions, and medical billing. Replace paperwork and human error with compliant, centralized tools.',
      features: ['EMR System', 'Pharmacy App', 'Medical Billing', 'and others'],
      moreLink: ''
   },
   {
      key: 'ecommerce',
      name: 'E-commerce',
      icon: `<svg width="24" height="25" fill="none"><path d="M2.95938 3.5H4.7639L7.1639 14.706C7.25194 15.1164 7.4803 15.4833 7.80966 15.7435C8.13902 16.0037 8.54878 16.1409 8.96842 16.1316H17.7925C18.2032 16.1309 18.6014 15.9902 18.9213 15.7327C19.2411 15.4751 19.4636 15.1161 19.5519 14.7151L21.0406 8.01129H5.72931M9.23003 20.5977C9.23003 21.096 8.82607 21.5 8.32777 21.5C7.82947 21.5 7.42551 21.096 7.42551 20.5977C7.42551 20.0994 7.82947 19.6955 8.32777 19.6955C8.82607 19.6955 9.23003 20.0994 9.23003 20.5977ZM19.1549 20.5977C19.1549 21.096 18.7509 21.5 18.2526 21.5C17.7543 21.5 17.3504 21.096 17.3504 20.5977C17.3504 20.0994 17.7543 19.6955 18.2526 19.6955C18.7509 19.6955 19.1549 20.0994 19.1549 20.5977Z" stroke="#818386" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      description: 'Run an online store with synced inventory, real-time order tracking, and customer insights in one place. No more manual catalog updates or scattered sales data.',
      features: ['Product Catalog Manager', 'Order Tracking System', 'Payment Gateway Integration', 'and others'],
      moreLink: ''
   },
   {
      key: 'beauty',
      name: 'Beauty & Wellness',
      icon: `<svg width="24" height="25" fill="none"><path d="M12.3642 13.4153C12.7745 12.4644 13.5002 11.684 14.4189 11.206C15.3376 10.7279 16.3931 10.5813 17.4073 10.791C18.4215 11.0007 19.3323 11.5538 19.9861 12.357C20.6399 13.1602 20.9966 14.1643 20.9961 15.2C20.9961 18.6794 17.3961 21.5 12.8961 21.5C9.22684 21.5 5.55844 20.762 3.56224 19.2842C3.17884 18.9998 2.99434 18.5354 3.00424 18.0584C3.10234 13.1507 3.56044 3.5 10.1961 3.5C10.9122 3.5 11.599 3.78446 12.1053 4.29081C12.6117 4.79716 12.8961 5.48392 12.8961 6.2C12.8961 6.67739 12.7065 7.13523 12.3689 7.47279C12.0314 7.81036 11.5735 8 11.0961 8C10.1016 8 9.62014 7.6004 9.29614 7.1M14.6962 14.3001C14.153 13.8925 13.5247 13.6131 12.8582 13.4829C12.1917 13.3526 11.5044 13.3749 10.8477 13.5481C10.1911 13.7213 9.58217 14.0408 9.06658 14.4828C8.55099 14.9247 8.14211 15.4776 7.87058 16.1001M10.1638 7.84246C8.41327 8.87926 9.74617 13.4 8.39617 15.2" stroke="#818386" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      description: 'Allow clients to book appointments, reorder products, and give feedback through a branded system. Solve missed bookings and improve client loyalty without extra staff time.',
      features: ['Online Booking System', 'Client CRM', 'Product Reordering Tool', 'and others'],
      moreLink: ''
   }
]

const selectedKey = ref(industries[0].key)
const selectedIndustry = computed(() => industries.find(i => i.key === selectedKey.value))
</script>

<template>
   <section class="relative max-w-[1230px] py-8 mx-auto px-4 py-12">
      <!-- Header -->
      <div class="mb-8 justify-start">
         <h2 class="mb-2 font-style-level10">Industries We Work With</h2>
         <p class="mx-auto font-style-level11">
            Fast, scalable no-code solutions for industries where automation, flexibility, and speed to market drive
            real business value.
         </p>
      </div>
      <!-- Body -->
      <div class="flex flex-col md:flex-row gap-8 h-70">
         <!-- Left: Dropdown & List -->
         <div class="md:w-1/4 overflow-y-scroll">
            <!-- Dropdown for mobile -->
            <select v-model="selectedKey" class="block md:hidden w-full border-gray-300 rounded-lg mb-4">
               <option class="font-style-level12" v-for="industry in industries" :key="industry.key"
                  :value="industry.key">
                  {{ industry.name }}
               </option>
            </select>
            <!-- Vertical List for desktop -->
            <ul class="hidden md:block space-y-2 border-r border-r-gray-300 font-style-level12">
               <li v-for="industry in industries" :key="industry.key">
                  <button :class="[
                     'flex items-center cursor-pointer w-full px-4 py-3 rounded-lg transition',
                     selectedKey === industry.key ? 'bg-[#f8e7ea] text-[#910f20] font-bold' : 'hover:bg-gray-100 text-gray-700'
                  ]" @click="selectedKey = industry.key">
                     <span v-html="industry.icon" class="mr-3"></span>
                     <span>{{ industry.name }}</span>
                  </button>
               </li>
            </ul>
         </div>
         <!-- Right: Details -->
         <div class="md:w-3/4 px-4 text-black flex flex-row min-h-[320px]">
            <div class="flex md:w-2/3 border-r border-r-gray-300 h-70 pr-4">
               <p class="font-style-level13">{{ selectedIndustry.description }}</p>
            </div>
            <div class="flex flex-col px-2 md:w-1/3">
               <h3 class="mb-2 font-style-level14">What We Can Build:</h3>
               <ul class="mb-4 list-none flex flex-col flex-wrap">
                  <li class="inline-block rounded-[5px] p-1 mb-3 border border-[#9C111D] flex flex-row items-center max-w-max bg-white/50 text-center font-style-level15"
                     v-for="feature in selectedIndustry.features" :key="feature">{{ feature }}</li>
               </ul>
               <a v-if="selectedIndustry.moreLink" :href="selectedIndustry.moreLink"
                  class="inline-flex items-center px-4 py-2 bg-white text-[#910f20] font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                  <span>SEE MORE</span>
                  <svg class="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#910f20" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                  </svg>
               </a>
            </div>
         </div>
      </div>
   </section>
</template>