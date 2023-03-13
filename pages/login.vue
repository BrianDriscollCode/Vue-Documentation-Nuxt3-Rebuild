<template>
	<section class="pageContainer">
		<navbar class="navbar" />
		<main class="mainContainer">
			<h1> User Login </h1>
			<div class="contentContainer">
				<loginForm class="loginForm"/>
				<section class="newUsersSection">
					<h2> New Users </h2>
					<hr class="line"/>
					<p> Creating an account has many benefits: get access to free courses, join a programming community, and more! </p>
					<NuxtLink to="/register"> Create an account </NuxtLink>
				</section>
			</div>
		</main>
		<Footer class="footer" />
	</section>
</template>

<script setup>
import Footer from "@/components/main-pages/footer.vue";
import navbar from "@/components/main-pages/navbar.vue";
import loginForm from "~~/components/auth/loginForm.vue";
</script>

<style scoped>
.pageContainer {
    height: 100vh;
}
h1 {
	font-size: 2em;
	padding-left: 1em;
}

.mainContainer {
    width: 80%;
	margin: 4em 0 4em 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
}

.loginForm {
	width: 50%;
	padding: 2em;
}
.newUsersSection {
	width: 50%;
	padding: 2em;
	display: flex;
	flex-direction: column;
}
.line {
	background-color: #34445c;
	width: 100%;
}
.contentContainer {
	display: flex;
	flex-direction: row;
	width: 100%;
}
.navbar {
	background-color: #34445c;
}

.footer {
	position: absolute;
	bottom: 0;
}
</style>