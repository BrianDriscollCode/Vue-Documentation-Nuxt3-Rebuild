<template>
	<main>
		<div class="headerContainer">
            <NavBar />
		</div>
		<div class="heroBanner">
            <div class="heroWrapper">
				<h1> Vue 3 Course, 100% Free Forever </h1>
                <h2> Learn the fundamentals of Vue using video tutorials, coding challenges, and a set learning schedule</h2>
                <CollectEmail />
			</div>
		</div>
		<div>
			<FeaturesSection />
		</div>
	</main>
</template>

<script setup>
import NavBar from "../components/home/navbar.vue";
import CollectEmail from "../components/collectEmail.vue";
import FeaturesSection from "../components/free-course-page/featuresSection.vue";

</script>

<style scoped>
.heroBanner {
	width:100%;
}

.heroWrapper {
	width: 80%;
	margin-left: auto;
	margin-right: auto;
}
</style>