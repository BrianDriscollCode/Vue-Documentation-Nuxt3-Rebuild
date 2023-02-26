<template>
    <NuxtLink :to="articleLink" class="articleLink">
    <div class="articleCard">
        <img :src="articleImage" class="image">
        <div class="articleDescription">
            <h3>{{ articleTitle }}</h3>
            <p>  {{ articleDescription }} </p>
            <NuxtLink :to="articleLink" class="readLink"> Read more... </NuxtLink>
        </div>
    </div>
    </NuxtLink>
</template>

<script setup>
import { defineProps } from "vue";


defineProps({
    articleImage: String,
    articleTitle: String,
    articleDescription: String,
    articleLink: String
});
</script>

<style scoped>

    .articleLink {
        text-decoration: none;
        color: black;
    }
    .image {
        width: 400px;
    }

    .articleDescription {
        padding: 1em;
        position: relative;
    }
    .articleCard {
        height: 100%;
        display: grid;
        grid-template-rows: [first] 50% [second] 50%;;
    }

    .readLink {
        position: absolute;
        bottom: 10px;
    }
</style>