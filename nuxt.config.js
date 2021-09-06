export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-vue-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      /* { rel : "stylesheet", href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"}*/
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js',
        body: true //script'i body etiketinin en sonuna ekler.
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/bootstrap/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/Components.js",
    "~/plugins/vue-fragment.js",
    "~/plugins/vuelidate.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    //port: 8000 // default: 3000
    // port: 0 // rastgele port oluşturur.
  },

  env: {
    baseURL: "https://template-server-default-rtdb.firebaseio.com",
    firebaseAPIKEY:"AIzaSyCP7C3_OPejkEgt6uBLtj5PZeI3iLjGTVo",
    testVar1: "value1"
    //baseURL: process.env.BASE_URL
  },

  router: {
    //base: '/app/'
  },

 /* loading: {
    color: 'blue',
    height: '5px'
  }*/

  loading: '~/components/loading.vue'

}
