<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <div class="py-12 px-4">
        <div class="max-w-4xl mx-auto">
            <!-- Header Section -->
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    {{ msg }}
                </h1>
                <p class="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto">
                    Welcome to your Vue.js application with Tailwind CSS and modular components
                </p>
            </div>

            <!-- Main Content Cards -->
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <!-- Interactive Card -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                    <div class="text-center">
                        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Interactive Counter
                        </h3>
                        <button
                            type="button"
                            @click="count++"
                            class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-6 text-lg"
                        >
                            Count is {{ count }}
                        </button>

                        <p class="text-gray-600 dark:text-gray-300">
                            Edit
                            <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                                components/HelloWorld.vue
                            </code>
                            to test HMR
                        </p>
                    </div>
                </div>

                <!-- Features Card -->
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                        🚀 Features
                    </h3>
                    <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                        <li class="flex items-center">
                            <span class="text-green-500 mr-3">✓</span>
                            Vue 3 with Composition API
                        </li>
                        <li class="flex items-center">
                            <span class="text-green-500 mr-3">✓</span>
                            TypeScript Support
                        </li>
                        <li class="flex items-center">
                            <span class="text-green-500 mr-3">✓</span>
                            Tailwind CSS v4
                        </li>
                        <li class="flex items-center">
                            <span class="text-green-500 mr-3">✓</span>
                            Modular Components
                        </li>
                        <li class="flex items-center">
                            <span class="text-green-500 mr-3">✓</span>
                            Dark Mode Support
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Links Section -->
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        🚀 Quick Start
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Check out the official Vue + Vite starter
                    </p>
                    <a
                        href="https://vuejs.org/guide/quick-start.html#local"
                        target="_blank"
                        class="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                        Learn More →
                    </a>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        🛠️ IDE Support
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        Learn more about IDE Support for Vue
                    </p>
                    <a
                        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
                        target="_blank"
                        class="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                        View Guide →
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom styles can be added here if needed */
</style>
