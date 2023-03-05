<template>
	<h1> Courses </h1>
</template>

<script setup>
import { definePageMeta } from "~~/.nuxt/imports";
import { useSupabaseUser } from "~~/.nuxt/imports";

const user = useSupabaseUser();

console.log(user.value);
definePageMeta({
    middleware: "auth",
});

</script>