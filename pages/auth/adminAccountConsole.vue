<template>
    <h1> Admin Account Console </h1>
	{{ title }}
	<button @click="seeAuthAccounts"> See Auth Accounts </button>
    <button @click="seeUserAccounts"> See User Accounts </button>
	<button @click="showCurrentUser"> Show Current User </button>
	<LoginForm />
	<signupFormVue />

</template>

<script setup>
import LoginForm from "@/components/auth/loginForm.vue";
import signupFormVue from "~~/components/auth/signupForm.vue";
import { definePageMeta } from "~~/.nuxt/imports";
import { useSupabaseUser } from "~~/.nuxt/imports";
import { $fetch } from "ofetch";

definePageMeta({
    middleware: "admin-auth"
});

const user = useSupabaseUser();
const title = "test";

async function seeAuthAccounts() {
    await $fetch("/api/seeAuthAccounts")
        .then((res) => console.log(JSON.parse(res.body)));
}

async function seeUserAccounts() {
    await $fetch("/api/seeUserAccounts")
        .then((res) => console.log(JSON.parse(res.body)));
}

function showCurrentUser() {
    console.log(user.value);
}
</script>