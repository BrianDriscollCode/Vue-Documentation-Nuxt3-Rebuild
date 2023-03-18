<template>
    <section class="contentWrapper">
        <div class="mainContent">
            <main class="mainContentContainer">
                <h1> Module 1 - The Learning Process </h1>
                <p> Welcome to the 1st module of the Vue 3 fundamentals
                    course! This module is meant to explain how we
                    envision your journey through our education platform
                    and how to use Vue Reference to complete your courses.
                </p>
                <p>
                    You see, we did not create this course to just spoonfeed
                    you technology information. Rather, we seek to elevate
                    education to the next level! That means creating courses
                    that not only teach you concepts and technical skills,
                    but courses that embody the foremost research in learning.
                </p>

                <p> Start your journey now!!! </p>

                <h2> Section 1: Getting started </h2>

                <NuxtLink class="lessonLink" to="/courses/fundamentals/module-1/1-getting-started"> Getting Started </NuxtLink>

                <CheckMark identifier="module_1_question_1" text="Did you learn about how we will be using both VS code and coding tests to give you a breadth of experience?"> </CheckMark>

                <CheckMark identifier="module_1_question_2" text="Do you understand the philosophy of using reoccurence to hone your knowledge?"> </CheckMark>

                <CheckMark identifier="module_1_question_3" text="Did we show you how to mark sections of the modules as complete?"> </CheckMark>

                <NuxtLink class="lessonLink" to="/courses/fundamentals/module-1/2-how-to-learn"> How to Learn </NuxtLink>

                <CheckMark identifier="module_1_question_4" text="Was it made clear that learning new concepts is only 20% of the process while building applications and solving problems is 80% of the process?"> </CheckMark>

                <CheckMark identifier="module_1_question_5" text="Do you understand the power of taking breaks? Not only while coding, but by taking longer breaks spanning days and even a week or two?"> </CheckMark>

                <NuxtLink class="lessonLink" to="/courses/fundamentals/module-1/3-build-first-app"> Build Your First Application </NuxtLink>

                <CheckMark identifier="module_1_question_6" text="Did you install VS Code?"> </CheckMark>

                <CheckMark identifier="module_1_question_7" text="Did you use NPM to install Vue?"> </CheckMark>

                <CheckMark identifier="module_1_question_8" text="Did you build your first component?"> </CheckMark>

                <button @click="set_module1_section1_Completion"> Mark section 1 as complete </button>

                <h2> Section 2: Trying out the Code Tester </h2>

				<NuxtLink class="lessonLink" to="/courses/fundamentals/module-1/4-first-code-test"> First Code Test </NuxtLink>
                <CheckMark identifier="module_1_question_9" text="Did you complete the coding test?"> </CheckMark>

                <button @click="set_module1_section2_Completion"> Mark section 2 as complete </button>
                <div class="bottomSpacing"> </div>
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
import { definePageMeta } from "~~/.nuxt/imports";
import ArticleNavigation from "~/components/courses/ArticleNavigation.vue";
import { useSupabaseUser } from "~~/.nuxt/imports";
import { $fetch } from "ofetch";

const user = useSupabaseUser();

definePageMeta({
    layout: "courses",
    middleware: "basic-auth"
});

let newHeaders = ["test"];

function set_module1_section1_Completion() {


    console.log(user.value.id);
    $fetch("/api/editModuleCompletion", {
        method: "post",
        body: {
            user: user.value.id,
            module: "module1",
            section: "section_1"
        }
    })
        .then(res => console.log(res));
}

function set_module1_section2_Completion() {


    console.log(user.value.id);
    $fetch("/api/editModuleCompletion", {
        method: "post",
        body: {
            user: user.value.id,
            module: "module1",
            section: "section_2"
        }
    })
        .then(res => console.log(res));
}

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

.lessonLink {
	margin-bottom: 1em;
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