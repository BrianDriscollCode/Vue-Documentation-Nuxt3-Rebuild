import { useSupabaseUser, navigateTo, defineNuxtRouteMiddleware } from "~~/.nuxt/imports";


export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser();

    if (!user.value) {
        return navigateTo("/auth/unauthorized");
    }

    if (user.value?.user_metadata?.access?.admin == undefined) {
        return navigateTo("/auth/unauthorized");
    }

    if (user.value.user_metadata.access.admin != true) {
        return navigateTo("/auth/unauthorized");
    }

});