<template>
	<div class="checkBoxContainer">
		<input type="checkbox" @click="event => logToStorage(event)" :checked="checked"/>
        {{ props.text }}

	</div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

let checked = ref(false);

onMounted(() => {
    if (localStorage[props.identifier] === "true") {
        checked.value = true;
    }
});


let props = defineProps({
    text: String,
    identifier: String
});

function logToStorage(value) {
    let checkBox = value.target.checked ? true: false;
    localStorage.setItem(props.identifier, checkBox);
    checked.value = checkBox;
}

</script>

<style scoped>
.checkBoxContainer {
	margin-bottom: 1em;
}
</style>