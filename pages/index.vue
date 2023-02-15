<template>
    <main class="mainContainer">
		<div class="headerContainer">
			<NavBar />
            <Header />
			<div class="waterDroplet drop1"> </div>
            <div class="waterDroplet drop2"> </div>
            <div class="waterDroplet drop3"> </div>
			<div class="waterDroplet drop4"> </div>
		</div>
		<div class="featuresContainer">
            <h2> features </h2>
		</div>
    </main>
</template>

<script setup>
import { definePageMeta } from "~~/.nuxt/imports";
import Header from "~/components/home/header.vue";
import NavBar from "~/components/home/navbar.vue";

definePageMeta({
    layout: "main-pages"
});

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;1,100;1,300;1,400;1,500;1,700&display=swap');
    .mainContaner {
        font-family: 'Montserrat', sans-serif;
    }
    .headerContainer{
		width: 100%;
		background-color: #34445c;
		position: relative;
	}

	.waterDroplet {
		width: 1em;
		height: 1em;
		position: absolute;
		background-color: white;
		border-radius: 4em;
		opacity: .1;
		z-index: 3;
	}

	.drop1 {
		left: 15px;
		animation: moveDown1 4s infinite;
	}

	.drop2 {
        right: 30px;
		animation: moveDown2 5s infinite;
	}

	.drop3 {
		left: 30em;
		animation: moveDown3 5s infinite;
	}

	.drop4 {
		right: 30em;
		animation: moveDown4 5s infinite;
	}

	@keyframes moveDown1 {
		0% {
            top: 0;
			opacity: .1;
		}

		100% {
            top: 100%;
			opacity: 0;
		}
	}
	@keyframes moveDown2 {
		0% {
            top: 0;
			opacity: 0;
		}
		19%{
			top: 0;
			opacity: 0;
		}
		20% {
			top: 0;
			opacity: .1;
		}
		50% {
			top: 0;
			opacity: .1;
		}
		100% {
            top: 100%;
			opacity: 0;
		}
	}
	@keyframes moveDown3 {
		0% {
            top: 0;
			opacity: 0;
		}
		19% {
			top: 0;
			opacity: 0;
		}
		20% {
			top: 0;
			opacity: .1;
		}
		100% {
            top: 100%;
			opacity: 0;
		}
	}

	@keyframes moveDown4 {
		0% {
            top: 0;
			opacity: 0;
		}
		39% {
			top: 0;
			opacity: 0;
		}
		40% {
			top: 0;
			opacity: .1;
		}
		100% {
            top: 100%;
			opacity: 0;
		}
	}

	.featuresContainer {
		z-index: 10;
		background-color: bisque;
		width: 100%;
	}

	.featuresContainer h2 {
		margin-top: 0;
	}
</style>

