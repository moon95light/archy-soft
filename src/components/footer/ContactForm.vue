<script setup lang="ts">
// Form logic can be added here
</script>

<template>
  <div class="w-3/10">
    <p class="footer_form_title font-style-level9 mb-6 text-gray-900 pl-6">
      Leave a request to contact us
    </p>
    <form class="footer_contact_form flex flex-col gap-4 pl-6"
       enctype="multipart/form-data" method="POST">
       <label class="flex flex-col">
          <input name="name" type="text" required placeholder="Your name"
             class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9C111D]"/>
       </label>
       <label class="flex flex-col">
          <input name="email" type="email" required placeholder="Your email"
             class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9C111D]"/>
       </label>
       <label class="flex flex-col">
          <textarea name="message" required placeholder="Your question"
             class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9C111D]"></textarea>
       </label>
       <input
          class="footer_contact_submit btn bg-[#9C111D] font-style-level7 text-white rounded w-5/7 px-6 py-2 cursor-pointer hover:bg-[#B10213] transition-colors duration-200"
          type="submit" value="Leave a request" />
    </form>
  </div>
</template>
