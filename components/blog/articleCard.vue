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
        color: rgb(31, 31, 31);
    }

    h3 {
        margin-top: 0.3em;
    }
    .image {
        width: 100%;
		border-radius: 10px 10px 0 0;
    }

    .articleDescription {
        padding: 1em;
        position: relative;
    }
    .articleCard {
        height: 415px;
        display: grid;
        grid-template-rows: [first] 50% [second] 50%;
    }

    .readLink {
		color:rgb(11, 73, 84);
        position: absolute;
        bottom: 10px;
    }

    @media screen and (max-width: 1250px) {
        .articleCard {
            grid-template-rows: [first] auto [second] auto;
            height: 100%;
        }
    }
</style>