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
      <aside :class="windowWidth > 1135 ? 'leftSideBar': 'leftSideBarMin'">
        <LeftSideBar />
      </aside>

      <section class="documentationView">
        <TopBar
            class="topBarMain"
            v-on:isModalTrue="toggleModal"
        />
		<div :class="windowWidth < 1135 ? 'tempBar': 'tempBarInvis'">
        Hamburger
		</div>

        <div class="content">
          <slot />
        </div>
      </section>
    </div>
  </template>

<script setup>
//components
import LeftSideBar from "../components/LeftSideBar.vue";
import TopBar from "../components/TopBar.vue";
import SearchModal from "~/components/searchModal.vue";
//composable
import useWindowSizeListener from "~~/plugins/windowSizeListener";
//vue
import { ref } from "vue";

let showModal = ref(false);
let headers = [];
let modalInput;
let windowWidth = useWindowSizeListener();



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

  .topBarMain {
	z-index: 5;
  }

  /* Navigation */

  .leftSideBar {
	background-color: rgb(244, 246, 254);
	width: 17%;
	transition: width 0.5s;
  }
  .leftSideBarMin {
	background-color: rgb(244, 246, 254);
    width: 0px;
	transition: width 0.5s;
	overflow: hidden;
  }

  .tempView {
    display: block;
  }

  .tempViewInvis {
   display: none;
}

  .documentationView {
    width: 82%;
    height: 100vh;
  }

  /* Content */

  .content {
    height: 100vh;
  }

  @media only screen and (max-width: 1135px) {
	.documentationView {
        width: 100%;
  }
}

  </style>
