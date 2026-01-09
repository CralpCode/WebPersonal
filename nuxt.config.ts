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
