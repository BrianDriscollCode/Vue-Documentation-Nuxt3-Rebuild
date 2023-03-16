<template>
    <h1> Database handler </h1>
    <button @click="checkCompletionTable"> Check Completion </button>
    <button @click="insertCompletionTable"> Insert Completion </button>

</template>

<script setup>
import { $fetch } from "ofetch";
import { useSupabaseUser } from "~~/.nuxt/imports";

const user = useSupabaseUser();

async function checkCompletionTable() {
    let data = await $fetch("/api/checkModuleCompletion", {
        method: "post",
        body: {
            user: user.value.id
        }
    });
    console.log(JSON.parse(data.body));
}

// async function checkCompletionTable() {
//     let data = await $fetch("/api/checkModuleCompletion");
//     console.log(JSON.parse(data.body));
// }
async function insertCompletionTable() {
    await $fetch("/api/insertModuleCompletion", {
        method: "post",
        body: {
            user: user.value.id
        }
    })
        .then(res => console.log(res));
}

// async function editCompletionTable() {
//     await $fetch("/api/editModuleCompletion", {
//         method: "post",
//         body: {
//             user: user.value.id
//         }
//     })
//         .then(res => console.log(res));
// }
</script>