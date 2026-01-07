<template>
  <UContainer class="sm:p-0! lg:p-0! max-w-full! m-0! overflow-hidden">
    <div class="flex flex-col items-center justify-center align-center gap-2">
      <h2
        class="text-4xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-green-400 to-blue-600 mb-8 md:mb-12"
      >
        Proyectos
      </h2>
      <MotionGroup
        preset="slideVisibleTop"
        :duration="600"
      >
        <ScreenShotsProyectos />
      </MotionGroup>
      <LineaTiempo class="mx-auto" />
    </div>
  </UContainer>
</template>
