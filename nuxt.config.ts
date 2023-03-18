import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    modules: [
        "@nuxt/content",
        "@pinia/nuxt",
        "@nuxtjs/supabase",
        "@nuxtjs/apollo",
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: "http://localhost:3000/api/graphql"
            }
        }
    },
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
        dirs: ["~/components/courses", "~/components/blog"]
    },
    css: [
        "~/layouts/global.css"
    ],
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY
    }
});