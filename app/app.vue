<script setup lang="ts">
useSeoMeta({
  title: 'Carlos López | CralpCode - Desarrollador Backend Java & Spring Boot',
  ogTitle: 'Carlos López | CralpCode - Desarrollador Backend',
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
      <NuxtPage />
    </UMain>

    <PieDePagina />
  </UApp>
</template>
