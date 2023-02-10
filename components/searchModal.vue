<template>
	<div class="returnContainer">
		<h3> Search </h3>
		<div class="searchInputContainer">
			<input value="" ref="input" class="searchInput"/>
		</div>
		<ul class="searchList">
			<li
                v-for="(item, index) in filteredHeaders"
				:key="index"
                class="searchButton"
			>
                <nuxt-link :to="item.path" class="searchButtonLinkStyling">
                    <div class="searchButtonContent">
                        <span> {{ item.header }} </span>
                        <span> {{ item.page }} - Page </span>
                    </div>
                </nuxt-link>
			</li>
		</ul>
		<button @click="$emit('focusInput')"> show content </button>
	</div>
</template>

<script setup>
import { defineEmits, onMounted, ref, defineProps } from "vue";

let searchInput = "";
const input = ref(null);
const emit = defineEmits(["setInput"]);
const props = defineProps(["headers"]);

function filterHeaders() {
    let tempArray = [];
    for (let i = 0; i < 10; i += 2) {
        tempArray.push(props.headers[i]);
    }

    return tempArray;
}

let filteredHeaders = filterHeaders();

onMounted(() => {
    emit("setInput", input);
    console.log("onMount", input);
});

console.log(searchInput);

</script>

<style scoped>

.returnContainer {
	height: 500px;
	width: 500px;
	padding: 2em;
	position: absolute;
	margin: auto;
	vertical-align: center;
	border-radius: 25px;
	background-color: rgb(248, 248, 255);
	-webkit-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    -moz-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
}

.searchInputContainer {
	display: flex;
	justify-content: center;
}
.searchInput {
	height: 2.5em;
	width: 100%;
	font-size: 1.2em;
	margin-bottom: 0.2em;
}
.searchList {
     padding-left: 0;
}

.searchButton {
	background: rgb(173, 189, 218);
	padding-top: 12px;
	padding-bottom: 12px;
	-webkit-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    -moz-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    list-style-type: none;
	border-radius: 5px;
	margin-bottom: 0.8em;
}

.searchButton:hover {
    background: rgb(132, 191, 233);
}

.searchButtonLinkStyling {
	color: rgb(40, 40, 40);
    text-decoration: none;
	margin: 1em 0 1em 0;
}
.searchButtonContent {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 1.2em;
	padding-right: 1.2em;
}

</style>