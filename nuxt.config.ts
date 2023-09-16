export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        class: "h-full",
      },
      bodyAttrs: {
        class:
          "antialiased bg-gray-50 dark:bg-black min-h-screen bg-[length:1rem_1rem] bg-[radial-gradient(circle,#eceeef_1px,transparent_0)] dark:bg-[radial-gradient(circle,#191919_1px,transparent_0)]",
      },
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
