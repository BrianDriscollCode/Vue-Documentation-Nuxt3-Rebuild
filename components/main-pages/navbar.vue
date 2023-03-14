<template>
    <div class="navigationContainer">
        <NavigationMinimized
                    :class="!toggleNavigationMinimized ? 'topNavigationMinimized': 'topNavigationMaximized'"
                    :display="toggleNavigationMinimized"
        />
        <div class="navigationWrapper">
            <NuxtLink to="/" class="logoTitle"><p> Vue<span id="logoName">Ref</span> </p></NuxtLink>

            <ul class="navigationList">
                <li> <NuxtLink to="/" class="navLink"> Home </NuxtLink> </li>
                <li> <NuxtLink to="/documentation" class="navLink"> Documentation </NuxtLink> </li>
                <li> <NuxtLink to="/blog" class="navLink"> Blog </NuxtLink> </li>
                <li> <NuxtLink to="/free-course" class="navLink"> Free Course </NuxtLink>  </li>
            </ul>

            <div class="searchButtonContainer">
                <NuxtLink to="/login" class="loginLinks" v-if="!user"> Login </NuxtLink>
                <NuxtLink to="/login" class="loginLinks" v-else> {{ user.user_metadata.first_name }} </NuxtLink>
                <a href="https://twitter.com/BrianDrisBuilds" target="_blank">
                    <img src="~/assets/twitter.png" class="twitter"/>
                </a>
                <a href="https://www.linkedin.com/in/brianrdriscoll/" target="_blank">
                    <img src="~/assets/linkedIn.png" class="linkedIn"/>
                </a>
                    <TopBarHamburger class="topHamburger" @click="toggleNavigation" :display="toggleNavigationMinimized" />
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import NavigationMinimized from "~/components/NavigationMinimized.vue";
import TopBarHamburger from "../documentation/TopBarHamburger.vue";
import { useSupabaseUser } from "~~/.nuxt/imports";

const user = useSupabaseUser();
console.log(user);


let toggleNavigationMinimized = ref(false);

function toggleNavigation() {
    toggleNavigationMinimized.value = !toggleNavigationMinimized.value;
}
</script>

<style scoped>
    .logoTitle {
        text-decoration: none;
        color: white;
    }
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

    .loginLinks {
        color: white;
        margin-right: 1em;
        text-decoration: none;
    }

    .loginLinks:hover {
        color : #00c69a;
    }

    .twitter {
        width: 20px;
        height: 20px;
        margin-right: 1em;
    }

    .linkedIn {
        width: 22px;
        height: 22px;
        margin-right: 0em;
    }

    .hamburgerHome {
        width: 33px;
        height: 33px;
        z-index: 100;
        position: relative;
    }

    .topNavigationMinimized {
        height: 0;
        transition: height 0.5s;
        top: 0;
        display: block;
    }

    .topHamburger {
        display: none;
        position: absolute;
        z-index: 6;
    }

.topNavigationMaximized {
    height: 70vh;
    transition: height 0.5s;
    top: 0;
    display: block;
}

    @media only screen and (max-width: 1335px) {
        .navigationWrapper {
            width: 90%;
        }
    }

    @media only screen and (max-width: 1000px) {
        .navigationList {
            display: none;
        }
        .hamburgerHome {
            display: block;
        }
        .topHamburger {
            display: block;
            position: absolute;
            z-index: 100;
            right: .5em;
            top: 8px;
            border-radius: 5px;
        }
        .twitter {
            margin-right: 1em;
        }
        .linkedIn {
            width: 25px;
            height: 25px;
            margin-right: 1em;
        }
        .loginLinks {
            display: none;
        }
    }

    @media only screen and (max-width: 500px) {
        .twitter {
            display: none;
        }

        .linkedIn {
            display: none;
        }
    }
</style>