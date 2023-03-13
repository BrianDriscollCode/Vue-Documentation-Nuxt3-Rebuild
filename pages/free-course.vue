<template>
    <main>
        <div class="headerContainer">
            <NavBar />
        </div>
        <video class="background_video" autoplay muted loop >
            <source src="~/assets/ocean_video_1.mp4" type="video/mp4" >
        </video>
        <div class="heroBanner">
            <div class="heroWrapper">
                <div class="titleWrapper">
                    <h1> Vue 3 Fundamentals Course, 100% Free Forever </h1>
                </div>
                <div class="descriptionSection">
                    <div class="description">
                        <div class="descriptionWrapper">
                            <h2> Learn the easy way! Explanations that stick. Concepts that last. Built for learners, by learners, turning students into Vue Developers!</h2>
                            <ul>
                                <li class="listItem"> Video tutorials that show you each concept and take you every step of the way</li>
                                <li class="listItem"> Coding challenges to practice your skills and ingrain concepts </li>
                                <li class="listItem"> Gamified learning to motivate you to keep going. Compete against others! </li>
                                <li class="listItem"> A course built on fundamental learning principles so you learn efficiently and retain</li>
                            </ul>
                        </div>
                    </div>
                    <div class="userInfoContainer" :style="successState ? 'display: flex; align-items: center': ''">
                        <div class="userInfoWrapper">
                            <CollectEmail v-on:successEvent="activateSuccessState"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <FeaturesSection />
        </div>
    </main>
</template>

<script setup>
import NavBar from "../components/main-pages/navbar.vue";
import CollectEmail from "../components/collectEmail.vue";
import FeaturesSection from "../components/free-course-page/featuresSection.vue";
import { ref } from "vue";

let successState = ref(false);

function activateSuccessState() {
    console.log("activate success function");
    successState.value = true;
}

</script>

<style scoped>
.headerContainer {
    position: fixed;
    z-index: 3;
}
.heroBanner {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100vh;
    background-color: rgba(1,1,1, 0.7);
    z-index: 2;
    position: absolute;
}

.heroWrapper {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    color: white;
    padding-top: 6em;
}

.background_video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
}

h1 {
    font-size: 3.5em;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.84);
}

h2 {
    margin-top: 0;
    font-size: 3em;
}

ul {
    padding-left: 1em;
}

.titleWrapper {
    text-align: center;
}
.descriptionSection {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 4em;
}

.description {
    width:60%;
    margin-right: 2em;
    border: 1px solid white;
    background-color: rgba(1,1,1, 0.7);
    border-radius: 5px;
}

.descriptionWrapper {
    padding: 2em;
}

.userInfoContainer {
    background-color: #34445c;
    border-radius: 5px;
}

.listItem {
    padding-top: 1.2em;
}
.userInfoWrapper {
    padding: 1em;
}

@media only screen and (max-width: 2172px) {
    h2 {
        font-size: 2.2em;
    }

    .listItem {
        font-size: 1.4em;
    }
}

@media only screen and (max-width: 2014px) {
    h2 {
        font-size: 1.7em;
    }

    .listItem {
        font-size: 1.2em;
    }

    .heroWrapper {
        padding-top: 4em;
    }
}
@media only screen and (max-width: 1735px) {
    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 1.7em;
    }

    .listItem {
        font-size: 1.2em;
    }

    .heroWrapper {
        padding-top: 4em;
    }
}

@media only screen and (max-width: 1390px) {

    .heroBanner {
        height: initial;
    }
    .description {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 4em;

    }
    .descriptionSection {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 4em;
    }

    .userInfoContainer {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
    }
    .userInfoWrapper {
        width: 100%;
        padding: 0;
    }
}

@media only screen and (max-width: 990px) {

    h1 {
        font-size: 2.5em;
    }
    .description {
        width: 80%;

    }

    .userInfoContainer {
        width: 80%;
    }
}

@media only screen and (max-width: 600px) {

    h1 {
        font-size: 1.9em;
    }
    .description {
        width: 95%;
        text-align: center;

    }

    h2 {
        font-size: 1.3em;
    }

    .userInfoContainer {
        width: 95%;
    }
}


</style>