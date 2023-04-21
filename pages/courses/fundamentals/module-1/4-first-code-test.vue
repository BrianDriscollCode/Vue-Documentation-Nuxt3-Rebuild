<template>
    <section class="container">
        <div class="leftSection">
            <div class="sideBarWrapper">
                <NuxtLink to="/" class="logoTitle"><span> Vue<span id="logoName">Ref</span> </span></NuxtLink>
                <h1> First Vue Application </h1>

                <p>
                    This is the first code test example. In this example, we are going to introduce
                    you to the code editor. Then we will complete a simple example to show you how everything works.
                </p>

                <p> Link: <a href="#"> Video Tutorial </a></p>

                <ol>
                    <li> Find the code editor </li>
                    <li> Toggle between <mark>editor</mark>, preview, and both. Leave it on both. </li>
                    <li> Change the {{ "<h1>" }} title to "I understand!"</li>
                    <li> P</li>
                </ol>

                <button @click="toggleCompletion" v-if="!completed"> Mark Completed! </button>
                <button @click="nextStep" v-if="completed"> Back to module 1 </button>
                <button @click="toggleCompletion" v-if="completed"> Reset </button>
            </div>
        </div>
        <div class="rightSection">
            <iframe src="https://stackblitz.com/edit/vue3-script-setup-with-vite-myjzcb?embed=1&file=src/App.vue" v-if="!completed"></iframe>
            <iframe src="https://stackblitz.com/edit/vue3-script-setup-with-vite-sy8ste?embed=1&file=src/App.vue" v-else> </iframe>
        </div>
    </section>
</template>

<script setup>
import { definePageMeta, navigateTo } from "~~/.nuxt/imports";
import { ref } from "vue";

const completed = ref(false);

function toggleCompletion() {
    completed.value = !completed.value;
}

function nextStep() {
    navigateTo("/courses/fundamentals/module-1");
}

definePageMeta({
    middleware: "basic-auth"
});
</script>

<style scoped>

.logoTitle {
        text-decoration: none;
        color: white;
}
#logoName {
        color : #00c69a;
        font-weight: 600;
    }

.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #1f2834;
    color: white;
}

a {
    color: rgb(132, 176, 223);
}

.sideBarWrapper {
    padding: 2em;
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
li {
    margin-bottom: 0.5em;
}

button {
    padding: 0.7em;
    border: solid 1px white;
    outline: none;
    font: inherit;
    color: inherit;
    background: none;
    width: 100%;
    margin-bottom: 1em;
}

button:hover {
    background-color: #26354a;
}

</style>