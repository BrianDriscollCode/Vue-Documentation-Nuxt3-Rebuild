<template>
	<div class="logoContainer">
		<NuxtLink to="/" class="logoLink">
			<span>
				<span class="vueLogo">Vue</span>
				<span class="refLogo">Ref</span>
            </span>
        </NuxtLink>
	</div>
    <main>
		<div class="leftContainer">
			<!-- All logic in component -->
            <signupForm />
		</div>
		<div class="rightContainer">
			<!-- Image loaded in CSS -->
		</div>

	</main>
</template>

<script setup>
import signupForm from "~~/components/auth/signupForm.vue";
</script>

<style scoped>
.logoContainer {
	position: absolute;
	padding: 1em;
	font-size: 1.3em;
}

.vueLogo {
    color: #34445c;
	font-weight: 600;
}

.refLogo {
    color: rgb(0,198,154);
	font-weight: 600;
}

.logoLink {
	text-decoration: none;
}

main {
	height: 100vh;
	display: flex;
	flex-direction: row;
	background-color: rgb(246, 249, 255);
}
.leftContainer {
    width:65%;
	display: flex;
	align-items: center;
}

.rightContainer {
	width: 35%;
	background-color: rgb(255, 255, 255);
	background-image: url('~/assets/background_person_programming1.jpg');
	background-size: cover;
}

.image {
	height: 100%;
}

@media screen and (max-width: 1000px) {
	.rightContainer {
		display: none;
	}

	.leftContainer {
		width: 100%;
	}
}
</style>