<template>
	<div class="featuresContainer" >
			<div class="featuresWrapper">
				<div class="featureTitleContainer">
					<h3 data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"> (In development) </h3>
					<h2 data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"> Learning  Vue is a process, and we have it <span style="border-bottom: 2px solid #34445c;">mapped out</span> </h2>
				</div>

				<div class="singleFeatureContainerLeft">
					<div class="vueDocsCopy">
                        <h3 data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"> Vue 3 Documentation </h3>
						<p data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"> Specifically made to support your learning journey.
							No need to buy an expensive textbook or course, it's all right here so
							you can be 100% confident you have the reference materials you need!
                        </p>
					</div>
                    <img src="~/assets/vueDocs.jpg" class="vueDocs" data-aos="zoom-in-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"/>
                </div>

				<div class="singleFeatureContainerRight">
					<div class="vueDocsCopy">
                        <h3 data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"> Free Course </h3>
						<p data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"> Learn the basics of Vue, Vue Router, and more using our free course.
							We utilize video learning, practice materials, and coding exercises to
							get you from a ZERO to making your own single page applications!
						</p>
					</div>
                    <img src="~/assets/vueDocs.jpg" class="vueDocs" data-aos="zoom-in-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"/>
                </div>

				<div class="singleFeatureContainerLeft">
						<div class="vueDocsCopy">
							<h3 data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"> Videos </h3>
							<p data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"> Tutorials bringing you through the process, step-by-step, showing
								you how to use Vue features, build well-organized applications, and apply coding-tricks
								and much more.
							</p>
						</div>
						<img src="~/assets/vueDocs.jpg" class="vueDocs" data-aos="zoom-in-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500"/>
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
	}

	.featuresWrapper h2 {
		font-size: 2.3em;
		padding-top: 2em;
		margin-top: 0;
		margin-bottom: 4em;
	}

	.featureTitleContainer {
		text-align: center;
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

	.vueDocs {
		padding: 2em;
		width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.vueDocsCopy {
		text-align: center;
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

	@media only screen and (max-width: 1350px) {
        .singleFeatureContainerLeft {
			flex-direction: column;
       }
       .singleFeatureContainerRight {
			flex-direction: column;
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
		.vueDocsCopy {
		text-align: center;
		padding: 0;
	}
	}
</style>