<template>
	<div>
		<img src="~/assets/hamburgerWhiteV2.png" class="hamburgerImage" :style="props.display ? 'display: none': 'display: block'" />
		<img src="~/assets/closeV2.png" class="hamburgerImage" :style="props.display ? 'display: block': 'display: none'" />
	</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    display: Boolean
});

</script>

<style scoped>
    .hamburgerImage {
		width: 35px;
		height: 35px;
		z-index: 100;
	}
</style>