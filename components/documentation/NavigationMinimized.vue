<template>
	<div class="topNavigationMin">
		<div class="linkContainer">
			<span :class="props.display ? 'navLinkContainerMax':'navLinkContainerMin'">
				<Nuxt-link to="/" class="navLinkMin" :style="props.display ? 'opacity: 1; height: 50px; pointerEvents: auto': 'opacity: 0; height: 0px; pointerEvents: none'">
					Home
				</Nuxt-link>
			</span>
			<span :class="props.display ? 'navLinkContainerMax':'navLinkContainerMin'">
				<Nuxt-link to="/blog" class="navLinkMin" :style="props.display ? 'opacity: 1; height: 50px; pointerEvents: auto': 'opacity: 0; height: 0px; pointerEvents: none'">
					Blog
				</Nuxt-link>
			</span>
			<span :class="props.display ? 'navLinkContainerMax':'navLinkContainerMin'">
				<Nuxt-link to="free-course" class="navLinkMin" :style="props.display ? 'opacity: 1; height: 50px; pointerEvents: auto': 'opacity: 0; height: 0px; pointerEvents: none'">
					Free Course
				</Nuxt-link>
			</span>
			<span :class="props.display ? 'navLinkContainerMax':'navLinkContainerMin'">
				<Nuxt-link to="contact" class="navLinkMin" :style="props.display ? 'opacity: 1; height: 50px; pointerEvents: auto': 'opacity: 0; height: 0px; pointerEvents: none'">
					Contact
				</Nuxt-link>
			</span>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    display: Boolean
});

</script>

<style scoped>
    .topNavigationMin {
		background-color: #34445c;
		width: 100%;
		z-index: 5;
		position:absolute;
	}

	.linkContainer {
		display: flex;
		justify-content: center;
		flex-direction:column;
		align-items: center;
		height: 100%;
	}

	.navLinkContainerMin {
		padding-top: 0em;
		padding-bottom: 0em;
		transition: padding-top 0.3s, padding-bottom 0.3s;
	}

	.navLinkContainerMax {
		padding-top: 1em;
		padding-bottom: 1em;
		transition: padding-top 0.3s, padding-bottom 0.3s;
	}

	.navLinkMin {
		color: white;
		text-align: center;
		display: block;
		height: 50px;
		width: 100px;
		transition: opacity 0.3s, height 0.3s;
	}
</style>