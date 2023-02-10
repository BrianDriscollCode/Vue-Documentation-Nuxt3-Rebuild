<template>
    <div class="documentationContainer">
        <div class="modalBackground" v-if="showModal" @click.self="toggleModalLocal">
            <SearchModal
                :headers="headers"
				v-on:setInput="setInput"
				v-on:focusInput="focusInput"
			/>
        </div>
		<div class="colorBackground" v-if="showModal" >
        </div>
      <aside class="leftSideBar">
        <LeftSideBar />
      </aside>

      <section class="documentationView">
        <TopBar
            class="topBar"
            v-on:isModalTrue="toggleModal"
            v-on:currentSearchInput="changeInput"
        />

        <div class="content">
          <slot />
          <button @click="showInput">  TEST ME </button>
        </div>
      </section>
    </div>
  </template>

<script setup>
import LeftSideBar from "../components/leftSideBar.vue";
import TopBar from "../components/topBar.vue";
import SearchModal from "~/components/searchModal.vue";
import { ref } from "vue";

let showModal = ref(false);
let headers = [];
let modalInput;

function toggleModal(calledHeaders) {
    showModal.value = true;
    console.log("show modal", showModal);
    headers = calledHeaders;
    setTimeout(() => {
        modalInput.value.focus();
    }, 100);
}

function toggleModalLocal() {
    showModal.value = false;
}

function setInput(input) {
    console.log("run set input");
    modalInput = input;
}

function focusInput() {
    modalInput.value.focus();
}

function showInput() {
    console.log(modalInput);
}

</script>

  <style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;1,100;1,300;1,400;1,500;1,700&display=swap');

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
  .documentationContainer {
    display: flex;
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(255, 255, 255);
  }

  .topBar {
	z-index: 5;
  }

  /* Navigation */

  .leftSideBar {
    background-color: rgb(248, 248, 255);
    width: 18%;
  }

  .documentationView {
    width: 82%;
    height: 100vh;
  }

  /* Content */

  .content {
    height: 100vh;
  }

  </style>
