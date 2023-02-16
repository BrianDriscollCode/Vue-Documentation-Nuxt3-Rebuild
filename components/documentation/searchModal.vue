<template>
	<div class="returnContainer">
		<h3> Search </h3>
		<div class="searchInputContainer">
			<input ref="input" class="searchInput" v-model="searchText" @input="updateSearchText" />
		</div>
		<ul class="searchList">
			<li
                v-for="(item, index) in filteredHeaders"
				:key="index"
                class="searchButton"
			>
                <nuxt-link :to="item.path" class="searchButtonLinkStyling" @click="$emit('toggleModalOff')">
                    <div class="searchButtonContent">
                        <span class="itemHeader"> {{ item.header }} </span>
                        <span class="itemPage"> {{ item.page }} - Page </span>
                    </div>
                </nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { defineEmits, onMounted, onBeforeUpdate, ref, defineProps } from "vue";

const input = ref(null);
const emit = defineEmits(["setInput"]);
const props = defineProps(["headers"]);

let filteredHeaders = [];
let searchText = ref("");

function updateSearchText(event) {
    searchText.value = event.target.value;
}

function updateSearchArrays() {
    let tempNewArray = props.headers.filter(word => word.header.toLowerCase().includes(searchText.value.toLowerCase()));
    let tempOutputArray = [];

    for (let i = 0; i < 6; i++) {
        if (tempNewArray[i] !== undefined) {
            tempOutputArray[i] = tempNewArray[i];
        }
    }
    filteredHeaders = tempOutputArray;
}

updateSearchArrays();

onBeforeUpdate(() => {
    updateSearchArrays();
});

onMounted(() => {
    emit("setInput", input);
    console.log("onMount", input);
    updateSearchArrays();
});

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
    list-style-type: none;
	margin-bottom: 0.8em;
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
	background-color: rgb(173, 189, 218);
	-webkit-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    -moz-box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
    box-shadow: 6px 7px 5px -6px rgba(153,153,153,1);
	padding-left: 1.2em;
	padding-right: 1.2em;
	padding-top: 12px;
	padding-bottom: 12px;
	border-radius: 5px;
}

.searchButtonContent:hover {
    background: rgb(132, 191, 233);
}

@media only screen and (max-width: 944px) {
    .returnContainer {
		width: 400px;
		height: 500px;
	}
}


@media only screen and (max-width: 500px) {
    .returnContainer {
		width: 80%;
		height: 400px;
	}

	h3 {
		margin-top: 0;
	}
	.searchInput {
		height: 1.5em;
		font-size: 0.7em;
	}
	.searchButton {
		padding-top: 6px;
		padding-bottom: 6px;
		font-size: 0.8em;
	}

	.itemPage {
		display: none;
	}
}
</style>