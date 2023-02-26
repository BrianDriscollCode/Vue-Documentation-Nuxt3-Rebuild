<template>
    <main class="mainContainer">
        <div class="headerContainer">
            <NavBar />
        </div>
        <div class="titleContainer">
            <h1> Articles (All TEMP ARTICLES) </h1>
            <hr />
        </div>
        <section class="contentContainer">
            <div class="grid-container">
                <div v-for="item in articles" :key="item" class="grid-wrapper">
                    <ArticleCard
                        :articleImage="item.image.src"
                        :articleTitle="item.title"
                        :articleLink="item._path"
                        :articleDescription="item.description"
                    />
                </div>
            </div>
            <div class="categoriesContainer">
                <h3>categories</h3>
                <ul>
                    <li @click="filterByCategory('All')" class="categoryPicker"> All ({{ all }}) </li>
                    <li @click="filterByCategory('Vue')" class="categoryPicker"> Vue ({{ vueArticlesAmount }}) </li>
                    <li @click="filterByCategory('Nuxt')" class="categoryPicker"> Nuxt ({{ nuxtArticlesAmount }})</li>
                    <li @click="filterByCategory('Pinia')" class="categoryPicker"> Pinia ({{ piniaArticlesAmount }})</li>
                </ul>
            </div>
        </section>

        <Footer />
    </main>
</template>

<script setup>
import NavBar from "~/components/home/navbar.vue";
import Footer from "~/components/blog/footer.vue";
import ArticleCard from "~/components/blog/articleCard.vue";
import { useAsyncData, queryContent } from "~~/.nuxt/imports";
import { computed, ref, reactive } from "vue";

let allContent = await useAsyncData("blog", () => queryContent("blog").find());
let articles = ref(allContent.data._rawValue);
console.log(allContent);
console.log(articles);

let blogState = reactive({
    currentCategory: "All",
    entryAmount: allContent.data._rawValue.length
});

function filterByCategory(category) {
    if (category == "All") {
        articles.value = allContent.data._rawValue;
    } else {
        articles.value = allContent.data._rawValue.filter(article => article.category === category);
        blogState.currentCategory = category;
        blogState.entryAmount = articles.value.length;
    }

    console.log(blogState.currentCategory, blogState.entryAmount);
}

const all = computed(() => {
    return allContent.data._rawValue.length;
});

const vueArticlesAmount = computed(() => {
    let tempArray = [];
    for (let item in allContent.data._rawValue) {
        if (allContent.data._rawValue[item].category == "Vue") {
            tempArray.push(allContent.data._rawValue[item]);
        }
    }
    return tempArray.length;
});

const nuxtArticlesAmount = computed(() => {
    let tempArray = [];
    for (let item in allContent.data._rawValue) {
        if (allContent.data._rawValue[item].category == "Nuxt") {
            tempArray.push(allContent.data._rawValue[item]);
        }
    }
    return tempArray.length;
});

const piniaArticlesAmount = computed(() => {
    let tempArray = [];
    for (let item in allContent.data._rawValue) {
        if (allContent.data._rawValue[item].category == "Pinia") {
            tempArray.push(allContent.data._rawValue[item]);
        }
    }
    return tempArray.length;
});


</script>

<style scoped>
.mainContainer {
    display: flex;
    position: relative;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100vh;
    height: 100%;
}

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
    margin-bottom: 6em;
}



.grid-container {
    display: grid;
    grid-template-columns: [first] 33.33% [line2] 33.33% [line3] 33.33%;
    /* background-color: #2196F3; */
    width: 85%;
    margin-right: auto;
    column-gap: 1em;
    row-gap: 1em
}

.grid-wrapper {
    display: grid;
    height: 100%;
    background: rgb(133,215,254);
    background: linear-gradient(135deg, rgba(133,215,254,1) 0%, rgba(154,223,255,1) 70%, rgba(97,199,246,1) 100%);
    border-radius: 5px;
    text-decoration: none;
    color: black;
}


.categoriesContainer {
    padding-right: 1em;
    padding-left: 1em;

}

.categoriesContainer ul {
    padding-left: 0;
}

.categoriesContainer ul li {
    list-style-type: none;
}

.categoryPicker:hover {
    cursor: pointer;
}
@media screen and (max-width: 1350px) {
    .titleContainer {
        width: 90%
    }
    .contentContainer {
        width: 90%;
        margin-bottom: 8em;
    }

}

@media screen and (max-width: 1250px) {
    .grid-container {
        grid-template-columns: [first] 50% [line2] 50%;
    }
}

@media screen and (max-width: 1150px) {
    .categoriesContainer {
        padding-right: 0;
        padding-left: 0;
    }
}

@media screen and (max-width: 930px) {
    .titleContainer {
        width: 97%
    }
    .contentContainer {
        width: 97%;
    }

}

@media screen and (max-width: 860px) {
    .grid-container {
        grid-template-columns: [first] 100%;
    }
    .categoriesContainer {
        padding-right: 1em;
        padding-left: 1em;
    }
}

@media screen and (max-width: 600px) {
    .contentContainer {
        flex-direction: column-reverse;
        margin-bottom: 10em;
    }
    .grid-container {
        margin-right: auto;
        margin-left: auto;
    }
    .categoriesContainer {
        margin-right: auto;
        margin-left: auto;
        text-align: center;
    }
}
</style>