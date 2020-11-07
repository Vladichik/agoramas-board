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
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/firebase',
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
  firebase: {
    config: {
      production: {
        apiKey: 'AIzaSyDt0tnvB4VsTHIa2WR9ob-qtFl8GXJQVOo',
        authDomain: 'agoramas-board.firebaseapp.com',
        databaseURL: 'https://agoramas-board.firebaseio.com',
        projectId: 'agoramas-board',
        storageBucket: 'agoramas-board.appspot.com',
        messagingSenderId: '147304521630',
        appId: '1:147304521630:web:955e3282c76fb97e74408f'
      },
      development: {
        apiKey: 'AIzaSyDt0tnvB4VsTHIa2WR9ob-qtFl8GXJQVOo',
        authDomain: 'agoramas-board.firebaseapp.com',
        databaseURL: 'https://agoramas-board.firebaseio.com',
        projectId: 'agoramas-board',
        storageBucket: 'agoramas-board.appspot.com',
        messagingSenderId: '147304521630',
        appId: '1:147304521630:web:a6ab54b5419855d374408f'
      }
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      performance: true,
      analytics: true
    }
  },
  buildDir: '.nuxt',
  build: {
    extractCSS: true
  }
}
