<template>
    <section>
        <p> What you will learn...</p>
        <ul>
            <li v-for="title in newHeaders" :key="title" href="#" class="listElement">
                <a :href="convertText(title)" class="navigationLink"> {{ title }} </a>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { useAsyncData, queryContent, useRoute } from "~~/.nuxt/imports";

const route = useRoute();
const { data } = await useAsyncData("content-${route.path}", () => queryContent().where({ _path: route.path }).findOne());

let newHeaders = []; //passed as prop to "ArticleNavigation" component
let dataChildren = data._rawValue.body.children;

//Find titles and push to "newHeaders" array
for (let i = 0; i < dataChildren.length; i++) {
    if (
        dataChildren[i].tag == "h2" ||
        dataChildren[i].tag == "h3"
    )
    {
        newHeaders.push(dataChildren[i].children[0].value);
    }
}

function convertText(htmlId) {
    const newId = htmlId.trim().replace(/\s/g, "-").replace(/\./, "").replace(/:/, "").toLowerCase();
    //console.log(newId);
    return "#" + newId;
}

</script>