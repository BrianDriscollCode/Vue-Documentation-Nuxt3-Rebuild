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

          <div class="topNavigation">
            <span class="navLinkContainer">
              <Nuxt-link to="/" class="navLink">
                Home
              </Nuxt-link>
            </span>
            <span class="navLinkContainer">
              <Nuxt-link to="/blog" class="navLink">
                <del> Blog </del>
              </Nuxt-link>
            </span>
            <span class="navLinkContainer">
              <Nuxt-link to="free-course" class="navLink">
                <del> Free Course </del>
              </Nuxt-link>
            </span>
            <span class="navLinkContainer">
              <Nuxt-link to="contact" class="navLink">
                <del> Contact </del>
              </Nuxt-link>
            </span>
          </div>
        </div>
      </div>

      <div :class="windowWidth > 1135 ? 'rightSection': 'rightSectionMin'" />
    </section>
  </template>

<script setup>
import { useAsyncData, queryContent } from "~~/.nuxt/imports";
import useWindowSizeListener from "~~/plugins/windowSizeListener";

let allContent = await useAsyncData("documentation", () => queryContent().find());
allContent = allContent.data._rawValue;

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
width: 75%;
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

@media only screen and (max-width: 1135px) {
    .topNavigationContainer {
        width: 100%;
		position: fixed;
	}
	.leftSection {
        width: 100%;
	}
	.topBar {
        width: 100%;
	}
}

@media only screen and (max-width: 800px) {
    .topNavigation {
        display:  none;
	}

	.leftSection {
		width: 100%
	}

	.rightSection{
		width: 0;
	}

	.topBar {
		display: flex;
		justify-content: center;
	}
}
</style>
