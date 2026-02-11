<script setup lang="ts">
import FooterLinks from './footer/FooterLinks.vue'
import ContactForm from './footer/ContactForm.vue'
import ScrollToTop from './footer/ScrollToTop.vue'
</script>

<template>
   <footer class="w-full border-t border-black" style="background: linear-gradient(90deg, #221F20 62%, #fff 0%)">
      <div class="max-w-[1230px] py-8 mx-auto px-4 py-12 flex flex-row">
         <FooterLinks />
         <ContactForm />
      </div>
   </footer>

   <ScrollToTop />
</template>

