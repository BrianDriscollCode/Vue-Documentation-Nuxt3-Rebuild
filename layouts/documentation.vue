<template>
    <div class="documentationContainer">
        <div class="modalBackground" v-if="showModal" @click.self="toggleModalOff">
            <SearchModal
                :headers="headers"
				v-on:setInput="setInput"
				v-on:toggleModalOff="toggleModalOff"
			/>
        </div>
		<div class="colorBackground" v-if="showModal" >
        </div>
      <aside class="leftSideBar" :id="showSideBar ? 'showSideBar': 'returnSideBar'">
        <LeftSideBar v-on:turnOffSideBar="turnOffSideBar"/>
      </aside>

      <section class="documentationView" :id="showSideBar ? 'backgroundGrey': ''" @click.self="turnOffSideBar">
        <TopBar
            class="topBarMain"
            v-on:isModalTrue="toggleModal"
			:id="showSideBar ? 'backgroundGrey': ''"
			@click="turnOffSideBar"
        />
		<div class="tempBar">
            <img src="~/assets/hamburger.png" class="hamburger" @click="useShowSideBar">
		</div>

        <div class="content" @click="turnOffSideBar">
          <slot />
        </div>
      </section>
    </div>
  </template>

<script setup>
//components
import LeftSideBar from "../components/documentation/LeftSideBar.vue";
import TopBar from "../components/documentation/TopBar.vue";
//import SearchModal from "~/components/documentation/searchModal.vue";
//vue
import { ref, defineAsyncComponent } from "vue";

const SearchModal = defineAsyncComponent(() =>
    import("~/components/documentation/searchModal.vue")
);

let showModal = ref(false);
let headers = [];
let modalInput;
let showSideBar = ref(false);

function toggleModal(calledHeaders) {
    showModal.value = true;
    console.log("show modal", showModal);
    headers = calledHeaders;
    setTimeout(() => {
        modalInput.value.focus();
    }, 100);
}

function toggleModalOff() {
    showModal.value = false;
}

function setInput(input) {
    console.log("run set input");
    modalInput = input;
}

function useShowSideBar() {
    showSideBar.value = !showSideBar.value;
    console.log("show side bar", showSideBar);
}

function turnOffSideBar () {
    if (showSideBar.value === true) {
        showSideBar.value = false;
    }
    console.log("turn off side bar");
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;1,100;1,300;1,400;1,500;1,700&display=swap');
@import "~/assets/globalDocumentationStyles.css";

.modalBackground {
height: 100%;
width: 100%;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
}

.colorBackground {
background-color: rgb(186, 186, 186);
height: 100%;
width: 100%;
opacity: 0.3;
position: absolute;
}

#backgroundGrey {
background-color: rgb(57, 57, 57);
}
.documentationContainer {
display: flex;
width: 100%;
height: 100vh;
font-family: 'Montserrat', sans-serif;
background-color: rgb(255, 255, 255);
}

.topBarMain {
z-index: 5;
}

/* Navigation */

.leftSideBar {
background-color: rgb(244, 246, 254);
width: 17%;
transition: width 0.5s;
}

.tempBar {
display: none;
position: fixed;
}

.documentationView {
width: 82%;
height: 100vh;
}

.hamburger {
width: 33px;
height: 33px;
background-color: rgb(202, 211, 253);;
padding: 1px 3px 1px 1px;
border-radius: 0 5px 5px 0;
}

#showSideBar {
width: 50%;
position: fixed;
z-index: 10;
}

.returnSideBar {
width: 0px;
transition: width 0.5s;
overflow: hidden;
position: fixed;
z-index: 10;
}

/* Content */

.content {
height: 100vh;
}

@media only screen and (max-width: 1135px) {
	.documentationView {
		width: 100%;
	}

	.leftSideBar {
	background-color: rgb(244, 246, 254);
	width: 0px;
	transition: width 0.5s;
	overflow: hidden;
	position: fixed;
	z-index: 10;
	}

	.tempBar {
	display: block;
	height: 30px;
	margin-top: 3.5em;
	}
}

</style>
