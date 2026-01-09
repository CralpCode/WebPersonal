<script setup lang="ts">
import { techConfig } from '@/utils/techConfig'

interface Project {
  label: string
  icon: string
  description: string
  image: string
  to: string
  technologies: string[]
  defaultOpen: boolean | true
  isOpen: boolean | true
  categories: string[]
}

interface TimelineItem {
  date: string
  icon: string
  title: string
  description: string
  projects: Project[]
  isOpen: boolean
}

const activeCategory = ref('Relevantes')
const categories = computed(() => {
  const allCategories = timelineItems.value.flatMap(item =>
    item.projects.flatMap(project => project.categories)
  )
  const uniqueCategories = ['Todos', ...new Set(allCategories)]
  return uniqueCategories
})
const isDropdownOpen = ref(false)
const selectCategory = (category: string) => {
  activeCategory.value = category
  isDropdownOpen.value = false
}

const timelineItems = ref<TimelineItem[]>([
  {
    date: '2025',
    title: 'Fullstack & Arquitectura Moderna',
    icon: 'i-lucide-layers',
    description: 'Desarrollo de aplicaciones seguras y contenerizadas.',
    isOpen: true,
    projects: [
      {
        label: 'App de Notas FullStack',
        icon: 'i-lucide-sticky-note',
        description: 'Aplicación de notas simples con autenticación JWT y despliegue contenerizado.',
        image: '/images/Notas.png',
        to: 'https://github.com/CralpCode/AppNotasFullStack',
        technologies: ['Vue', 'NestJS', 'Docker', 'Nginx', 'MySQL'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Fullstack', 'Frontend', 'Backend', 'Docker', 'MySQL', 'NestJS', 'Vue', 'TypeScript', 'Personal']
      },
      {
        label: 'Prueba Técnica E-Commerce',
        icon: 'i-lucide-shopping-bag',
        description: 'Prueba técnica para un E-Commerce sencilla, listar productos',
        image: '/images/PruebaTecnica.png',
        to: 'https://github.com/cralpcode/pruebatecnica-frontend',
        technologies: ['Vue', 'Vuetify', 'NestJS', 'TypeScript'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Fullstack', 'Frontend', 'Backend', 'NestJS', 'Vue', 'TypeScript', 'MySQL', 'Personal']
      },
      {
        label: 'Web Feria Tecnológica',
        icon: 'i-lucide-monitor',
        description: 'Portal informativo responsive para evento universitario de reciclaje.',
        image: '/images/FeriaTecnologicaBioplastico.png',
        to: 'https://github.com/117CarlosCoder/Feria_Tecnologica_Plastico_Reciclable',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Universidad']
      },
      {
        label: 'Estación Meteorológica Web',
        icon: 'i-lucide-cloud-sun',
        description: 'Dashboard visual para la lectura de sensores climáticos en tiempo real.',
        image: '/images/CajaMeteorologica.png',
        to: 'https://github.com/117CarlosCoder/Pagina-Caja-Metorologica-Arqui-2',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Universidad', 'Hardware']
      }
    ]
  },
  {
    date: '2024',
    title: 'Sistemas Distribuidos & Hardware',
    icon: 'i-lucide-server',
    description: 'Desarrollo de sistemas completos y control de hardware con software.',
    isOpen: true,
    projects: [
      {
        label: 'Sistema de Empleos IPC2',
        icon: 'i-lucide-layout-panel-top',
        description: 'Plataforma Fullstack. Frontend SPA en Angular consumiendo API REST pura en Java con Servlets.',
        image: '/images/Empleos.png',
        to: 'https://github.com/117CarlosCoder/Proyecto_Final',
        technologies: ['Angular', 'Java', 'Servlets', 'MySQL'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Fullstack', 'Frontend', 'Backend', 'Universidad', 'Angular', 'Java', 'MySQL']
      },
      {
        label: 'GraFiles',
        icon: 'i-lucide-folder-archive',
        description: 'Sistema Empresarial Fullstack manejador de archivos en la nube con vue y springboot.',
        image: '/images/GraFiles.png',
        to: 'https://github.com/117CarlosCoder/Proyecto_Final_GraFiles',
        technologies: ['Vue', 'SpringBoot', 'Docker', 'MongoDB'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Fullstack', 'Frontend', 'Backend', 'Universidad', 'Vue', 'SpringBoot', 'TypeScript', 'Docker', 'MongoDB']
      },
      {
        label: 'Arduino Python Controller',
        icon: 'i-lucide-remote-control',
        description: 'Automatización de sistemas Linux y Windows mediante control IR y scripts de Python vinculados a Arduino.',
        image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1000&auto=format&fit=crop',
        to: 'https://github.com/117CarlosCoder/ArduinoPython',
        technologies: ['Python', 'Arduino', 'Linux', 'Bash'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Hardware', 'Universidad', 'Python', 'Arduino', 'Linux', 'Bash']
      },
      {
        label: 'TravelMapGT (Grafos)',
        icon: 'i-lucide-map-pin',
        description: 'Motor de rutas óptimas utilizando algoritmos de grafos y visualización dinámica con Graphviz.',
        image: '/images/TravelMap.png',
        to: 'https://github.com/117CarlosCoder/TravelMapGT',
        technologies: ['Java', 'Swing', 'Estructuras de Datos', 'Maven'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Backend', 'Universidad', 'Java']
      },
      {
        label: 'Gestión BD Videojuegos',
        icon: 'i-lucide-database',
        description: 'Sistema de gestión de inventario con lógica de negocio compleja en base de datos (Triggers, Funciones, Procedimientos).',
        image: '/images/SucursalVideoJuegos.png',
        to: 'https://github.com/117CarlosCoder/Aplicacion_web_Archivos',
        technologies: ['SpringBoot', 'Vue', 'PostgreSQL'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Fullstack', 'Frontend', 'Backend', 'Universidad', 'SpringBoot', 'TypeScript', 'Vue', 'PostgreSQL']
      }
    ]
  },
  {
    date: '2023',
    title: 'Ingeniería de Software & Java',
    icon: 'i-lucide-code',
    description: 'Compiladores, algoritmos avanzados y aplicaciones de escritorio.',
    isOpen: true,
    projects: [
      {
        label: 'Compilador Pascal',
        icon: 'i-lucide-file-code',
        description: 'Desarrollo de un compilador  (Léxico, Sintáctico, Semántico) desde cero.',
        image: '/images/PascalCompiler.png',
        to: 'https://github.com/117CarlosCoder/PascalCompiler',
        technologies: ['Java', 'JFLEX', 'JCUP'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Backend', 'Universidad', 'Java']
      },
      {
        label: 'Solitario en Consola',
        icon: 'i-lucide-terminal',
        description: 'Implementación de estructuras de datos y lógica de juego en C++.',
        image: '/images/Solitario.png',
        to: 'https://github.com/117CarlosCoder/Solitario',
        technologies: ['C++', 'Estructuras de Datos'],
        isOpen: true,
        defaultOpen: true,
        categories: ['C++', 'Backend', 'Universidad']
      },
      {
        label: 'Encriptador de Texto',
        icon: 'i-lucide-lock',
        description: 'Herramienta web para cifrado de mensajes (Challenge Alura Oracle).',
        image: 'https://cralpcode.github.io/Encriptador-de-Mensajes/images/Encriptador.png',
        to: 'https://github.com/CralpCode/Encriptador-de-Mensajes',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'JavaScript', 'Personal']
      }
    ]
  },
  {
    date: '2022',
    title: 'LaunchX - Frontend & Maquetación | Backend & APIs REST | Bases de Datos',
    icon: 'i-simple-icons-microsoft',
    description: 'Bootcamp de desarrollo web con proyectos de React, APIs REST y Bases de Datos.',
    isOpen: true,
    projects: [
      {
        label: 'Abogabot (Maquetación)',
        icon: 'i-lucide-bot',
        description: 'Diseño responsive para sitio de servicios legales.',
        image: 'https://raw.githubusercontent.com/CralpCode/Practica-1-de-Intro-a-Frontend/main/Abogabot/Formulario.png',
        to: 'https://github.com/CralpCode/Practica-1-de-Intro-a-Frontend',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Personal']
      },
      {
        label: 'Taconauta Landing',
        icon: 'i-lucide-rocket',
        description: 'Pagina Sencilla y creativa.',
        image: 'https://raw.githubusercontent.com/CralpCode/CralpCode-Practica-2-de-Intro-a-Frontend/main/assets/Taconautapage.png',
        to: 'https://github.com/CralpCode/CralpCode-Practica-2-de-Intro-a-Frontend',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Personal']
      },
      {
        label: 'Vacunación Info',
        icon: 'i-lucide-syringe',
        description: 'Sitio informativo maquetado para campañas de salud.',
        image: 'https://raw.githubusercontent.com/CralpCode/Practica-3-de-Intro-a-Frontend/main/assets/Vacunapage.png',
        to: 'https://github.com/CralpCode/Practica-3-de-Intro-a-Frontend',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Personal']
      },
      {
        label: 'Pokédex (Vanilla JS)',
        icon: 'i-lucide-search',
        description: 'Interfaz de búsqueda consumiendo API externa con JS puro.',
        image: 'https://raw.githubusercontent.com/CralpCode/Practica-4-de-Intro-a-Frontend/main/assets/pokedex.png',
        to: 'https://github.com/CralpCode/Practica-4-de-Intro-a-Frontend',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'JavaScript', 'Personal']
      },
      {
        label: 'Pokédex App (React)',
        icon: 'i-lucide-gamepad-2',
        description: 'Single Page Application (SPA) interactiva con React.',
        image: '/images/PokedexReact.png',
        to: 'https://github.com/CralpCode/Tarea-2-Pokedex-REACT',
        technologies: ['React', 'JavaScript', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'React', 'JavaScript', 'Personal']
      },
      {
        label: 'Chat Backend & MongoDB',
        icon: 'i-lucide-message-square',
        description: 'Sistema de chat con persistencia NoSQL ',
        image: '/images/ChatMongo.png',
        to: 'https://github.com/CralpCode/Tarea-6-Chat-MongoDB',
        technologies: ['NodeJS', 'Express', 'MongoDB', 'Jest'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Relevantes', 'Backend', 'NodeJS', 'Express', 'React', 'MongoDB', 'Jest', 'Personal']
      },
      {
        label: 'Servicio API REST',
        icon: 'i-lucide-server-cog',
        description: 'Backend fundamental para operaciones CRUD con Express.',
        image: '/images/API.png',
        to: 'https://github.com/CralpCode/Tarea-5-API-REST',
        technologies: ['NodeJS', 'Express'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Backend', 'NodeJS', 'Express', 'Personal']
      },
      {
        label: 'Calculadora Web',
        icon: 'i-lucide-calculator',
        description: 'Aplicación de lógica de programación con JavaScript Vanilla.',
        image: '/images/CalculadoraJs.png',
        to: 'https://github.com/CralpCode/Tarea-1-Calculadora-JS',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'JavaScript', 'Personal']
      },
      {
        label: 'Colección Juegos Java',
        icon: 'i-lucide-dice-5',
        description: 'Juegos con interfaz gráfica Swing.',
        image: '/images/DamasyHanoi.png',
        to: 'https://github.com/cralpcode/proyectofinal',
        technologies: ['Java', 'Swing'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Java', 'Universidad']
      },
      {
        label: 'Juego de Laberinto',
        icon: 'i-lucide-map',
        description: 'Juego de lógica y recorrido desarrollado en Java puro.',
        image: '/images/Laberinto.png',
        to: 'https://github.com/cralpcode/juego_de_-laberinto_en_java',
        technologies: ['Java'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Java', 'Universidad']
      }
    ]
  },
  {
    date: '2020',
    title: 'Inicios - FreeCodeCamp',
    icon: 'i-simple-icons-freecodecamp',
    description: 'Fundamentos del desarrollo web y certificación Responsive Design.',
    isOpen: true,
    projects: [
      {
        label: 'Mi Primer Portafolio',
        icon: 'i-lucide-layout',
        description: 'Portafolio personal para certificación web.',
        image: '/images/portafolio1.png',
        to: 'https://codepen.io/CRALPCODE/full/RwrXLQa',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Personal', 'Relevantes']
      },
      {
        label: 'Tribute Page',
        icon: 'i-lucide-zap',
        description: 'Maquetación básica.',
        image: 'https://i.pinimg.com/564x/f8/8d/c1/f88dc1c3a070356c6f5ea338ad364622.jpg',
        to: 'https://codepen.io/CRALPCODE/full/WNrmwJV',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Personal']
      },
      {
        label: 'Survey Form',
        icon: 'i-lucide-clipboard-list',
        description: 'Formulario de encuesta temático para e-commerce.',
        image: 'https://i.pinimg.com/564x/6d/35/9e/6d359efa967543b6c85d3ecfdad90562.jpg',
        to: 'https://codepen.io/CRALPCODE/full/bGExMOV',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Personal']
      },
      {
        label: 'Product Landing Page',
        icon: 'i-lucide-monitor-play',
        description: 'Pagina promocional para cursos de inglés.',
        image: 'https://i.pinimg.com/564x/66/51/5e/66515ee7f63265183d27d531e5900203.jpg',
        to: 'https://codepen.io/CRALPCODE/full/wvMQXqa',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Personal']
      },
      {
        label: 'Documentación Técnica',
        icon: 'i-lucide-book-text',
        description: 'Página de documentación con navegación lateral fija.',
        image: 'https://i.pinimg.com/564x/26/01/20/2601208eb8154367a833a4c56ce1820d.jpg',
        to: 'https://codepen.io/CRALPCODE/full/dyGrMYR',
        technologies: ['HTML', 'CSS'],
        isOpen: true,
        defaultOpen: true,
        categories: ['Frontend', 'Personal']
      }
    ]
  }
])

const toggleProject = (timelineItem: TimelineItem) => {
  timelineItem.isOpen = !timelineItem.isOpen

  const projects = document.getElementById('item-projects-' + timelineItem.date)
  if (!projects) return

  if (timelineItem.isOpen) {
    projects.classList.add('hidden')

    timelineItem.projects.forEach((project) => {
      project.isOpen = false
    })
  } else {
    projects.classList.remove('hidden')

    timelineItem.projects.forEach((project) => {
      project.isOpen = true
    })
  }
}

const filteredTimeline = computed(() => {
  if (activeCategory.value === 'Todos') {
    return timelineItems.value
  }

  return timelineItems.value.map((item) => {
    const matchingProjects = item.projects.filter(project =>
      project.categories.includes(activeCategory.value)
    )
    return {
      ...item,
      projects: matchingProjects
    }
  }).filter(item => item.projects.length > 0)
})

const config = useRuntimeConfig()
const getImageUrl = (path: string) => {
  if (path.startsWith('http')) return path
  const cleanPath = path.startsWith('/') ? path.substring(1) : path
  return `${config.app.baseURL}${cleanPath}`
}

const emit = defineEmits<{
  (e: 'select', category: string): void
}>()
</script>

<template>
  <div
    class="w-full max-w-full lg:max-w-6xl md:max-w-3xl xs:max-w-full sm:max-w-full md:mx-auto py-10 px-4 overflow-x-hidden">
    <div class="relative w-full max-w-xs mx-auto mb-10 z-30">
      <button id="category-menu-button" aria-haspopup="true" :aria-expanded="isDropdownOpen"
        aria-controls="category-dropdown-menu"
        class="w-full flex items-center justify-between px-4 py-3 bg- backdrop-blur-sm border border-green-500/30 rounded-xl text-gray-200 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-300 group"
        @click="isDropdownOpen = !isDropdownOpen">
        <div class="flex items-center gap-2">
          <span class="text-gray-500 text-xs uppercase tracking-wider font-semibold">Filtrar Proyectos
            por:</span>
          <span class="text-green-400 font-bold">{{ activeCategory }}</span>
        </div>

        <Icon name="i-lucide-chevron-down"
          class="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-transform duration-300"
          :class="{ 'rotate-180': isDropdownOpen }" />
      </button>

      <Transition enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0 -translate-y-2"
        enter-to-class="transform scale-100 opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100 translate-y-0"
        leave-to-class="transform scale-95 opacity-0 -translate-y-2">
        <div v-if="isDropdownOpen" id="category-dropdown-menu" role="listbox" aria-labelledby="category-menu-button"
          class="absolute top-full left-0 right-0 mt-2 bg-old-neutral-800 border border-green-500/30 rounded-xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto custom-scrollbar">
          <button v-for="category in categories" :key="category"
            class="w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b border-gray-800 last:border-0 hover:bg-green-500/10 hover:text-green-400 flex items-center justify-between"
            :class="activeCategory === category ? 'text-green-400 bg-green-500/5' : 'text-gray-400'"
            @click="selectCategory(category)">
            {{ category }}

            <Icon v-if="activeCategory === category" name="i-lucide-check" class="w-4 h-4 text-green-500" />
          </button>
        </div>
      </Transition>

      <div v-if="isDropdownOpen" class="fixed inset-0 z-[-1]" @click="isDropdownOpen = false" />
    </div>
    <div class="relative border-l border-green-200 dark:border-green-800 ml-3 space-y-12">
      <div v-for="(item, index) in filteredTimeline" :key="index" class="relative pl-8">
        <div
          class="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-white dark:border-gray-900 bg-green-500 ring-4 ring-green-100 dark:ring-green-900" />

        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <span
            class="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded">
            {{ item.date }}
          </span>
        </div>

        <button :aria-expanded="item.isOpen" :aria-controls="'item-projects-' + item.date"
          class="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 dark:hover:bg-green-800/50 transition-colors rounded-2xl border border-green-200 dark:border-green-800"
          @click="toggleProject(item)">
          <div class="flex items-center gap-3 justify-between overflow-hidden w-full">
            <div class="flex justify-between gap-3">
              <Icon :name="item.icon || ''" class="text-xl shrink-0 text-gray-500" />
              <span class="font-semibold text-gray-900 dark:text-white truncate">
                {{ item.title || '' }}
              </span>
            </div>
            <div>
              <Icon name="i-lucide-chevron-down" class="w-5 h-5 text-gray-400 transition-transform duration-300"
                :class="{ 'rotate-180': !item.isOpen }" />
            </div>
          </div>
        </button>

        <div v-show="item.isOpen" :id="'item-projects-' + item.date"
          class="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 transition-all duration-300">
          <div v-for="(project, pIndex) in item.projects" :key="pIndex">
            <div
              class="bg-gray-50 dark:bg-green-900/50 rounded-xl border border-gray-200 dark:border-green-800 overflow-hidden transition-all duration-300 h-full">
              <div class="border-t border-gray-200 dark:border-green-800 h-full">
                <div class="p-4 space-y-4 h-full flex flex-col">
                  <a :href="project.to" target="_blank" class="block group grow">
                    <div
                      class="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 dark:border-green-800 mb-3">
                      <NuxtImg :src="getImageUrl(project.image)" :alt="project.label" format="webp"
                        sizes="100vw sm:50vw md:400px"
                        class="object-fill w-full h-full transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3
                      class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
                      {{ project.label }}
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {{ project.description }}
                    </p>
                  </a>

                  <div class="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-green-800 mt-auto">
                    <span class="text-xs font-semibold text-gray-500 mr-1 self-center">Stack:</span>
                    <span v-for="techName in project.technologies" :key="techName"
                      class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ring-1 ring-inset"
                      :class="techConfig[techName]?.class">
                      <Icon v-if="techConfig[techName]" :name="techConfig[techName].icon" aria-hidden="true"
                        class="w-3.5 h-3.5 bg-current!" />
                      {{ techName }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
