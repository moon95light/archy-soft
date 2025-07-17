<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
        <Header />

        <!-- Main Content -->
        <main class="flex-1">
            <HelloWorld />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

