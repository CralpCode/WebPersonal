<script setup lang="ts">
import { techConfig } from '@/utils/techConfig'

const certifications = ref([
  {
    title: 'Certificación Oracle Cloud Infrastructure',
    issuer: 'Oracle',
    date: '2025',
    icon: 'i-simple-icons-oracle',
    color: 'text-red-500 bg-red-500/10 ring-red-500/20',
    skills: ['Cloud', 'Infrastructure'],
    credentialUrl: 'https://app.aluracursos.com/certificate/b6659256-cfa9-478f-9424-2c3798aef99a?lang'
  },
  {
    title: 'Linux Essentials / Linux I',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: 'i-simple-icons-linux',
    color: 'text-yellow-500 bg-yellow-500/10 ring-yellow-500/20',
    skills: ['Command Line', 'Bash', 'System Admin'],
    credentialUrl: 'https://www.credly.com/badges/7a168044-4aa7-46fb-997a-866142478043'
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    date: '2025',
    icon: 'i-simple-icons-cisco',
    color: 'text-blue-500 bg-blue-500/10 ring-blue-500/20',
    skills: ['Redes', 'Protocolos', 'Arquitectura'],
    credentialUrl: 'https://www.credly.com/badges/458856f3-a1a8-486b-b0d2-5e3baa9a6315'
  },
  {
    title: 'EFSET A2 Inglés',
    issuer: 'EFSET',
    date: '2025',
    icon: 'i-lucide-languages',
    color: 'text-fuchsia-500 bg-fuchsia-500/10 ring-fuchsia-500/20',
    skills: ['Inglés'],
    credentialUrl: 'https://cert.efset.org/u6QvGJ'
  },
  {
    title: 'Diploma del Curso de Fundamentos de Bases de Datos',
    issuer: 'Platzi',
    date: '2025',
    icon: 'i-simple-icons-platzi',
    color: 'text-green-500 bg-green-500/10 ring-green-500/20',
    skills: ['Bases de Datos'],
    credentialUrl: 'https://platzi.com/p/Calincr/curso/11973-bases-datos/diploma/detalle/'
  },
  {
    title: 'Desarrollo de aplicaciones web con frameworks y conexión a base de datos',
    issuer: 'INTECAP',
    date: '2025',
    icon: 'i-lucide-graduation-cap',
    color: 'text-blue-500 bg-blue-500/10 ring-blue-500/20',
    skills: ['Cloud', 'Infrastructure'],
    credentialUrl: 'https://www.linkedin.com/in/carlos-l%C3%B3pez-2402447b/details/certifications/1749315614975/single-media-viewer?type=DOCUMENT&profileId=ACoAABDxaFABIZtKXcs9OsUnzTRbOr-RGGTxt6s&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BFm7VtstlRP61AMyoHDFcNQ%3D%3D'
  },
  {
    title: 'Especialización Java & Spring Boot',
    issuer: 'Oracle & Alura Latam',
    date: '2023',
    icon: 'i-simple-icons-springboot',
    color: 'text-green-600 bg-green-600/10 ring-green-600/20',
    skills: ['Spring MVC', 'API REST', 'JPA/Hibernate'],
    credentialUrl: 'https://app.aluracursos.com/degree/certificate/7d382a76-6f4f-485c-853a-41b95ddd5dfe'
  },
  {
    title: 'Programa Oracle Next Education F2 T5 Back-end',
    issuer: 'Alura Latam & Oracle',
    date: '2024',
    icon: 'i-simple-icons-oracle',
    color: 'text-red-500 bg-red-500/10 ring-red-500/20',
    skills: ['Java', 'Lógica', 'Desarrollo Personal'],
    credentialUrl: 'https://app.aluracursos.com/program/certificate/e26cdc9c-c51d-4391-8fa6-8bb625b43aa8'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    icon: 'i-simple-icons-microsoft',
    color: 'text-blue-500 bg-blue-500/10 ring-blue-500/20',
    skills: ['Cloud', 'Infrastructure'],
    credentialUrl: 'https://www.credly.com/badges/493ac7d6-fb70-4140-aa74-dde764a96720/linked_in_profile'
  },
  {
    title: 'Fundamentos de Ingeniería de Software',
    issuer: 'Platzi',
    date: '2022',
    icon: 'i-simple-icons-platzi',
    color: 'text-green-500 bg-green-500/10 ring-green-500/20',
    skills: ['Git & GitHub', 'Estructuras de Datos', 'Matemáticas', 'Bases de Datos'],
    credentialUrl: 'https://platzi.com/p/Calincr/curso/1098-ingenieria2017/diploma/detalle/'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2020',
    icon: 'i-simple-icons-freecodecamp',
    color: 'text-white dark:text-gray-200 bg-gray-800 dark:bg-gray-700 ring-gray-600',
    skills: ['HTML5', 'CSS3', 'Accesibilidad'],
    credentialUrl: 'https://www.freecodecamp.org/certification/fccae8f6566-1edb-45cb-84ab-2e501971a59f/responsive-web-design'
  },
  {
    title: 'Perfil Platzi (+35 certificados)',
    issuer: 'Platzi',
    date: '',
    icon: 'i-simple-icons-platzi',
    color: 'text-white dark:text-green-200 bg-green-800 dark:bg-green-700 ring-green-600',
    skills: ['Git & GitHub', 'JavaScript Profundo', 'Matemáticas', 'Bases de Datos', 'Terminal'],
    credentialUrl: 'https://platzi.com/p/Calincr/'
  }
])
</script>

<template>
  <h2
    id="certificados"
    class="text-4xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-green-400 to-blue-600 mb-8 md:mb-12"
  >
    Certificados
  </h2>
  <div
    class="w-11/12 sm:w-11/12 md:w-xl lg:w-6xl xl:w-6xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto mb-10"
  >
    <UCard
      v-for="(cert, index) in certifications"
      :key="index"
      class="group hover:ring-2 hover:ring-green-500/50 transition-all duration-300  border border-gray-200 dark:border-gray-800 backdrop-blur-sm"
    >
      <template #header>
        <div class="flex items-start gap-4">
          <div
            class="h-14 w-14 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ring-1"
            :class="cert.color"
          >
            <Icon
              :name="cert.icon"
              class="text-3xl"
            />
          </div>

          <div>
            <h3 class="font-bold text-sm text-gray-900 dark:text-white leading-tight mb-1">
              {{ cert.title }}
            </h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {{ cert.issuer }}
            </p>
          </div>
        </div>
      </template>

      <div class="space-y-4">
        <div class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <Icon
            name="i-lucide-calendar"
            class="w-3.5 h-3.5"
          />
          <span>{{ cert.date }}</span>
        </div>

        <div class="flex flex-wrap gap-1.5">
          <span
            class="text-xl xl:text-md lg:text-md md:text-sm sm:text-xs text-gray-400 self-center mr-1"
          >Stack:</span>
          <span
            v-for="techName in cert.skills"
            :key="techName"
            class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ring-1 ring-inset"
            :class="techConfig[techName]?.class"
          >

            <Icon
              v-if="techConfig[techName]"
              :name="techConfig[techName].icon"
              class="w-3.5 h-3.5 bg-current!"
            />

            {{ techName }}
          </span>
        </div>
      </div>

      <template
        v-if="cert.credentialUrl"
        #footer
      >
        <UButton
          :to="cert.credentialUrl"
          target="_blank"
          size="xs"
          variant="ghost"
          color="primary"
          block
          class="hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-colors"
        >
          <template #leading>
            <Icon
              name="i-lucide-external-link"
              class="w-4 h-4"
            />
          </template>
          Ver Credencial
        </UButton>
      </template>
    </UCard>
  </div>
</template>
