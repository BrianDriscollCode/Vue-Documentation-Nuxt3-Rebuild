<template>

    <h1> Login v2</h1>
    <button @click="login('google')"> Login </button>
    <button @click="signOut"> Sign Out</button>
    <button @click="print"> Call Print </button>
</template>

<script setup>
import { $fetch } from "ofetch";
import { useSupabaseAuthClient } from "~~/.nuxt/imports";
// import { watchEffect } from "vue";
// import { useRouter } from "vue-router";

const client = useSupabaseAuthClient();
//const user = useSupabaseUser();
// const router = useRouter();

const login = async (provider) => {
    const { error } = await client.auth.signInWithOAuth({ provider });

    if (error) {
        return alert("Something went wrong");
    }

    console.log("Login Success");
};

async function signOut() {
    const { error } = await client.auth.signOut();

    if (error) {
        return alert("Something went wrong");
    }

    console.log("Signout success");
}

// watchEffect(() => {
//     if (user.value) {
//         router.push("/documentation");
//     }
// });

async function print() {
    await $fetch("/api/seeAccounts")
        .then((res) => console.log(res))
        .catch(function(error) {
            console.log(error);
        });
}
</script>