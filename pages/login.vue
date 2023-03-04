<template>
    <main>
        <h1> Login Page </h1>
        <button @click="getAccounts"> Get Accounts </button>
    </main>
</template>


<script setup>
import { $fetch } from "ofetch";

function getAccounts() {
    $fetch("/.netlify/functions/getAccounts")
        .then(res => console.log(res))
        .catch(function(error) {
            console.log(error);
        });
}
</script>