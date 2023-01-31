<template>
	<section class="contentWrapper">
		<div class="mainContent">
			<main class="mainContentContainer">
				<ContentRenderer :value="data" />
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
import ArticleNavigation from "../../../components/ArticleNavigation.vue";

definePageMeta({
    layout: "documentation"
});
const route = useRoute();
const { data } = await useAsyncData("content-${route.path}", () => queryContent().where({ _path: route.path }).findOne());

const newHeaders = ["Computed Properties", "Methods",
    "Computed", "Data", "Difference Between Reactive and Imperative",
    "Ways to Use Methods"];
</script>

<style scoped>
:deep(h1) {
    padding-top: 100px !important;
    margin-top: 0;
    font-size: 1.7em;
}

p {
    line-height: 1.5em;
}

mark {
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgb(210, 210, 255);
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
</style>