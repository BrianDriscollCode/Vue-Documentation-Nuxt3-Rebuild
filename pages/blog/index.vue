<template>
    <main class="mainContainer">
        <div class="headerContainer">
            <NavBar />
        </div>
        <div class="titleContainer">
            <h1> Articles </h1>
            <hr />
        </div>
        <section class="contentContainer">
            <div class="grid-container">
                <div v-for="item in articles" :key="item" class="grid-wrapper">
                    <NuxtLink :to="item._path" class="boxLink">
                        <div class="grid-item">
                            <img :src="item.image.src" class="cardImage">
                            <div class="cardContent">
                                <h3> {{ item.title }}</h3>
                                <p> {{ item.description }} </p>
                                <NuxtLink :to="item._path" class="readLink"> Read more... </NuxtLink>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="categoriesContainer">
                <h3>categories</h3>
                <ul>
                    <li> All ({{ all }}) </li>
                    <li> Vue ({{ vueArticlesAmount }}) </li>
                    <li> Nuxt ({{ nuxtArticlesAmount }})</li>
                    <li> Pinia ({{ piniaArticlesAmount }})</li>
                </ul>
            </div>
        </section>

        <div class="footerContainer">
            <hr class="footerLine"/>
            <Footer />
        </div>
    </main>
</template>

<script setup>
import NavBar from "~/components/home/navbar.vue";
import Footer from "~/components/home/footer.vue";
import { useAsyncData, queryContent } from "~~/.nuxt/imports";
import { computed } from "vue";


let allContent = await useAsyncData("blog", () => queryContent("blog").find());
let articles = allContent.data._rawValue;
console.log(allContent);
console.log(articles);

const all = computed(() => {
    return articles.length;
});

const vueArticlesAmount = computed(() => {
    let tempArray = [];
    for (let item in articles) {
        if (articles[item].category == "Vue") {
            tempArray.push(articles[item]);
        }
    }
    return tempArray.length;
});

const nuxtArticlesAmount = computed(() => {
    let tempArray = [];
    for (let item in articles) {
        if (articles[item].category == "Nuxt") {
            tempArray.push(articles[item]);
        }
    }
    return tempArray.length;
});

const piniaArticlesAmount = computed(() => {
    let tempArray = [];
    for (let item in articles) {
        if (articles[item].category == "Pinia") {
            tempArray.push(articles[item]);
        }
    }
    return tempArray.length;
});


</script>

<style>

.titleContainer {
    text-align: center;
    width: 1300px;
    margin-left: auto;
    margin-right: auto;
}

.contentContainer {
    display: flex;
    flex-direction: row;
    width: 1300px;
    margin-left: auto;
    margin-right: auto;
}

.articleCard {
    width: 450px;
}

.cardImage {
    width:100%;
    border-radius: 5px 5px 0px 0px;
}

.cardContent {
    padding: 1em;
}

.grid-container {
    display: grid;
    grid-template-columns: [first] auto [line2] auto [line3] auto;
    /* background-color: #2196F3; */
    width: 1300px;
    margin-left: auto;
    margin-right: auto;
    column-gap: 1em;
    row-gap: 1em
}

.grid-wrapper {
    background-color: rgb(154, 223, 255);
    border-radius: 5px;
    text-decoration: none;
    color: black;
}

.grid-item {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.boxLink {
   text-decoration: none;
   color: black;
}

.categoriesContainer {
    padding-left: 1em;
}

.categoriesContainer ul {
    padding-left: 0;
}

.categoriesContainer ul li {
    list-style-type: none;
}

.readLink {
    text-decoration: none;
}

</style>