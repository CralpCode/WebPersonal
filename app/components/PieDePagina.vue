<script setup lang="ts">

</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © 2025 CralpCode
      </p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/CralpCode"
        target="_blank"
        aria-label="GitHub"
      />
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://www.linkedin.com/in/carlos-l%C3%B3pez-2402447b/"
        target="_blank"
        aria-label="LinkedIn"
      />
      <UButton
        icon="i-simple-icons-codepen"
        color="neutral"
        variant="ghost"
        to="https://codepen.io/CRALPCODE"
        target="_blank"
        aria-label="CodePen"
      />
      <UButton
        icon="i-lucide-mail"
        color="neutral"
        variant="ghost"
        to="mailto:1.carlosraullopez@gmail.com"
        target="_blank"
        aria-label="Email"
      />
    </template>
  </UFooter>
</template>
