<template>
	<div class="headerWrapper">
		<div class="textContainer">
			<div id="inDevelopment" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800"> In development </div>
            <h1 data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800"> An Intuitive Guide to the Vue <span id="ecosystem">Ecosystem</span></h1>
			<h2 data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800"> Easy-to-understand materials for beginners to learn the ins-and-outs of Vue 3, Nuxt 3, and other Vue-related technologies</h2>
			<div class="cta" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800">
				<NuxtLink to="/documentation"><button> See Documentation </button></NuxtLink>
				<NuxtLink to="/free-course" class="freeCourse"><del>Try our free course ></del></NuxtLink>
                <button @click="getRoute"> Fetch Route </button>
			</div>
		</div>

		<div class="imageContainer">
			<img src="/wave.png" class="waveImage"/>
		</div>

	</div>
</template>

<script setup>
async function getRoute() {
    console.log(await $fetch("/api/checkAccount")); // eslint-disable-line
}
</script>

<style scoped>
    .headerWrapper {
		display:  flex;
		justify-content: center;
		flex-direction: row;
		width: 80%;
		padding-top: 6em;
		padding-bottom: 6em;
		margin-left: auto;
		margin-right: auto;
		color: white;
		font-family: 'Montserrat', sans-serif;
	}

	.textContainer {
        width: 60%;
		padding-right: 4em;
		padding-top: 4em;
		padding-bottom: 4em;
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
		display: inline-block;
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
		margin-bottom: auto;
		vertical-align: middle;
	}

	#ecosystem {
		color: #00c69a;
	}

	.cta {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 1em;
	}

	.cta button {
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

	.cta button:hover {
		background: linear-gradient(180deg, rgb(52, 229, 190) 0%, rgba(0,198,154,1) 65%, rgb(70, 239, 200) 100%);
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
			padding-right: 0;
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
		.waveImage {
			margin-bottom: 0;
		}

	@media only screen and (max-width: 1000px) {
		.imageContainer {
            width:80%;
        }
	}

	@media only screen and (max-width: 500px) {

		.textContainer h1 {
			font-size: 2.8em;
		}
		.textContainer h2 {
			font-size: 1.3em;
		}
		.headerWrapper {
            width: 100%;
		}
		.textContainer {
			width: 100%;
		}
	}
	}
</style>