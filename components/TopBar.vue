<template>
    <section class="topNavigationContainer">
      <div class="leftSection">
        <div class="topBar">
          <div class="searchContainer">
            <label class="searchLabel"> Search: </label>
            <input value="  in development">
			<button @click="printData"> Print Data </button>
          </div>

          <div class="top_navigation">
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

      <div class="rightSection" />
    </section>
  </template>

<script setup>
import { useContentStore } from "~~/stores/contentStore";

const contentStore = useContentStore();
contentStore.getContent();

function printData() {
    console.log(contentStore.content);
    contentStore.getContent();
}

</script>

  <style>

  .topNavigationContainer {
    width: 87%;
    height: 50px;
    background-color: #34445c;
    align-items: center;
    display: flex;
    position: fixed;
    flex-direction: row;
  }

  .topBar {
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

  .navLinkContainer {
    margin-left: .8em;
    margin-right: 2em;
  }

  .navLink {
    color: white;
    text-decoration: none;
  }

  .rightSection {
    width: 25%;
    height: 50px;
  }

  .searchContainer {
    margin-left: 2em;
    margin-right: 2em;
  }

  .searchLabel {
    color: white;
  }
  </style>
