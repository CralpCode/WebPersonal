<script setup>
const socialLinks = [
  {
    icon: 'i-simple-icons-github',
    to: 'https://github.com/CralpCode',
    label: 'GitHub'
  },
  {
    icon: 'i-simple-icons-codepen',
    to: 'https://codepen.io/CRALPCODE',
    label: 'CodePen'
  },

  {
    icon: 'i-simple-icons-linkedin',
    to: 'https://www.linkedin.com/in/carlos-l%C3%B3pez-2402447b/',
    label: 'LinkedIn'
  },

  {
    icon: 'i-lucide-award',
    to: 'https://app.aluracursos.com/user/clp64413',
    label: 'Alura'
  },

  {
    icon: 'i-simple-icons-platzi',
    to: 'https://platzi.com/p/Calincr/',
    label: 'Platzi'
  }
]
</script>

<template>
  <UContainer class="py-4 max-w-full! m-0! p-4! lg:p-0!">
    <div
      class="w-full mt-4 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-0 align-items-center justify-items-start min-h-screen h-full">
      <div v-motion-slide-visible-left
        class="flex flex-col items-center justify-center align-center w-full  xl:h-5/6 lg:h-5/6 md:h-fit sm:h-fit">
        <UPageCard title="" description="" icon="" spotlight
          class="w-11/12 h-full! place-items-center place-content-center rounded-3xl md:block sm:block">
          <div>
            <UBadge label="Disponible para trabajar" color="primary" variant="subtle" size="xl" />
          </div>

          <div>
            <h1 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Hola, soy <br>
              Carlos López <span class="text-primary">"CralpCode"</span>
            </h1>
            <p class="text-lg text-gray-500 dark:text-gray-400 mt-2">
              Estudiante de Ingeniería en Ciencias y Sistemas.
            </p>
          </div>

          <div>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">
              Tech Stack & Herramientas:
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge label="Java" icon="i-simple-icons-openjdk"
                class="bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 ring-1 ring-inset ring-orange-500/20" />

              <UBadge label="Spring Boot" icon="i-simple-icons-springboot"
                class="bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-500/20" />

              <UBadge label="Vue.js" icon="i-simple-icons-vuedotjs"
                class="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20" />

              <UBadge label="Nuxt" icon="i-simple-icons-nuxtdotjs"
                class="bg-teal-50 dark:bg-teal-500/15 text-teal-700 dark:text-teal-300 ring-1 ring-inset ring-teal-500/30 font-bold" />

              <UBadge label="Tailwind" icon="i-simple-icons-tailwindcss"
                class="bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-1 ring-inset ring-sky-500/20" />

              <UBadge label="TypeScript" icon="i-simple-icons-typescript"
                class="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-500/20" />
            </div>
          </div>

          <p class="text-gray-600 dark:text-gray-300">
            Desarrollador de Software especializado en backend con Java y Spring Boot. Cuento con 2 años de
            experiencia
            práctica en el desarrollo de aplicaciones web, adquirida a través de proyectos universitarios y
            una
            pasantía profesional de 3 meses en la que desarrollé la API (NestJS) para un MVP.
            Competente en el diseño de bases de datos (SQL/NoSQL) y el desarrollo de interfaces con Vue.js y
            Angular.
          </p>
          <ClientOnly>
            <UMarquee pause-on-hover class="hidden xl:inline-flex! lg:inline-flex! md:hidden! sm:hidden!">
              <NuxtLink v-for="link in socialLinks" :key="link.icon" :to="link.to" :aria-label="link.label"
                target="_blank" class="mx-4 block">
                <UIcon :name="link.icon"
                  class="size-10 shrink-0 text-gray-500 hover:text-primary transition-colors duration-200" />
              </NuxtLink>
            </UMarquee>
          </ClientOnly>
        </UPageCard>
      </div>
      <div v-motion-slide-visible-right
        class="flex flex-col items-center justify-center align-center w-full sm:w-11/12 md:w-11/12 lg:w-full xl:w-full xl:h-5/6 lg:h-5/6 mt-4 xl:mt-0 lg:mt-0 md:mt-4 sm:mt-4">
        <div
          class="w-full h-full sm:w-11/12 md:w-11/12 lg:w-5/4 xl:w-11/12 p-4 md:p-4 sm:p-4 flex flex-col items-center justify-center align-center bg-linear-to-br from-green-600/20 to-slate-800/10 backdrop-blur-sm rounded-3xl border border-white/1">
          <SvgoCralpCodeEmoji
            class="w-48 h-48 sm:w-36 sm:h-36 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-48 xl:h-48 rounded-full object-contain border-8 border-green-400/30 dark:border-green-500/30 shadow-2xl bg-white/5" />

          <h2 class="text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-center mt-8">
            Estudiante de Ingeniería en Ciencias y Sistemas.
          </h2>
        </div>
      </div>
    </div>
  </UContainer>
</template>
