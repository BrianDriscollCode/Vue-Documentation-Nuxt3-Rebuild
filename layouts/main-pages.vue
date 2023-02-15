<template>
	<div id="mainPageContainer">
		<div class="content">
            <slot />
		</div>
		<Footer />
    </div>
</template>

<script setup>
import Footer from "~/components/home/footer.vue";

</script>
