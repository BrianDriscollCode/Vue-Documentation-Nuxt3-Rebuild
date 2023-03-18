<template>
    <section class="container">
        <div class="leftSection">
            <div class="sideBarWrapper">
                <h1> First View Application </h1>
            </div>
        </div>
        <div class="rightSection">
            <iframe src="https://stackblitz.com/edit/vue-ccktzc?devToolsHeight=33&embed=1&file=src/App.vue&hideExplorer=1"></iframe>
        </div>
    </section>
</template>

<script setup>
import { definePageMeta } from "~~/.nuxt/imports";


definePageMeta({
    middleware: "basic-auth"
});
</script>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.sideBarWrapper {
    text-align: center;
}

.leftSection {
    width: 20%;
    height: 100%;
}
.rightSection {
    width: 80%;
    height: 100%;
}

iframe {
    width: 100%;
    height: 100%;
}

</style>