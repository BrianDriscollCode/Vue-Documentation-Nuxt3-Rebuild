<template>
	<div class="headerWrapper">
		<div class="textContainer">
			<span id="inDevelopment"> In development </span>
            <h1> An Intuitive Guide to the Vue <span id="ecosystem">Ecosystem</span></h1>
			<h2> Easy-to-understand materials for beginners to learn the ins-and-outs of Vue 3, Nuxt 3, and other Vue-related technologies</h2>
			<div class="cta">
				<NuxtLink to="/documentation"><button> See Documentation </button></NuxtLink>
				<NuxtLink to="/free-course" class="freeCourse"><del>Try our free course ></del></NuxtLink>
			</div>
		</div>

		<div class="imageContainer">
			<img src="/wave.png" class="waveImage"/>
		</div>

	</div>
</template>

<style scoped>
    .headerWrapper {
		display:  flex;
		justify-content: center;
		flex-direction: row;
		width: 80%;
		padding-top: 4em;
		padding-bottom: 4em;
		margin-left: auto;
		margin-right: auto;
		color: white;
		font-family: 'Montserrat', sans-serif;
	}

	.textContainer {
        width: 60%;
		padding-right: 4em;
	}

	.textContainer h1 {
		font-size: 3.5em;
	}

	.textContainer h2 {
		color: #d3d3d3;
		font-weight: 300;
	}

	#inDevelopment {
		border: solid 1px white;
		padding: 0.3em;
		border-radius: 5px;
	}

	.imageContainer {
        width: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.waveImage {
		width: 100%;
		margin-top: auto;
		vertical-align: middle;
	}

	#ecosystem {
		color: #00c69a;
	}

	.cta {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cta button {
		background-color: #00c69a;
		color: rgb(55, 55, 55);
		font-weight: 600;
		border: none;
		border-radius: 5px;
		padding: .5em;
		-webkit-box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
        -moz-box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
        box-shadow: 4px 3px 6px -2px rgba(158,156,158,1);
		transition: background-color .2s;
	}

	.cta button:hover {
		background-color: #94d6c7;
	}

	.cta .freeCourse {
		text-decoration: none;
		color: white;
		padding-left: 2em;
	}

	.cta .freeCourse:hover {
		text-decoration: none;
		color: #00c69a;
		padding-left: 2em;
	}

	@media only screen and (max-width: 1335px) {
		.headerWrapper {
			width: 90%;
		}
	}

	/* @media only screen and (max-width: 1135px) {
		.navigationWrapper {
			width: 90%;
		}

		.textContainer {
			width: 50%;
		}

		.imageContainer {
			width: 50%;
		}
	} */

	@media only screen and (max-width: 1135px) {
		.imageContainer {
			position: absolute;
			width: 50%;
			z-index: 2;
			opacity: 0.1;
			margin-bottom: 2em;
		}
		.textContainer {
			text-align: center;
			z-index: 3;
			width: 80%;
		}
		.cta {
			justify-content: center;
		}

		.textContainer h1 {
			text-shadow: 0px 1px 1px rgba(0, 0, 0, 1);
		}

		.textContainer h2 {
			font-weight: 500;
		}
	}
</style>