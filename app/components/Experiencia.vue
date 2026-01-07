<script setup lang="ts">
import { techConfig } from '@/utils/techConfig'

const experiencia = ref([
    {
        rol: 'Desarrollador Back-end',
        compania: 'Hyperreality Company',
        tipo: 'Prácticas',
        fecha: 'Jun. 2025 - Sep. 2025',
        ubicacion: 'Guatemala (Remoto)',
        descripcion: 'Desarrollo de API RESTful para MVP usando NestJS y MongoDB. Implementación de lógica de negocio del servidor y endpoints clave.',
        stack: ['NestJS', 'MongoDB', 'RESTAPI'],
        color: ['']
    }
])


const educacion = ref([
    {
        titulo: 'Universidad de San Carlos, Centro Unvieristario de Occidente',
        institucion: 'Facultad de Ingeniería',
        tipo: 'Ingeniería en Ciencias y Sistemas ',
        fecha: 'Feb. 2020 - Actualidad',
        ubicacion: 'Guatemala, Quetzaltenango',
        descripcion: 'Mi formación en la USAC ha sido un viaje intensivo desde los fundamentos hasta la especialización, comenzando con la construcción de aplicaciones web con Java EE (JSP/Servlets) y JDBC , integrando frontends modernos con Angular. Tambien la realización de proyectos como la construcción de un compilador completo y la resolución de problemas de concurrencia en C. El diseño de sistemas transaccionales complejos con Spring Boot y PostgreSQL, la educación se centró en aplicar principios de ingeniería para construir soluciones de software robustas y eficientes.',
        stack: ['Java', 'C', 'JSP', 'Servlets', 'JDBC', 'JFLEX', 'JCUP', 'Angular', 'Vue', 'SpringBoot', 'NestJS', 'MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'RESTAPI'],
        color: ['']
    }
])
</script>

<template>
    <div
        class="w-full sm:w-full md:w-11/12 lg:w-full xl:w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-6xl xl:max-w-6xl mx-auto py-10 px-4">

        <h2
            class="text-3xl xl:text-3xl lg:text-3xl md:text-sm sm:text-xs font-bold mb-8 text-center bg-clip-text text-transparent bg-linear-to-r from-green-400 to-blue-600">
            Experiencia Laboral
        </h2>

        <div class="space-y-6">
            <div v-for="(job, index) in experiencia" :key="index"
                class="group relative sm:block p-6 bg-white dark:bg-gray-900/50 rounded-2xl border sm:border-none border-gray-200 dark:border-gray-800 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div
                    class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />

                <div class="relative flex flex-col sm:flex-row justify-between items-start gap-4">

                    <div>
                        <h3
                            class="text-xl xl:text-xl lg:text-xl md:text-sm sm:text-xs font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            {{ job.rol }}
                        </h3>

                        <div class="flex items-center gap-2 mt-1 text-sm">
                            <span class="font-medium text-blue-600 dark:text-blue-400">{{ job.compania }}</span>
                            <span class="text-gray-300 dark:text-gray-700">•</span>
                            <span class="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                <UIcon name="i-lucide-map-pin" class="w-3 h-3" />
                                {{ job.ubicacion }}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-row sm:flex-col items-center sm:items-end gap-2 text-right">
                        <UBadge :label="job.tipo" color="primary" variant="subtle" size="xl" lg:size="lg" md:size="md"
                            sm:size="sm" />
                        <span class="text-xs font-mono text-gray-400">{{ job.fecha }}</span>
                    </div>
                </div>

                <p
                    class="relative mt-4 text-gray-600 dark:text-gray-300 text-lg xl:text-lg lg:text-lg md:text-sm sm:text-xs leading-relaxed">
                    {{ job.descripcion }}
                </p>

                <div class="relative mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span
                        class="text-xl xl:text-xl lg:text-xl md:text-sm sm:text-xs text-gray-400 self-center mr-1">Stack:</span>
                    <span v-for="techName in job.stack" :key="techName"
                        class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ring-1 ring-inset"
                        :class="techConfig[techName]?.class">

                        <Icon v-if="techConfig[techName]" :name="techConfig[techName].icon"
                            class="w-3.5 h-3.5 bg-current!" />

                        {{ techName }}
                    </span>
                </div>

            </div>
        </div>

        <h2
            class="text-3xl xl:text-3xl lg:text-3xl md:text-sm sm:text-xs font-bold mb-8 mt-18 text-center bg-clip-text text-transparent bg-linear-to-r from-green-400 to-blue-600">
            Educación
        </h2>

        <div class="space-y-6">
            <div v-for="(education, index) in educacion" :key="index"
                class="group relative p-6 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div
                    class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />

                <div class="relative flex flex-col sm:flex-row justify-between items-start gap-4">

                    <div>
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            {{ education.titulo }}
                        </h3>

                        <div class="flex items-center gap-2 mt-1 text-sm">
                            <span class="font-medium text-blue-600 dark:text-blue-400">{{ education.institucion
                                }}</span>
                            <span class="text-gray-300 dark:text-gray-700">•</span>
                            <span class="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                <UIcon name="i-lucide-map-pin" class="w-3 h-3" />
                                {{ education.ubicacion }}
                            </span>
                        </div>
                    </div>

                    <div
                        class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center gap-2 text-right">
                        <UBadge :label="education.tipo" color="primary" variant="subtle" size="md" sm:size="sm"
                            md:size="md" lg:size="lg" xl:size="xl" />
                        <span class="text-xs font-mono text-gray-400">{{ education.fecha }}</span>
                    </div>
                </div>

                <p class="relative mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {{ education.descripcion }}
                </p>

                <div class="relative mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span class="text-xl text-gray-400 self-center mr-1">Stack:</span>
                    <span v-for="techName in education.stack" :key="techName"
                        class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ring-1 ring-inset"
                        :class="techConfig[techName]?.class">

                        <Icon v-if="techConfig[techName]" :name="techConfig[techName].icon"
                            class="w-3.5 h-3.5 bg-current!" />

                        {{ techName }}
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>