<script setup lang="ts">
useSeoMeta({
  title: 'Portafolio CralpCode',
  ogTitle: 'Carlos López | CralpCode - Desarrollador de Software',
  description: 'Portafolio de Carlos López (CralpCode). Estudiante de Ingeniería en Sistemas y desarrollador especializado en Backend con Java, Spring Boot, Vue.js y Nuxt.',
  ogDescription: 'Portafolio de Carlos López (CralpCode). Desarrollador Backend Java, Spring Boot y Vue.js.',
  ogImage: 'https://avatars.githubusercontent.com/u/96263032?v=4',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <MenuNavBar />

    <UMain>
      <main id="main-content">
        <NuxtPage />
      </main>
    </UMain>

    <PieDePagina />
  </UApp>
</template>
