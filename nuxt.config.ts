import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    modules: ["@nuxt/content"],
    content: {
        highlight: {
            theme: "one-dark-pro"
        }
    }
});