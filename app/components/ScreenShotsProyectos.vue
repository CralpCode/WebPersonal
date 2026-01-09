<script setup lang="ts">
const config = useRuntimeConfig()
const getImageUrl = (path: string) => {
  if (path.startsWith('http')) return path
  const cleanPath = path.startsWith('/') ? path.substring(1) : path
  const fullPath = `${config.app.baseURL}${cleanPath}`
  console.log('Image URL generate:', path, '->', fullPath)
  return fullPath
}
</script>

<template>
  <div class="relative w-full md:w-9/12 h-[300px] bg-muted overflow-hidden rounded-lg">
    <ClientOnly>
      <UMarquee pause-on-hover reverse orientation="vertical" :overlay="false" :ui="{
        root: 'hidden md:flex [--duration:40s] absolute w-[345px] -left-[75px] -top-[225px] h-[705px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }">
        <NuxtImg v-for="i in 4" :key="i"
          :src="i === 1 ? '/screens/proyecto1.png' : getImageUrl(`/screens/proyecto${i}.png`)" width="345" height="194"
          format="webp" :alt="`Nuxt UI Screenshot ${i}`"
          class="aspect-video border border-default rounded-lg bg-white" />
      </UMarquee>
    </ClientOnly>
    <ClientOnly>
      <UMarquee pause-on-hover orientation="vertical" :overlay="false" :ui="{
        root: '[--duration:40s] absolute w-[345px] -top-[300px] left-1/2 md:left-[360px] -translate-x-1/2 md:translate-x-0 h-[870px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }">
        <NuxtImg v-for="i in [5, 6, 7, 13, 14]" :key="i" :src="getImageUrl(`/screens/proyecto${i}.png`)" width="345"
          height="194" format="webp" :alt="`Nuxt UI Screenshot ${i}`"
          class="aspect-video border border-default rounded-lg bg-white" />
      </UMarquee>
    </ClientOnly>
    <ClientOnly>
      <UMarquee pause-on-hover reverse orientation="vertical" :overlay="false" :ui="{
        root: 'hidden md:flex [--duration:40s] absolute w-[345px] -top-[225px] left-[765px] h-[795px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30'
      }">
        <NuxtImg v-for="i in [8, 9, 10, 11, 12]" :key="i" :src="getImageUrl(`/screens/proyecto${i}.png`)" width="345"
          height="194" format="webp" :alt="`Nuxt UI Screenshot ${i}`"
          class="aspect-video border border-default rounded-lg bg-white" />
      </UMarquee>
    </ClientOnly>
  </div>
</template>
