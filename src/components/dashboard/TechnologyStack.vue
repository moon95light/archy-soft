<script setup>
import { ref } from 'vue'

const tabs = [
   {
      key: 'for-web-apps',
      label: 'For Web Apps',
      technologies: [
         { name: 'Bubble.io', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/logo.svg' },
         { name: 'Webflow', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Webflow.svg' },
         { name: 'Xano', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Xano.svg' },
      ],
   },
   {
      key: 'for-mobile-apps',
      label: 'For Mobile Apps',
      technologies: [
         { name: 'FlutterFlow', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/FlutterFlow.svg' },
         { name: 'Flutter', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Flutter.svg' },
         { name: 'PWA', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/PWA.svg' },
         { name: 'Adalo', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Adalo.svg' },
         { name: 'Glide', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Glide.svg' },
      ],
   },
   {
      key: 'for-automation-integrations',
      label: 'For Automation & Integrations',
      technologies: [
         { name: 'Make', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Make.svg' },
         { name: 'Zapier', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Zapier.svg' },
         { name: 'Airtable', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Airtable.svg' },
         { name: 'N8n', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/N8n.svg' },
         { name: 'RAG', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/RAG.svg' },
      ],
   },
   {
      key: 'ttraditional-tech-stack',
      label: 'Traditional Tech Stack',
      technologies: [
         {
            sub: 'Frontend',
            items: [
               { name: 'React', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/React.svg' },
               { name: 'ReactRouter', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/ReactRouter.svg' },
               { name: 'Gatsby.JS', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Gatsby.svg' },
               { name: 'Angular', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Angular.svg' },
               { name: 'CssModules', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/CssModules.svg' },
               { name: 'Next.JS', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Next.svg' },
               { name: 'TypeScript', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/TypeScript.svg' },
               { name: 'NgRX', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/NgRX.svg' },
               { name: 'JavaScript', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/JavaScript.svg' },
               { name: 'Express', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/express.svg' },
               { name: 'Redux', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Redux.svg' },
               { name: 'Jasmine', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Jasmine.svg' },
               { name: 'Helmet', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Helmet.svg' },
               { name: 'Sharp', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Sharp.svg' },
               { name: 'RxJs', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/RxJs.svg' },
               { name: 'Jest', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Jest.svg' },
               { name: 'Angular.JS', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Angular-1.svg' },
               { name: 'HTML', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/HTML.svg' },
               { name: 'CSS', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/CSS.svg' },
               { name: 'Electron.JS', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Electron.svg' },
            ],
         },
         {
            sub: 'Backend',
            items: [
               { name: 'Node.Js', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Node.svg' },
               { name: 'InversifyJS', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/InversifyJS.svg' },
               { name: 'axios', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/axios.svg' },
               { name: 'Nest.JS', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Nest.svg' },
               { name: 'JavaScript', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/JavaScript.svg' },
               { name: '.ENV', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/env.svg' },
               { name: 'Passport.JS', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/passport.svg' },
               { name: 'TypeORM', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/TypeORM.svg' },
               { name: 'Express', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/express.svg' },
               { name: 'mongoose', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/mongoose.svg' },
               { name: 'SWAGGER', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/SWAGGER.svg' },
               { name: 'Karma', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Karma.svg' },
               { name: 'ASP.NET', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/ASP.NET_.svg' },
               { name: '.NET', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/net.svg' },
               { name: 'C#', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/C.svg' },
               { name: 'ASP.NET Core', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/ASP.NET-Core.svg' },
               { name: 'Entity Framework', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Entity-Framework.svg' },
               { name: 'Serilog', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Serilog.svg' },
               { name: 'xUnit', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/xUnit.svg' },
               { name: 'NUnit', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/NUnit.svg' },
               { name: 'C', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/C-1.svg' },
               { name: 'C++', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/c.svg' },
               { name: 'TypeScript', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/TypeScript.svg' },
               { name: 'Jest', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Jest.svg' },
            ],
         },
         {
            sub: 'Database',
            items: [
               { name: 'MS SQL', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/MS-SQL.svg' },
               { name: 'PostgreSQL', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/PostgreSQL.svg' },
               { name: 'MongoDB', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/MongoDB.svg' },
               { name: 'SQL/TSQL', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/SQL.svg' },
            ],
         },
         {
            sub: 'Test automation',
            items: [
               { name: 'Selenium (Web Driver)', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/sel.svg' },
               { name: 'Postman (Api Tests)', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/post.svg' },
               { name: 'JMeter (Performance)', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/JMeter-Performance.svg' },
            ],
         },
         {
            sub: 'Clouds',
            items: [
               { name: 'Azure (Microsoft)', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/Azure-Microsoft.svg' },
               { name: 'DigitalOcean', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/DigitalOcean.svg' },
               { name: 'AWS (Amazon)', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/AWS-Amazon.svg' },
               { name: 'GCP (Google)', icon: 'https://www.archysoft.com/wp-content/uploads/2025/06/GCP-Google.svg' },
            ],
         },
      ],
   },
]

const activeTab = ref(tabs[0].key)
const activeSubtab = ref('Frontend')
const showSubtabs = ref(false)

function setTab(tabKey) {
   activeTab.value = tabKey
   if (tabKey === 'ttraditional-tech-stack') {
      activeSubtab.value = 'Frontend'
      // Do not toggle showSubtabs here
   } else {
      showSubtabs.value = false
   }
}

function toggleSubtabs() {
   // Only toggle if already on traditional tech stack tab
   if (activeTab.value === 'ttraditional-tech-stack') {
      showSubtabs.value = !showSubtabs.value
   } else {
      activeTab.value = 'ttraditional-tech-stack'
      activeSubtab.value = 'Frontend'
      showSubtabs.value = true
   }
}

function setSubtab(sub) {
   activeSubtab.value = sub
}
</script>

<template>
   <section class="relative max-w-[1230px] py-8 mx-auto px-4 py-12">
      <div class="p-2 mb-4">
         <h2 class="font-style-level10 mb-4">Technology Stack</h2>
         <p class="font-style-level11">
            We use modern no-code and low-code tools to deliver scalable apps, fast. Each platform is selected based on
            your project’s goals, complexity, and budget.
         </p>
      </div>
      <div class="flex flex-row min-h-[262px] max-h-[298px] bg-white rounded-xl">
         <!-- Tabs & Subtabs (1/4 width) -->
         <div class="w-2/7 border-r border-gray-200 p-4 flex flex-col gap-2 overflow-y-auto max-h-[298px]">
            <div class="flex flex-col gap-2">
               <button v-for="tab in tabs" :key="tab.key"
                  @click="tab.key === 'ttraditional-tech-stack' ? null : setTab(tab.key)" :class="[
                     'group px-4 py-3 mb-4 rounded font-semibold transition text-left flex items-center justify-between',
                     activeTab === tab.key
                        ? 'bg-[#ffe4e4] font-style-level23'
                        : 'bg-white font-style-level22 hover:bg-[#f8e9ec]'
                  ]">
                  <span class="transition-all duration-200 ease-in-out"
                     :class="activeTab === tab.key ? 'translate-x-[10px]' : 'group-hover:translate-x-[10px]'">
                     {{ tab.label }}
                  </span>
                  <span v-if="tab.key === 'ttraditional-tech-stack'" class="ml-2 align-middle cursor-pointer"
                     @click.stop="toggleSubtabs">
                     <svg width="20" height="20" viewBox="0 0 25 24" fill="none"
                        :class="showSubtabs ? '' : 'rotate-180 transition-transform duration-200'">
                        <path d="M6.49951 9L12.4995 15L18.4995 9" stroke="#534E51" stroke-linecap="round"
                           stroke-linejoin="round" />
                     </svg>
                  </span>
               </button>
            </div>
            <!-- Subtabs for Traditional Tech Stack -->
            <div v-if="activeTab === 'ttraditional-tech-stack' && showSubtabs" class="flex flex-col gap-2 pr-2">
               <button
                  v-for="sub in tabs.find(t => t.key === 'ttraditional-tech-stack').technologies.map(t => t.sub)"
                  :key="sub"
                  @click="setSubtab(sub)"
                  :class="[
                     'group px-4 py-3 mb-4 rounded font-semibold transition text-left flex items-center justify-between',
                     activeSubtab === sub
                        ? 'bg-[#ffe4e4] font-style-level23'
                        : 'bg-white font-style-level22 hover:bg-[#f8e9ec]'
                  ]">
                  <span
                     class="transition-all duration-200 ease-in-out"
                     :class="activeSubtab === sub ? 'translate-x-[10px]' : 'group-hover:translate-x-[10px]'">
                     {{ sub }}
                  </span>
               </button>
            </div>
         </div>
         <!-- Content (3/4 width) -->
         <div class="w-5/7 p-6 overflow-y-auto">
            <!-- Non-traditional tabs -->
            <div v-if="activeTab !== 'ttraditional-tech-stack'"
               class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               <div v-for="tech in tabs.find(t => t.key === activeTab).technologies" :key="tech.name"
                  class="flex flex-col items-center bg-white rounded-xl border border-gray-200 p-6">
                  <div class="w-16 h-16 mb-4 bg-center bg-no-repeat bg-cover rounded-full"
                     :style="{ backgroundImage: `url('${tech.icon}')` }"></div>
                  <span class="text-base font-semibold text-center">{{ tech.name }}</span>
               </div>
            </div>
            <!-- Traditional tech stack tab -->
            <div v-else>
               <div v-for="group in tabs.find(t => t.key === 'ttraditional-tech-stack').technologies"
                  v-show="group.sub === activeSubtab" :key="group.sub"
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div v-for="tech in group.items" :key="tech.name"
                     class="flex flex-col items-center bg-white rounded-xl border border-gray-200 p-6">
                     <div class="w-16 h-16 mb-4 bg-center bg-no-repeat bg-cover rounded-full"
                        :style="{ backgroundImage: `url('${tech.icon}')` }"></div>
                     <span class="text-base font-semibold text-center">{{ tech.name }}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
