import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    modules: [
        "@nuxt/content",
        "@pinia/nuxt"
    ],
    content: {
        highlight: {
            theme: "one-dark-pro"
        }
    },
    plugins: [
        { src: "~/plugins/windowSizeListener", ssr: false },
        { src: "~/plugins/aos.js", ssr: false, mode: "client" }
    ],
    components: {
        global: true,
        dirs: ["~/components/courses"]
    },
    nitro: {
        plugins: ["~/server/index.js"]
    },
    runtimeConfig: {
        AWSDB_HOST: process.env.AWSDB_HOST,
        AWSDB_PASSWORD: process.env.AWSDB_PASSWORD
    }
});