export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtproject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  
  plugins: [
    '~/plugins/element.ts', 
    '~/plugins/vue-scrollto.ts',
    '@/plugins/vuetify',
    {src:"~plugins/vue2-google-maps.js"}
  ],
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  
  modules: [
      'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter', 'faInstagram','faGithub']
      }
    ]
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {

     //add for vue2-google-maps
     if (!ctx.isClient) {
       // This instructs Webpack to include `vue2-google-maps`'s Vue files
       // for server-side rendering
       config.externals.splice(0, 0, function (context, request, callback) {
         if (/^vue2-google-maps($|\/)/.test(request)) {
           callback(null, false)
         } else {
           callback()
         }
       })
      }
     }
  },
  generate: { 
    dir: 'public' 
  },
  vendor:["vue2-google-maps"]
}
