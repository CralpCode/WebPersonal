<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import scrollToSection from '@/utils/smoothScroll'

const mobileMenuOpen = ref(false)

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Inicio',
    icon: 'i-lucide-book-open',
    onClick: () => {
      scrollToSection('#inicio')
      mobileMenuOpen.value = false
    }
  },
  {
    label: 'Proyectos',
    icon: 'i-lucide-briefcase-business',
    onClick: () => {
      scrollToSection('#proyectos')
      mobileMenuOpen.value = false
    }
  },

  {
    label: 'Certificados',
    icon: 'i-lucide-graduation-cap',
    onClick: () => {
      scrollToSection('#certificados')
      mobileMenuOpen.value = false
    }
  },
  {
    label: 'Sobre Mí',
    icon: 'i-lucide-user',
    onClick: () => {
      scrollToSection('#sobre-mi')
      mobileMenuOpen.value = false
    }
  },
  {
    label: 'Contáctame',
    icon: 'i-lucide-mail',
    onClick: () => {
      scrollToSection('#contactame')
      mobileMenuOpen.value = false
    }
  }
])
</script>

<template>
  <UHeader
    v-model:open="mobileMenuOpen"
    :links="items"
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <template #title>
      <div class="font-bold text-xl flex items-center gap-2">
        <SvgoCralpCodeEmoji class="w-10 h-10 rounded-full" />
        <span>CralpCode</span>
      </div>
    </template>

    <UNavigationMenu
      :items="items"
      class="[&_button]:cursor-pointer"
    />

    <template #right>
      <UColorModeButton />

      <UTooltip
        text="Open on GitHub"
        :kbds="['meta', 'G']"
      >
        <UButton
          color="primary"
          variant="ghost"
          to="https://github.com/CralpCode"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="[&_button]:cursor-pointer -mx-2.5"
      />
    </template>
  </UHeader>
</template>
