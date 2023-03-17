<template>
    <h1> Admin Account Console </h1>
    {{ title }}
    <button @click="seeAuthAccounts"> See Auth Accounts </button>
    <button @click="seeUserAccounts"> See User Accounts </button>
    <button @click="showCurrentUser"> Show Current User </button>
    <div>
        <label> name </label>
        <input v-model="mailerName" />
        <label> Email </label>
        <input v-model="mailerEmail" />
        <button @click="submitMailer"> Submit to Mailer  </button>
    </div>
    <LoginForm />
    <signupFormVue />

</template>

<script setup>
import LoginForm from "@/components/auth/loginForm.vue";
import signupFormVue from "~~/components/auth/signupForm.vue";
import { definePageMeta } from "~~/.nuxt/imports";
import { useSupabaseUser } from "~~/.nuxt/imports";
import { $fetch } from "ofetch";
import { ref } from "vue";

definePageMeta({
    middleware: "admin-auth"
});

let mailerName = ref("");
let mailerEmail = ref("");

function submitMailer() {
    console.log("submitMailer ran");
    $fetch("/api/createAccount", {
        method: "post",
        body: {
            name: mailerName.value,
            email: mailerEmail.value
        }
    })
        .then(res => {
            console.log(res);
        });
}


const user = useSupabaseUser();
const title = "test";

async function seeAuthAccounts() {
    await $fetch("/api/seeAuthAccounts")
        .then((res) => console.log(JSON.parse(res.body)));
}

async function seeUserAccounts() {
    await $fetch("/api/seeUserAccounts", {
        method: "post",
        body: {
            user: "name"
        }
    })
        .then((res) => console.log(JSON.parse(res.body)));
}

function showCurrentUser() {
    console.log(user.value);
}
</script>