<template>
	<div class="featuresContainer" >
			<div class="featuresWrapper">
				<div class="featureTitleContainer">
					<h2 data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800"> Learning  Vue is a journey, and we have it <span style="border-bottom: 2px solid #34445c;">mapped out</span> </h2>
				</div>

				<div class="singleFeatureContainerLeft">
					<div class="vueDocsCopy">
                        <h3> Free Course </h3>
						<div class="featureCopy">
							<p> Start here. Learn the basics of Vue, Vue Router, and more using our free course.
							We utilize video learning, practice materials, and coding exercises to
							get you from a ZERO to making your own single page applications!
                            </p>
						</div>
						<NuxtLink to="/free-course"><button> Learn Vue Now! </button></NuxtLink>
					</div>
                    <img src="~/assets/studentLearning.jpg" class="featureImage" data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800"/>
                </div>

				<div class="singleFeatureContainerRight">
					<div class="vueDocsCopy">
                        <h3> Vue 3 Documentation </h3>
						<div class="featureCopy">
							<p> Specifically made to support your learning journey.
								No need to buy an expensive textbook or course, it's all right here so
								you can be 100% confident you have the reference materials you need!
							</p>
                        </div>
						<NuxtLink to="/documentation"><button> See Documentation </button></NuxtLink>
					</div>
                    <img src="~/assets/vueRefBook.png" class="featureImage" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800"/>
                </div>

				<div class="singleFeatureContainerLeft">
						<div class="vueDocsCopy">
							<h3> Videos </h3>
							<div class="featureCopy">
								<p> The VueRef YouTube channel! Tutorials showing you, step-by-step, how to build applications in Vue 3, Nuxt 3, and other technologies
									in the Vue ecosystem. Known for being quick, step-by-step, and easy-to-follow.
								</p>
                            </div>
							<a href="https://www.youtube.com/channel/UC38cBsblgQDI1a8smBcbQNw" target="_blank"><button> Watch Videos </button></a>
						</div>
						<img src="~/assets/video.jpg" class="featureImage" data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800"/>
					</div>

					<div class="singleFeatureContainerRight">
					<div class="vueDocsCopy">
                        <h3> Blog </h3>
						<div class="featureCopy">
							<p> If articles are more your thing, we make every video into a detailed article. Read and follow along with the article, or use both resources
								to make it fit your learning style.
							</p>
                        </div>
						<NuxtLink to="/blog"><button> See Content </button></NuxtLink>
					</div>
                    <img src="~/assets/blog.jpg" class="featureImage" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="800"/>
                </div>
				</div>
			</div>
</template>

<script setup>

</script>

<style scoped>
    .featuresContainer {
		width: 100%;
		font-family: 'Montserrat', sans-serif;
		color: rgb(47, 47, 47);
		background-image: url("waterDrop2.jpg");
	}

	.featuresWrapper h2 {
		font-size: 2.3em;
		padding-top: 2em;
		margin-top: 0;
		margin-bottom: 2em;
	}

	.featureTitleContainer {
		text-align: center;
	}

	.featuresContainer {
		width: 80%;
	}
	.planet {
		width: 150px;
		height: auto;
	}

	.featuresWrapper {
		width: 70%;
		margin-left: auto;
		margin-right: auto;
	}

    .singleFeatureContainerLeft {
        display: flex;
		justify-content: space-between;
		margin-bottom: 4em;
		flex-direction: row;
	}
	.singleFeatureContainerRight {
        display: flex;
		justify-content: space-between;
		margin-bottom: 4em;
		flex-direction: row-reverse;
	}

	.featureImage {
		padding: 2em;
		width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.vueDocsCopy {
		text-align: left;
		padding: 2em;
	}
	.vueDocsCopy h3 {
		font-size: 1.4em;
	}

	.vueDocsCopy p {
		font-size: 1.3em;
	}

	.featuresContainer {
		z-index: 10;
		background-color: rgb(255, 255, 255);
		width: 100%;
	}

	button {
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

	button:hover {
		background: linear-gradient(180deg, rgb(52, 229, 190) 0%, rgba(0,198,154,1) 65%, rgb(70, 239, 200) 100%);
	}

	@media only screen and (max-width: 1350px) {

		.featuresContainer {
			overflow-x: hidden;
		}
        .singleFeatureContainerLeft {
			flex-direction: column-reverse;
       }
       .singleFeatureContainerRight {
			flex-direction: column-reverse;
        }

		.vueDocs {
			padding: 0;
			width: 90%;
        }
	}

	@media only screen and (max-width: 700px) {
        .featuresContainer {
			width: 100%;
		}
		.featuresWrapper {
			width: 90%;
		}

		.featureImage {
			padding: 0;
			width: 100%;
		}
		.vueDocsCopy {
		text-align: center;
		padding: 0;
	}
	}
</style>