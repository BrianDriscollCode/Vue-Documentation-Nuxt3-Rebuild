<template>
    <main class="mainContainer">
		<div class="headerContainer">
			<NavBar />
		</div>

        <h1> Test </h1>

		<div class="footerContainer">
			<hr class="footerLine"/>
            <Footer />
		</div>
    </main>
</template>

<script setup>
import NavBar from "~/components/home/navbar.vue";
import Footer from "~/components/home/footer.vue";

</script>