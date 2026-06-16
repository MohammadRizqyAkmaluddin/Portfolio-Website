// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  
  googleFonts: {
    families: {
      'Encode Sans Expanded':true,
      'Roboto': true,
      'Bebas Neue': true,
      'Bungee': true,
      'Koulen': true,
      'Afacad': true,
      'Plus Jakarta Sans': [300, 400, 500, 600, 700],
      'DM Serif Display': true,
      'Montserrat': [400, 500, 600, 700],
      'Gelasio': true,
      Raleway: [300, 400, 500, 600, 700],
      Inter: [400, 500, 600, 700],
    },
    display: 'swap'
  },

})
