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
  }
})
