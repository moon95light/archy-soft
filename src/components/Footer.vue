<script setup lang="ts">
// Footer component props and logic can be added here
</script>

<template>
    <footer class="bg-gray-900 dark:bg-black text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="col-span-1 md:col-span-2">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Archy Soft
                        </h3>
                        <p class="mt-4 text-gray-300 max-w-md">
                            We create innovative digital solutions that help businesses grow and succeed in the modern digital landscape.
                        </p>
                    </div>

                    <!-- Social Links -->
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                            <span class="sr-only">Facebook</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                            <span class="sr-only">Twitter</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                            <span class="sr-only">LinkedIn</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                            <span class="sr-only">GitHub</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h4 class="text-lg font-semibold mb-4">Services</h4>
                    <ul class="space-y-2">
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                Web Development
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                Mobile Apps
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                UI/UX Design
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                Consulting
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
                                Maintenance
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-gray-800 mt-8 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © 2024 Archy Soft. All rights reserved.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            Terms of Service
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Custom styles can be added here if needed */
</style>
