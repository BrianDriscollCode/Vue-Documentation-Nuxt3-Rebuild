<template>
	<div class="border">
		<span class="percentage"> {{ width }}%</span>
        <div class="grey" :style="{width: `${width}%`}">
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
.percentage {
    position: absolute;
	left: 50%;
}
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