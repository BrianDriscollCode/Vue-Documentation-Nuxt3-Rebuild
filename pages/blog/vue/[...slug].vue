<template>
    <main class="mainContainer">
        <div class="headerContainer">
            <NavBar />
        </div>

        <div class="contentContainer">
            <div class="contentWrapper">
                <span v-for="(slug, index) in buildSlugs" :key="slug">
                        <NuxtLink :to="slug"> {{ routeArrayNoSlash[index] }} </NuxtLink>
                        <span class="seperator">{{ buildSlugs[buildSlugs.length - 1] == slug ? "": "&#8594;" }}</span>
                </span>
                <hr id="topLine"/>
                <ContentRenderer :value="data" />
                <div class="bottomSpacing"> </div>
            </div>
        </div>

        <div class="footerContainer">
            <Footer />
        </div>
    </main>
</template>

<script setup>
import { useAsyncData, queryContent, useRoute } from "~~/.nuxt/imports";
import { computed } from "vue";
import NavBar from "~/components/main-pages/navbar.vue";
import Footer from "~/components/main-pages/footer.vue";

const route = useRoute();
const { data } = await useAsyncData("content-${route.path}", () => queryContent().where({ _path: route.path }).findOne());

const routeArray = computed(() => {
    let temp = route.fullPath.split("/");
    temp = temp.filter(route => route !== "");
    let slash = "/";
    for (let item in temp) {
        slash += temp[item];
        temp[item] = slash;
        slash = "/";
    }

    return temp;
});

const routeArrayNoSlash = computed(() => {
    let temp = route.fullPath.split("/");
    temp = temp.filter(route => route !== "");

    return temp;
});

const buildSlugs = computed(() => {
    let temp = [];
    let builder = "";
    for (let item in routeArray.value) {
        builder += routeArray.value[item];
        temp.push(builder);
    }
    return temp;
});
</script>

<style scoped>

    #topLine {
        margin-top: 1em;
        margin-bottom: 2em;
    }
    .headerContainer {
        position: fixed;
    }
    .contentContainer {
        width: 100%;
        padding-top: 6em !important;
    }

    .contentWrapper {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }

    .seperator {
        margin-left: 0.6em;
        margin-right: 0.6em;
    }

:deep(h1) {
    margin-top: 0;
    font-size: 2em;
}

:deep(i) {
    font-size: 0.8em;
}

:deep(p) {
    line-height: 1.5em;
}

.contentContainer:deep(li) {
    line-height: 1.5em;
    font-size: 1.1em;
}

:deep(a) {
    color:rgb(90, 125, 195);
    text-decoration: none;
}

:deep(a):hover {
    color:rgb(0, 221, 169);
}

:deep(b) {
    color: rgb(95, 124, 148);
    font-size:0.9em;
}

:deep(mark) {
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgb(210, 210, 255);
}

:deep(iframe) {
    margin-left: auto;
    margin-right: auto;
}

:deep(pre) {
 background-color: rgb(41, 47, 59);
 padding: 1.3em;
 display: flex;
 justify-content: center;
 margin-left: auto;
 margin-right: auto;
 border-radius: 10px;
 overflow-x: auto;
}

:deep(code) {
	width: 100%;
	font-size: 15px;
}

:deep(h2 a) {
	color: rgb(14, 13, 13);
    text-decoration: none;
}

:deep(h3 a) {
	color: rgb(14, 13, 13);
    text-decoration: none;
}

:deep(h4 a) {
	color: rgb(14, 13, 13);
    text-decoration: none;
}

:deep(img) {
	display: block;
    margin-left: auto;
	margin-right: auto;
	width: 60%;
}

:deep(.iframeWrapper) {
    position: relative;
  display: block;
  width: 90%; /* width of iframe wrapper */
  height: 0;
  margin: auto;
  padding: 0% 0% 56.25%; /* 16:9 ratio */
  overflow: hidden;
}

:deep(.iframe) {
    position: absolute;
  top: 0; bottom: 0; left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.contentContainer:deep(p) {
	font-size: 1.1em;
}

@media only screen and (max-width: 1200px) {
    .contentWrapper {
        width: 80%;
    }

    :deep(img) {
        width: 90%;
    }
}

@media only screen and (max-width: 600px) {
    .contentWrapper {
        width: 95%;
    }
}
</style>