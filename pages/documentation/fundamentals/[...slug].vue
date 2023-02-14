<template>
	<section class="contentWrapper">
		<div class="mainContent">
			<main class="mainContentContainer">
				<ContentRenderer :value="data" />
				<FooterBar />
			</main>
		</div>

		<div class="articleNavigationContainer">
			<ArticleNavigation
				:new-headers="newHeaders"
			/>
		</div>
    </section>
</template>

<script setup>
import { definePageMeta, useAsyncData, queryContent, useRoute } from "~~/.nuxt/imports";
import ArticleNavigation from "~/components/ArticleNavigation.vue";
import FooterBar from "~/components/FooterBar.vue";

definePageMeta({
    layout: "documentation"
});
const route = useRoute();
const { data } = await useAsyncData("content-${route.path}", () => queryContent().where({ _path: route.path }).findOne());

let newHeaders = []; //passed as prop to "ArticleNavigation" component
let dataChildren = data._rawValue.body.children;

//Find titles and push to "newHeaders" array
for (let i = 0; i < dataChildren.length; i++) {
    if (
        dataChildren[i].tag == "h1" ||
		dataChildren[i].tag == "h2" ||
        dataChildren[i].tag == "h3"
    )
    {
        newHeaders.push(dataChildren[i].children[0].value);
    }
}

</script>

<style scoped>

:deep(h1) {
    padding-top: 100px !important;
    margin-top: 0;
    font-size: 1.7em;
}

:deep(p) {
    line-height: 1.5em;
}

:deep(mark) {
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgb(210, 210, 255);
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
.contentWrapper {
    margin: 0 auto 0 auto;
    width: 100%;
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: row;
}

.documentationContainer {
    /* background-color: bisque; */
    width: 100%;
}

.mainContent {
    width: 100%;
    overflow: auto;
    height: 100vh;
}

.mainContentContainer {
    width: 65%;
    height: 100vh;
    margin: 0 auto 0 auto;
}

.imageContainer {
  display: flex;
  justify-content: center;
}

::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

/* Article Navigation */

.articleNavigationContainer {
    /* background-color: chartreuse; */
    width: 25%;
}

@media only screen and (max-width: 1135px) {
    .mainContent {
    width: 100%;
    height: 100vh;
    }
	.articleNavigationContainer {
		display: none;
	}
    .mainContentContainer {
		width: 80%;
	}
}

@media only screen and (max-width: 1000px) {
	:deep(img) {
		width: 100%;
	}
}

@media only screen and (max-width: 1000px) {
	.mainContentContainer {
		width: 95%;
	}
}
</style>