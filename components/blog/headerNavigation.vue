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
import { useAsyncData, queryContent, useRoute, onMounted } from "~~/.nuxt/imports";
import { computed, ref } from "vue";

const route = useRoute();
const dataChildren = ref([]);

onMounted(async () => {
    const { data } = await useAsyncData("content-${route.path}", () => queryContent().where({ _path: route.path }).findOne());
    dataChildren.value = data._rawValue.body.children;
});

const newHeaders = computed(() => {
    let tempArray = [];
    for (let i = 0; i < dataChildren.value.length; i++) {
        if (
            dataChildren.value[i].tag == "h2" ||
            dataChildren.value[i].tag == "h3"
        )
        {
            tempArray.push(dataChildren.value[i].children[0].value);
        }
    }
    return tempArray;
});
//Find titles and push to "newHeaders" array

function convertText(htmlId) {
    const newId = htmlId.trim().replace(/\s/g, "-").replace(/\./, "").replace(/:/, "").toLowerCase();
    //console.log(newId);
    return "#" + newId;
}

</script>