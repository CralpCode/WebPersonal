<template>

    <div class="w-full h-full mx-auto flex items-center justify-center align-center">
        <div
            class="p-4 flex flex-col items-center justify-center align-center w-11/12 sm:w-4/5 md:w-4/5 lg:w-6xl xl:w-6xl bg-linear-to-br from-green-400/50 to-slate-800/30 backdrop-blur-sm rounded-3xl border border-white/1">
            <MotionGroup preset="slideVisibleBottom" :duration="600">

                <SvgoCralpCodeEmoji
                    class="w-32 h-32 xl:w-48 xl:h-48 lg:w-40 lg:h-40 md:w-16 md:h-16 sm:w-10 sm:h-10 rounded-full object-contain border-6 border-green-400/30 dark:border-green-500/30 shadow-2xl bg-white/5" />


            </MotionGroup>
            <h2 class="text-xs xl:text-6xl lg:text-4xl md:text-2xl sm:text-xs font-bold text-center mt-8">
                Carlos López
            </h2>
            <p class="text-xs xl:text-2xl lg:text-lg md:text-xl sm:text-xs text-center mt-2">
                Estudiante de Ingeniería en Ciencias y Sistemas.
            </p>
            <MotionGroup preset="slideVisibleBottom" :duration="200">
                <div class="flex items-center justify-center align-center mt-2">
                    <Experiencia />
                </div>
            </MotionGroup>
        </div>
    </div>
</template>
