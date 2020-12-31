export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "@josifovicamd",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Personal blog of Milan Josifovic. Created and designed by Milan Josifovic",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/base-components", "~/plugins/notifier"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: [
      "./assets/scss/_variables.scss",
      "./assets/scss/_base.scss",
      "./assets/scss/app.scss",
    ],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  axios: {
    baseURL: process.env.API_URL,
    debug: process.env.AXIOS_DEBUG_MODE || false,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "api/users/login",
            method: "post",
            propertyName: "token",
          },
          logout: { url: "api/users/logout", method: "delete" },
          user: { url: "api/users/info", method: "get", propertyName: "user" },
        },
        //tokenType: '',
      },
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/_.vue"),
      });
    },
  },
};
