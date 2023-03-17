<template>
    <section class="contentWrapper">
        <div class="mainContent">
            <main class="mainContentContainer">
                <h1> Vue 3 Fundamentals Course </h1>
                <p> Welcome! This course will teach you the fundamental concepts needed by every
                    Vue developer.
                </p>
                <h2> Module 1 </h2>
                <p> This is an explanation of the 1st module. </p>
                <ProgressBar :width="moduleOneProgress"/>
                <NuxtLink to="/courses/fundamentals/module-1"> Go to module 1</NuxtLink>
                <h2> Module 2 </h2>
                <p> This is an explanation of the 1st module. </p>
                <ProgressBar :width="moduleTwoProgress" />
                <div class="bottomSpacing"> </div>
                <button @click="seeStore"> Check Completion Object </button>
            </main>
        </div>

        <div class="articleNavigationContainer">
            <CheckMark />
            <ArticleNavigation
                :new-headers="newHeaders"
            />
        </div>
    </section>
</template>

<script setup>
import { definePageMeta, useSupabaseUser } from "~~/.nuxt/imports";
import ArticleNavigation from "~/components/courses/ArticleNavigation.vue";
import ProgressBar from "~~/components/courses/ProgressBar.vue";
import { $fetch } from "ofetch";
import { ref } from "vue";
import { useCourseCompletionStore } from "~~/stores/contentStore";

const completionStore = useCourseCompletionStore();
const user = useSupabaseUser();
let moduleOneProgress = ref(0);
let moduleTwoProgress = ref(0);

let completionObject;

definePageMeta({
    layout: "courses",
    middleware: "basic-auth"
});

let newHeaders = ["Fundamentals Course", "Module 1", "Module 2"]; //passed as prop to "ArticleNavigation" component


async function checkModuleCompletion() {
    await $fetch("/api/checkModuleCompletion", {
        method: "post",
        body: {
            user: user.value.id
        }
    })
        .then(res => {
            if (res.body == "[]")
            {
                console.log("res");
                $fetch("/api/insertModuleCompletion", {
                    method: "post",
                    body: {
                        user: user.value.id
                    }
                })
                    .then(checkModuleCompletion())
                    .catch(res => console.log(res, " -[] error"));
            }
            else if (res.statusCode === 200)
            {
                completionObject = JSON.parse(res.body);
                completionObject = completionObject[0].module_progress[0];
                completionStore.changeCompletionStatus(completionObject);
                console.log(completionObject);
                checkCurrentCompletionObject();
            }
            else
            {
                console.log("No idea");
            }
        })
        .catch(error => console.log(error, "-catch error"));
}

if (completionStore.completionStatus !== {}) {
    checkModuleCompletion();
}


function checkCurrentCompletionObject() {
    console.log(completionObject.module1);

    let numberOfProperties = 0;
    let sectionsCompleted = 0;

    for (let item in completionObject.module1) {
        numberOfProperties += 1;

        if (completionObject.module1[item] == true) {
            sectionsCompleted += 1;
        }
    }

    moduleOneProgress.value = Math.round((sectionsCompleted / numberOfProperties) * 100);

    numberOfProperties = 0;
    sectionsCompleted = 0;
    for (let item in completionObject.module2) {
        numberOfProperties += 1;

        if (completionObject.module2[item] == true) {
            sectionsCompleted += 1;
        }
    }

    moduleTwoProgress.value = Math.round((sectionsCompleted / numberOfProperties) * 100);
}

function seeStore() {
    completionStore.seeCompletionStatus();
}

// async function editCompletionTable() {
//     completionObject.module1 = true;

//     await $fetch("/api/editModuleCompletion", {
//         method: "post",
//         body: {
//             user: user.value.id
//         }
//     })
//         .then(res => console.log(res));
// }

//checkCurrentCompletionObject();
</script>

<style scoped>

:deep(h1) {
    padding-top: 100px !important;
    margin-top: 0;
    font-size: 1.7em;
}

:deep(p) {
    line-height: 1.5em;
}

:deep(mark) {
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgb(210, 210, 255);
}

:deep(pre) {
 background-color: rgb(41, 47, 59);
 padding: 1.3em;
 display: flex;
 justify-content: center;
 margin-left: auto;
 margin-right: auto;
 border-radius: 10px;
 overflow-x: auto;
}

:deep(code) {
    width: 100%;
    font-size: 15px;
}

:deep(h2 a) {
    color: rgb(14, 13, 13);
    text-decoration: none;
}

:deep(h3 a) {
    color: rgb(14, 13, 13);
    text-decoration: none;
}

:deep(h4 a) {
    color: rgb(14, 13, 13);
    text-decoration: none;
}

:deep(img) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}
.contentWrapper {
    margin: 0 auto 0 auto;
    width: 100%;
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: row;
}

.documentationContainer {
    /* background-color: bisque; */
    width: 100%;
}

.mainContent {
    width: 100%;
    overflow: auto;
    height: 100vh;
}

.mainContentContainer {
    width: 65%;
    height: 100vh;
    margin: 0 auto 0em auto;
}

.imageContainer {
  display: flex;
  justify-content: center;
}

.bottomSpacing {
    padding-top: 2em;
}

.lastElement {
    padding-bottom: 2em;
}

::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

/* Article Navigation */

.articleNavigationContainer {
    /* background-color: chartreuse; */
    width: 25%;
}

@media only screen and (max-width: 1135px) {
    .mainContent {
    width: 100%;
    height: 100vh;
    }
    .articleNavigationContainer {
        display: none;
    }
    .mainContentContainer {
        width: 80%;
    }
}

@media only screen and (max-width: 1000px) {
    :deep(img) {
        width: 100%;
    }
}

@media only screen and (max-width: 1000px) {
    .mainContentContainer {
        width: 95%;
    }
}
</style>