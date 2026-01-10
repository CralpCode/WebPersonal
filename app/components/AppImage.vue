<script setup lang="ts">
defineProps<{
    src: string
    alt?: string
    imgClass?: string
}>()

const isLoading = ref(true)

function onLoad() {
    isLoading.value = false
}
</script>

<template>
    <div class="relative w-full h-full">
        <USkeleton v-if="isLoading" class="absolute inset-0 w-full h-full z-10" :ui="{ rounded: 'rounded-none' }" />

        <img :src="src" :alt="alt" loading="lazy" @load="onLoad" :class="[
            imgClass,
            isLoading ? 'opacity-0' : 'opacity-100'
        ]" class="transition-opacity duration-500 ease-in-out block" />
    </div>
</template>