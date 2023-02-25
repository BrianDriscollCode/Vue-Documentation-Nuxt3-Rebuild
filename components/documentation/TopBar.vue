<template>
    <section class="topNavigationContainer">
        <div class="leftSection">
            <div class="topBar">
                <div class="searchContainer">
                    <label class="searchLabel"> Search: </label>
                    <input
                        @click="$emit('isModalTrue', allHeaders)"
                    >
                </div>
                <TopBarHamburger class="topHamburger" @click="toggleNavigation" :display="toggleNavigationMinimized" />

				<NavigationMinimized
                    :class="!toggleNavigationMinimized ? 'topNavigationMinimized': 'topNavigationMaximized'"
                    :display="toggleNavigationMinimized"
                />

				<div class="topNavigation">
					<span class="navLinkContainer">
						<Nuxt-link to="/" class="navLink">
							Home
						</Nuxt-link>
					</span>
					<span class="navLinkContainer">
						<Nuxt-link to="/documentation" class="navLink">
							Documentation
						</Nuxt-link>
					</span>
					<span class="navLinkContainer">
						<Nuxt-link to="/blog" class="navLink">
							<del> Blog </del>
						</Nuxt-link>
					</span>
					<span class="navLinkContainer">
						<Nuxt-link to="/free-course" class="navLink">
							Free Course
						</Nuxt-link>
					</span>
				</div>
            </div>
        </div>

        <div :class="windowWidth > 1135 ? 'rightSection': 'rightSectionMin'"></div>

    </section>
  </template>

<script setup>
import { ref } from "vue";
import { useAsyncData, queryContent } from "~~/.nuxt/imports";
import useWindowSizeListener from "~~/plugins/windowSizeListener";
import TopBarHamburger from "./TopBarHamburger.vue";
import NavigationMinimized from "../NavigationMinimized.vue";

let allContent = await useAsyncData("documentation", () => queryContent("documentation").find());
allContent = allContent.data._rawValue;
console.log(allContent);

let pages= [];
let allHeaders = [];
let windowWidth = useWindowSizeListener();

//Traverse content object and clean up data into simpler object
for (let item in allContent) {
    let contentObject = {
        title: "",
        description: "",
        path: "",
        children: []
    };
    if (allContent[item]._path != undefined) {
        contentObject.title = allContent[item].title;
        contentObject.description = allContent[item].description;
        contentObject.path = allContent[item]._path;
        for (let child in allContent[item].body.children) {
            //console.log(allContent[item].body.children[child]);
            if (
                allContent[item].body.children[child].tag == "h1" ||
				allContent[item].body.children[child].tag == "h2" ||
				allContent[item].body.children[child].tag == "h3"
            )
            {
                contentObject.children.push(allContent[item].body.children[child]);
            }
        }
        pages.push(contentObject);
    }
}

//Change object into even simpler object because I'm dumb
for (let page in pages) {
    for (let ch in pages[page].children) {
        let contentObject = {
            header: "",
            path: "",
            page: "",
        };
        contentObject.header = pages[page].children[ch].children[0].value;
        contentObject.path = pages[page].path;
        contentObject.page = pages[page].title;
        allHeaders.push(contentObject);
    }
}

let toggleNavigationMinimized = ref(false);

function toggleNavigation() {
    toggleNavigationMinimized.value = !toggleNavigationMinimized.value;
}
</script>

<style scoped>
.topNavigationContainer {
width: 87%;
height: 50px;
background-color: #34445c;
align-items: center;
display: flex;
position: fixed;
flex-direction: row;
}

.topNavigationContainerMax {
width: 100%;
height: 50px;
background-color: #34445c;
align-items: center;
display: flex;
position: none;
flex-direction: row;
}

.topBar {
width: 93.5%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
}

.topBarMax {
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
}

.leftSection {
width: 100%;
height: 50px;
display: flex;
align-items: center;
}
.leftSectionMax {
width: 100%;
height: 50px;
display: flex;
align-items: center;
}

.navLinkContainer {
margin-left: .8em;
margin-right: 2em;
}

.navLink {
color: white;
text-decoration: none;
z-index: 0
}

.rightSection {
width: 25%;
height: 50px;
}

.rightSectionMin {
width: 0%;
}

.searchContainer {
margin-left: 2em;
margin-right: 2em;
}

.searchLabel {
color: white;
}

/* Toggle Navigation Minimized Menu */

.topNavigationMinimized {
	height: 0;
	transition: height 0.5s;
	top: 0;
	display: block;
}

.topNavigationMaximized {
	height: 70vh;
	transition: height 0.5s;
	top: 0;
	display: block;
}

/* Top Teleport Hamburger */
.topHamburger {
	display: none;
	position: absolute;
	z-index: 6;
}

@media only screen and (max-width: 1135px) {
    .topNavigationContainer {
        width: 100%;
		position: fixed;
	}
	.leftSection {
        width: 100%;
	}
    .rightSection {
		width: 0;
	}
	.topBar {
        width: 100%;
	}
}

@media only screen and (max-width: 944px) {


	.leftSection {
		width: 100%
	}

	.rightSection{
		width: 0;
	}

	.topNavigation {
		display: none;
	}

	.topBar {
		display: flex;
		justify-content: center;
	}
	.topHamburger {
	display: block;
	position: absolute;
	z-index: 100;
	right: .5em;
	top: 8px;
	border-radius: 5px;
    }
}

@media only screen and (max-width: 450px) {
	.topBar {
		justify-content: flex-start;
	}
}
</style>
