import { useSupabaseUser, navigateTo, defineNuxtRouteMiddleware } from "~~/.nuxt/imports";


export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser();

    if (!user.value) {
        return navigateTo("/auth/unauthorized");
    }

    if (user.value.user_metadata.account_type !== "full") {
        return navigateTo("/auth/unauthorized");
    }

});