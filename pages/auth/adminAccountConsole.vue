<template>
    <h1> Admin Account Console </h1>
	{{ title }}
	<button @click="seeAuthAccounts"> See Auth Accounts </button>
    <button @click="seeUserAccounts"> See User Accounts </button>
	<Login />
	<signupFormVue />

</template>

<script setup>
import Login from "../login.vue";
import signupFormVue from "~~/components/auth/signupForm.vue";
import { definePageMeta } from "~~/.nuxt/imports";
import { useSupabaseUser } from "~~/.nuxt/imports";
import { $fetch } from "ofetch";

const user = useSupabaseUser();
console.log(user.value.user_metadata.access.admin);
const title = "test";

definePageMeta({
    middleware: "admin-auth"
});

async function seeAuthAccounts() {
    await $fetch("/api/seeAuthAccounts")
        .then((res) => console.log(JSON.parse(res.body)));
}

async function seeUserAccounts() {
    await $fetch("/api/seeUserAccounts")
        .then((res) => console.log(JSON.parse(res.body)));
}
</script>