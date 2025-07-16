<script setup lang="ts">
import { ref } from 'vue'

const showDropdown = ref(false)
const tabs = ['demo1', 'demo2', 'demo3']
const activeTab = ref(0)
</script>

<template>
  <header class="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 w-full">
    <div class="container mx-auto flex justify-between items-center h-20 px-4 relative">
      <!-- Logo -->
      <div class="flex items-center h-full">
        <img src="/logo.svg" alt="Logo" class="h-10 w-auto" />
      </div>
      <!-- Navigation -->
      <nav class="flex-1 flex justify-center">
        <ul class="flex space-x-4 items-center h-full">
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors px-4 py-2 font-medium transition-colors duration-200">Home</a>
          </li>
          <li
            class="relative h-full"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <button class="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200 flex items-center h-full cursor-pointer">
              Our Services
              <svg v-if="!showDropdown" class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              <svg v-else class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 15l-7-7-7 7"/></svg>
            </button>
            <transition name="fade">
              <div
                v-if="showDropdown"
                class="fixed left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-xl z-50 flex items-center justify-center rounded-b-2xl overflow-hidden"
                :style="{ top: '80px', height: '300px' }"
              >
                <div class="flex w-full h-full">
                  <!-- First part: 1/8 width, blank -->
                  <div class="w-2/9 h-full border-r border-gray-200 dark:border-gray-700"></div>
                  <!-- Second part: 3/8 width, title and list -->
                  <div class="w-3/9 h-full flex ml-4 flex-col pt-2 border-r border-gray-200 dark:border-gray-700">
                    <div class="text-left">
                      <div class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Services</div>
                      <ul class="space-y-2">
                        <li>
                            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 transition-transform duration-200 group-hover:scale-110">
                                    <path d="M8.1565 0.854184L13.4607 4.39002C13.5748 4.46612 13.6684 4.56922 13.7331 4.69017C13.7978 4.81112 13.8317 4.94617 13.8317 5.08335C13.8317 5.22053 13.7978 5.35558 13.7331 5.47653C13.6684 5.59748 13.5748 5.70058 13.4607 5.77668L8.1565 9.31335C7.81423 9.54159 7.41205 9.66338 7.00066 9.66338C6.58928 9.66338 6.1871 9.54159 5.84483 9.31335L0.540665 5.77668C0.426534 5.70058 0.332954 5.59748 0.268231 5.47653C0.203509 5.35558 0.169645 5.22053 0.169645 5.08335C0.169645 4.94617 0.203509 4.81112 0.268231 4.69017C0.332954 4.56922 0.426534 4.46612 0.540665 4.39002L5.84483 0.854184C6.1871 0.625947 6.58928 0.50415 7.00066 0.50415C7.41205 0.50415 7.81423 0.625947 8.1565 0.854184ZM13.689 8.16002C13.5653 8.35793 13.4015 8.5277 13.2082 8.65835L8.1665 12.0617C7.82216 12.2942 7.41616 12.4184 7.00066 12.4184C6.58517 12.4184 6.17917 12.2942 5.83483 12.0617L0.793165 8.65835C0.491421 8.45479 0.264613 8.15804 0.14739 7.81345C0.0301672 7.46885 0.028976 7.09535 0.143998 6.75002L5.84483 10.55C6.16488 10.7633 6.53772 10.8838 6.92205 10.8982C7.30639 10.9126 7.68721 10.8204 8.02233 10.6317L8.15566 10.55L13.8565 6.75002C13.9344 6.98284 13.9597 7.23001 13.9308 7.47379C13.9018 7.71757 13.8192 7.95192 13.689 8.16002ZM13.689 10.8684C13.5653 11.0663 13.4015 11.236 13.2082 11.3667L8.1665 14.77C7.82216 15.0025 7.41616 15.1268 7.00066 15.1268C6.58517 15.1268 6.17917 15.0025 5.83483 14.77L0.793165 11.3667C0.491421 11.1631 0.264613 10.8664 0.14739 10.5218C0.0301672 10.1772 0.028976 9.80369 0.143998 9.45835L5.84483 13.2584C6.16488 13.4716 6.53772 13.5922 6.92205 13.6066C7.30639 13.621 7.68721 13.5287 8.02233 13.34L8.15566 13.2584L13.8565 9.45835C13.9344 9.69117 13.9597 9.93834 13.9308 10.1821C13.9018 10.4259 13.8192 10.6603 13.689 10.8684Z" fill="#54595F"></path>
                                </svg>
                                <span class="ml-2">Service Map</span>
                            </a>
                        </li>
                        <li class="ml-2">
                            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 transition-transform duration-200 group-hover:scale-110">
                                    <path d="M4.69219 7.13633C4.54063 7.02305 4.38867 6.96641 4.23711 6.96641H3.55586V11.0473H4.2375C4.38906 11.0473 4.54102 10.9906 4.69258 10.8773C4.84414 10.7641 4.91992 10.5941 4.91992 10.3672V7.64648C4.91953 7.41992 4.84336 7.24961 4.69219 7.13633ZM15.7852 0.25H1.71484C0.769531 0.25 0.00234375 1.01523 0 1.96094V16.0391C0.00234375 16.9848 0.769531 17.75 1.71484 17.75H15.7852C16.7309 17.75 17.4977 16.9848 17.5 16.0391V1.96094C17.4977 1.01523 16.7305 0.25 15.7852 0.25ZM6.02344 10.3746C6.02344 11.1094 5.56992 12.2227 4.13437 12.2203H2.32187V5.75703H4.17266C5.55703 5.75703 6.02266 6.86875 6.02305 7.60391L6.02344 10.3746ZM9.95625 6.91133H7.875V8.41211H9.14727V9.56719H7.875V11.0676H9.95664V12.2227H7.52773C7.0918 12.234 6.7293 11.8895 6.71836 11.4535V6.56641C6.70781 6.13086 7.05273 5.76914 7.48828 5.7582H9.95664L9.95625 6.91133ZM14.0047 11.4148C13.4891 12.616 12.5652 12.377 12.1516 11.4148L10.6465 5.75859H11.9187L13.0793 10.2008L14.2344 5.75859H15.507L14.0047 11.4148Z" fill="#54595F"></path>
                                </svg>
                                <span class="ml-2">Web Development</span>
                            </a>
                        </li>
                        <li class="ml-2">
                            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 transition-transform duration-200 group-hover:scale-110">
                                    <path d="M12.3327 11.1666V12.8333H0.666016V11.1666C0.666016 11.1666 0.666016 7.8333 6.49935 7.8333C12.3327 7.8333 12.3327 11.1666 12.3327 11.1666ZM9.41602 3.24996C9.41602 2.6731 9.24496 2.10919 8.92447 1.62955C8.60398 1.14991 8.14846 0.77607 7.61551 0.555314C7.08256 0.334558 6.49611 0.276799 5.93034 0.389339C5.36456 0.501879 4.84486 0.779665 4.43695 1.18757C4.02905 1.59547 3.75127 2.11517 3.63873 2.68095C3.52619 3.24673 3.58394 3.83317 3.8047 4.36612C4.02546 4.89907 4.39929 5.3546 4.87894 5.67508C5.35858 5.99557 5.92249 6.16663 6.49935 6.16663C7.2729 6.16663 8.01476 5.85934 8.56174 5.31236C9.10872 4.76538 9.41602 4.02351 9.41602 3.24996ZM12.2827 7.8333C12.795 8.22975 13.2142 8.73366 13.5107 9.30955C13.8073 9.88545 13.9741 10.5193 13.9993 11.1666V12.8333H17.3327V11.1666C17.3327 11.1666 17.3327 8.14163 12.2827 7.8333ZM11.4993 0.333296C10.9258 0.330102 10.3648 0.501592 9.89102 0.824963C10.3972 1.53224 10.6694 2.3802 10.6694 3.24996C10.6694 4.11972 10.3972 4.96768 9.89102 5.67496C10.3648 5.99833 10.9258 6.16982 11.4993 6.16663C12.2729 6.16663 13.0148 5.85934 13.5617 5.31236C14.1087 4.76538 14.416 4.02351 14.416 3.24996C14.416 2.47641 14.1087 1.73455 13.5617 1.18757C13.0148 0.640587 12.2729 0.333296 11.4993 0.333296Z" fill="#54595F"></path>
                                </svg>
                                <span class="ml-2">Team Augmentation</span>
                            </a>
                        </li>
                        <li class="ml-2">
                            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 transition-transform duration-200 group-hover:scale-110">
                                <path d="M17.4987 13.3335H14.1654C13.7051 13.3335 13.332 13.7066 13.332 14.1668V17.5002C13.332 17.9604 13.7051 18.3335 14.1654 18.3335H17.4987C17.9589 18.3335 18.332 17.9604 18.332 17.5002V14.1668C18.332 13.7066 17.9589 13.3335 17.4987 13.3335Z" stroke="#54595F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5.83268 13.3335H2.49935C2.03911 13.3335 1.66602 13.7066 1.66602 14.1668V17.5002C1.66602 17.9604 2.03911 18.3335 2.49935 18.3335H5.83268C6.29292 18.3335 6.66602 17.9604 6.66602 17.5002V14.1668C6.66602 13.7066 6.29292 13.3335 5.83268 13.3335Z" stroke="#54595F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11.6667 1.66675H8.33333C7.8731 1.66675 7.5 2.03984 7.5 2.50008V5.83341C7.5 6.29365 7.8731 6.66675 8.33333 6.66675H11.6667C12.1269 6.66675 12.5 6.29365 12.5 5.83341V2.50008C12.5 2.03984 12.1269 1.66675 11.6667 1.66675Z" stroke="#54595F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M4.16602 13.3334V10.8334C4.16602 10.6124 4.25381 10.4004 4.41009 10.2442C4.56637 10.0879 4.77834 10.0001 4.99935 10.0001H14.9993C15.2204 10.0001 15.4323 10.0879 15.5886 10.2442C15.7449 10.4004 15.8327 10.6124 15.8327 10.8334V13.3334M9.99935 10.0001V6.66675" stroke="#54595F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span class="ml-2">NoCode | MVP Development</span>
                            </a>
                        </li>
                        <li class="ml-2">
                            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#969696" viewBox="0 0 256 256" class="ml-2 transition-transform duration-200 group-hover:scale-110">
                                    <path d="M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM188,167l-56,32a8,8,0,0,1-7.94,0L68,167A8,8,0,0,1,64,160V96a8,8,0,0,1,4-7l56-32a8,8,0,0,1,7.94,0l56,32a8,8,0,0,1,4,7v64A8,8,0,0,1,188,167ZM88.12,96,128,118.79,167.88,96,128,73.21ZM80,155.36l40,22.85V132.64L80,109.79Zm96,0V109.79l-40,22.85v45.57Z"></path>
                                </svg>
                                <span class="ml-2">Low-Code development service</span>
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Third part: 4/8 width, tabs -->
                  <div class="w-4/9 h-full flex flex-col px-8">
                    <div class="flex space-x-4 border-b border-gray-200 dark:border-gray-700 mb-4">
                      <button
                        v-for="(tab, idx) in tabs"
                        :key="tab"
                        @click="activeTab = idx"
                        :class="['font-mgm py-2 px-4 font-semibold focus:outline-none', activeTab === idx ? 'border-b-2 border-red-600 text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300']"
                      >
                        {{ tab }}
                      </button>
                    </div>
                    <div class="flex-1 text-gray-700 dark:text-gray-200 text-lg">
                      <div v-if="activeTab === 0">
                        <div class="mb-2">demo 1</div>
                        <p>We build scalable, robust web applications tailored to your business needs.</p>
                      </div>
                      <div v-else-if="activeTab === 1">
                        <div class="mb-2">demo 2</div>
                        <p>Our team creates high-performance mobile apps for iOS and Android platforms.</p>
                      </div>
                      <div v-else>
                        <div class="mb-2">demo 3</div>
                        <p>We design intuitive and engaging user experiences for your digital products.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">About Us</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Cases</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Blog</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Vacancies</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 font-medium transition-colors duration-200">Contact us</a>
          </li>
        </ul>
      </nav>
      <!-- Book a call Button -->
      <div class="flex items-center h-full">
        <a href="#" class="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors duration-200">Book a call</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
