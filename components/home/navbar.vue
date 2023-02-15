<template>
	<div class="navigationContainer">
		<div class="navigationWrapper">
            <p> Vue<span id="logoName">Ref</span> </p>

            <ul class="navigationList">
				<li> <NuxtLink to="/" class="navLink"> Home </NuxtLink> </li>
				<li> <NuxtLink to="/documentation" class="navLink"> Documentation </NuxtLink> </li>
				<li> <NuxtLink to="/blog" class="navLink"> <del>Blog</del> </NuxtLink> </li>
				<li> <NuxtLink to="/free-course" class="navLink"> <del>Free Course</del> </NuxtLink>  </li>
				<li> <NuxtLink to="/contact" class="navLink"> <del>Contact</del> </NuxtLink> </li>
            </ul>

			<div class="searchButtonContainer">
                <img src="~/assets/search.png" class="searchButton" />
			</div>

		</div>
	</div>
</template>

<style scoped>
    .navigationContainer {
		width: 100%;
		font-family: 'Montserrat', sans-serif;
	}
    .navigationWrapper {
		width: 80%;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		margin-left: auto;
		margin-right: auto;
		color: white
	}
    .navigationList {
		padding-left: 0;
		margin-top: 0;
		margin-bottom: 0;
		list-style: none;

		display: flex;
		justify-content: center;
		flex-direction: row;
	}

	#logoName {
		color : #00c69a;
		font-weight: 600;
	}

	.navigationList li {
		padding: 1em 2em 1em 2em;
	}

	.navLink {
		text-decoration: none;
		color: white;
		transition: color 0.2s;
	}

	.navLink:hover {
		color : #00c69a;
	}

	.searchButtonContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.searchButton {
		width: 25px;
		height: 25px;
	}

	@media only screen and (max-width: 1335px) {
		.navigationWrapper {
			width: 90%;
		}
	}

	@media only screen and (max-width: 1135px) {
	}
</style>