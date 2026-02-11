<script setup lang="ts">
import logo from '/logo-white.svg'

// No props needed for now as data is static
</script>

<template>
  <div class="w-7/10">
    <img :src="logo" alt="" class="w-35 h-30">
    <div class="full flex flex-row mb-8 gap-18">
      <ul class="flex flex-col gap-2">
        <li class="mb-4">
          <p class="font-style-level26">Company</p>
        </li>
        <li>
          <ul class="font-style-level27">
            <li class="mb-4">Home</li>
            <li class="mb-4">About us</li>
            <li class="mb-4">Cases</li>
            <li class="mb-4">Blog</li>
            <li class="mb-4">Vacancies</li>
          </ul>
        </li>
      </ul>
      <ul class="flex flex-col gap-2">
        <li class="mb-4">
          <p class="font-style-level26">Services</p>
        </li>
        <li>
          <ul class="font-style-level27">
            <li class="mb-4">Service map</li>
            <li class="mb-4">Custom Web development</li>
            <li class="mb-4">NoCode | MVP Development​</li>
            <li class="mb-4">Team Augmentation​</li>
            <li class="mb-4">Low-Code development service</li>
          </ul>
        </li>
      </ul>
      <ul class="flex flex-col gap-2">
        <li class="mb-4">
          <p class="font-style-level26">Legal</p>
        </li>
        <li>
          <ul class="font-style-level27">
            <li class="mb-4">Privacy Policy</li>
            <li class="mb-4">Legal Information</li>
          </ul>
        </li>
      </ul>
      <ul class="flex flex-col gap-2">
        <li>
          <p class="font-style-level26">Contact</p>
        </li>
      </ul>
    </div>
    <div class="flex flex-row gap-10">
      <img src="https://www.archysoft.com/wp-content/uploads/2025/06/logo.png" alt="icon">
      <img src="https://www.archysoft.com/wp-content/uploads/2025/06/logo.png" alt="icon">
      <img src="https://www.archysoft.com/wp-content/uploads/2025/06/logo.png" alt="icon">
    </div>
  </div>
</template>
