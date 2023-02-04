import { defineStore } from "pinia";
import { useAsyncData, queryContent } from "~~/.nuxt/imports";

//const { data } = await useAsyncData("documentation", () => queryContent().find());

export const useContentStore = defineStore("test", {
    state: () => ({
        message: "hello",
        content: null
    }),

    actions: {
        async getContent() {
            try {
                this.content = await useAsyncData("documentation", () => queryContent().find());
                console.log("contentStore used");
            }
            catch (error) {
                console.log("error");
                return error;
            }
        }
    }
});