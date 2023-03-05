<template>

    <h1> Login v2</h1>
    <button @click="print"> Call Print </button>
</template>

<script setup>
import { $fetch } from "ofetch";

async function print() {
    await $fetch("/api/seeAccounts")
        .then((res) => console.log(res))
        .catch(function(error) {
            console.log(error);
        });
}
</script>