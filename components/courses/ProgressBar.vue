<template>
	<div class="border">
        <div class="grey" :style="{width: `${width}%`}">
            <div> {{ width }}%</div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    width: Number
});




</script>

<style scoped>
.border {
	border: 1px solid rgb(144, 144, 144);
	width: 100%;
}

.grey {
	height: 24px;
	background-color: aquamarine;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>