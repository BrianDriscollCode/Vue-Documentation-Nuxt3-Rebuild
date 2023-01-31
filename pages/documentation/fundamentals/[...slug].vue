<template>
	<main>
        <ContentRenderer :value="data" />
	</main>
</template>

<script setup>
import { definePageMeta, useAsyncData, queryContent, useRoute } from "~~/.nuxt/imports";

definePageMeta({
    layout: "documentation"
});
const route = useRoute();
const { data } = await useAsyncData("content-${route.path}", () => queryContent().where({ _path: route.path }).findOne());
</script>