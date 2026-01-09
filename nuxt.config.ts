import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-svgo',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],

  site: {
    url: 'https://cralpcode.me',
  },

  devtools: {
    enabled: true
  },

  app: {
    baseURL: '/',
    //buildAssetsDir: 'assets',
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'google-site-verification', content: 'googlecf253da01e2936cf' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    }
  },


  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/**': { headers: { 'cache-control': 'public, max-age=86400' } }
  },

  nitro: {
    prerender: {
      routes: [
        '/_ipx/f_webp/screens/proyecto1.png',
        '/_ipx/f_webp/screens/proyecto2.png',
        '/_ipx/f_webp/screens/proyecto3.png',
        '/_ipx/f_webp/screens/proyecto4.png',
        '/_ipx/f_webp/screens/proyecto5.png',
        '/_ipx/f_webp/screens/proyecto6.png',
        '/_ipx/f_webp/screens/proyecto7.png',
        '/_ipx/f_webp/screens/proyecto8.png',
        '/_ipx/f_webp/screens/proyecto8.png',
        '/_ipx/f_webp/screens/proyecto9.png',
        '/_ipx/f_webp/screens/proyecto10.png',
        '/_ipx/f_webp/screens/proyecto11.png',
        '/_ipx/f_webp/screens/proyecto12.png',
        '/_ipx/f_webp/screens/proyecto13.png',
        '/_ipx/f_webp/screens/proyecto14.png',
        '/_ipx/f_webp/images/FeriaTecnologicaBioplastico.png',
        '/_ipx/f_webp/images/CajaMeteorologica.png',
        '/_ipx/f_webp/images/Solitario.png',
        '/_ipx/f_webp/images/Encriptador.png',

      ],
    },
    routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/**': { headers: { 'cache-control': 'public, max-age=86400' } }
    },
    compressPublicAssets: true,
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  svgo: {
    autoImportPath: '../public/icons/',
    defaultImport: 'component'
  },

  sourcemap: {
    server: false,
    client: true
  },

  image: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'i.pinimg.com',
      'raw.githubusercontent.com',
      'cralpcode.github.io'
    ],
    format: ['webp']
  },
  vite: {
    plugins: [
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 75 },
        jpg: { quality: 75 },
        webp: { quality: 80 },
        avif: { quality: 70 },
      }),
    ],
  },
})
