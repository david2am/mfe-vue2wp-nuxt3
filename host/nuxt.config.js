import federation from "@originjs/vite-plugin-federation";

const remoteUrl = 'http://localhost:8081'

export default defineNuxtConfig({
    ssr: false, // doesn't work with this in true by default
    app: {
        head: {
            title: 'Nuxt App',
            charset: "utf-16"
        },
    },
    vite: {
      resolve: {
        alias: {
            vue: '@vue/compat'
        },
      },
      plugins: [
        federation({
            name: "host",
            remotes: {
                remote: {
                    external: `${remoteUrl}/remoteEntry.js`,
                    format: "var",
                    from: "webpack",
                },
            },
        }),
      ]
    }
});