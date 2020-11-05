// import colors from 'vuetify/es5/util/colors'

module.exports = {
  head: {
    titleTemplate: '%s - Agoramas-board',
    title: 'Agoramas-board',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/styles/main.scss'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    ['nuxt-i18n',
      {
        locales: [
          {
            name: 'עברית',
            code: 'he',
            flag: 'isr',
            file: 'he.js',
            dir: 'rtl'
          },
          {
            name: 'Русский',
            code: 'ru',
            flag: 'ru',
            file: 'ru.js',
            dir: 'ltr'
          },
          {
            name: 'English',
            code: 'en',
            flag: 'gb',
            file: 'en.js',
            dir: 'ltr'
          }
        ],
        vueI18n: {
          fallbackLocale: 'he'
        },
        lazy: true,
        langDir: 'assets/lang/',
        defaultLocale: 'he'
      }
    ]
  ],
  buildDir: '.nuxt',
  build: {
    extractCSS: true
  }
}
