<template>
	<div id="navbar">
		<Navbar />
	</div>
	<div class="mainContainer">
		<main class="main">
			<section class="accountContainer">
				<div class="accountInfo">
					<p id="topParagraphTag"> Name: <b>{{ user.user_metadata.first_name }}</b> </p>
					<p> Member Type: <b>{{ user.user_metadata.account_type }}</b> </p>
					<p> Join Date: <b>{{ user.created_at.substr(0, 10) }}</b> </p>
					<button class="button" @click="signOut"> Sign out</button>
				</div>
				<div class="accountLink">
					<div class="accountLinkWrapper">
						<NuxtLink to="/account/paymentHistory" class="link"> Payment History </NuxtLink>
                        <NuxtLink to="/account/membership" class="link"> Upgrade Membership </NuxtLink>
                        <NuxtLink to="/account/cancel" class="link"> Cancel Membership </NuxtLink>
					</div>
				</div>
			</section>
			<section class="coursesContainer">
				<div class="coursesWrapper">
					<h2> Your Courses </h2>
					<section class="coursesList">
						<div class="course">
							<div class="titleContainer">
								<h3> Vue 3 Beginner</h3>
							</div>
							<img src="auth-vue3-supabase_v4.jpg" class="images" />
							<p class="description"> This course will show you the fundamentals of Vue 3 and how to build Single-page applications.</p>
						</div>
						<div class="course">
							<div class="titleContainer">
								<h3> Vue 3 Full Course</h3>
							</div>
							<img src="auth-vue3-supabase_v4.jpg" class="images" />
							<p class="description"> This course will show you the fundamentals of Vue 3 and how to build Single-page applications.</p>
						</div>
						<div class="course">
							<div class="titleContainer">
								<h3> Nuxt 3 Beginner</h3>
							</div>
							<img src="auth-vue3-supabase_v4.jpg" class="images" />
							<p class="description"> This course will show you the fundamentals of Vue 3 and how to build Single-page applications.</p>
						</div>
						<div class="course">
							<div class="titleContainer">
								<h3> Nuxt 3 Full Course</h3>
							</div>
							<img src="auth-vue3-supabase_v4.jpg" class="images" />
							<p class="description"> This course will show you the fundamentals of Vue 3 and how to build Single-page applications.</p>
						</div>

					</section>
				</div>
			</section>
        </main>
	</div>
	<Footer />

</template>

<script setup>
import Navbar from "~~/components/main-pages/navbar.vue";
import Footer from "@/components/main-pages/footer.vue";
import { useSupabaseAuthClient, useSupabaseUser } from "~~/.nuxt/imports";
import { definePageMeta, navigateTo } from "~~/.nuxt/imports";

const client = useSupabaseAuthClient();
const user = useSupabaseUser();

console.log(user._object.$ssupabase_user);

definePageMeta({
    middleware: "basic-auth"
});

async function signOut() {
    const { error } = await client.auth.signOut();

    if (error) {
        return alert("Something went wrong");
    }

    console.log("Signout success");
    navigateTo("/");
}

</script>

<style scoped>
h2 {
	text-align: center;
}
.mainContainer {
	justify-content: center;
	width: 100%;
	align-items: center;
}
.main {
	margin-top: 2em;
	display: flex;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	width: 75%;
}

.titleContainer {
	text-align: center;
}

.accountContainer {
	width: 25%;
	margin-right: 1em;
}

.accountInfo {
	padding: 1em;
	background-color: rgb(249, 255, 255);
	border: 1px solid #dce7f7;
	border-radius: 5px;
	font-size: 14px;
}

.accountLink {
	margin-top: 1em;
	background-color: rgb(249, 255, 255);
	border: 1px solid #dce7f7;
	border-radius: 5px;
}

.accountLinkWrapper {
	padding: 1em;
	display: flex;
	flex-direction: column;
}

.link {
	font-size: 10px;
	margin-bottom: 0.5em;
	margin-top: 0.5em;
	text-decoration: none;
	color: #265d9c;
}

.button {
		background: rgb(0,198,154);
        background: linear-gradient(180deg, rgba(0,198,154,1) 0%, rgba(0,198,154,1) 65%, rgba(0,167,129,1) 100%);
		color: rgb(55, 55, 55);
		font-weight: 600;
		border: none;
		border-radius: 5px;
		padding: .8em;
		-webkit-box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
        -moz-box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
        box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
		transition: background-color .2s;
	}

.button {
		background: linear-gradient(180deg, rgb(52, 229, 190) 0%, rgba(0,198,154,1) 65%, rgb(70, 239, 200) 100%);
}

h2 {
	margin-top: 0;
}
.coursesContainer {
	background-color: rgb(249, 255, 255);
	width: 80%;
	padding: 1em;
	margin-left: 1em;
	border: 1px solid #dce7f7;
	border-radius: 5px;
}

.coursesWrapper {
padding: 1em;
}

.coursesList {
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
}

.course {
	width: 250px;
	height: 350px;
	background-color: rgb(203, 255, 245);
	border: 2px solid rgb(158, 158, 158);
	margin: 1em;

}

.course:hover {
	border: 2px solid rgb(0, 255, 213);
}

.course p {
	height: 100%;
	padding: 1em;
}
.images {
	width: 100%;
}

#navbar {
	background-color: #34445c;
}

#topParagraphTag {
	margin-top: 0;
}

@media only screen and (max-width: 1335px) {
       .main {
            width: 90%;
       }
    }
</style>