<template>
    <main class="mainContainer">
        <div class="headerContainer">
            <NavBar />
        </div>

        <section class="">
            <div>
                content
            </div>
            <div>
                categories
            </div>
        </section>

        <div class="footerContainer">
            <hr class="footerLine"/>
            <Footer />
        </div>
    </main>
</template>

<script setup>
import NavBar from "~/components/home/navbar.vue";
import Footer from "~/components/home/footer.vue";
import { useAsyncData, queryContent } from "~~/.nuxt/imports";
// import { computed } from "vue";

let allContent = await useAsyncData("blog", () => queryContent("blog").find());
console.log(allContent.data._rawValue);

// const img = computed(() => {
//     for (let item in allContent) {
//         console.log(allContent[item].body.children[0].children);
//     }

//     return "";
// });
let children = [];
for (let item in allContent.data._rawValue) {
    children.push(allContent.data._rawValue[item].body.children.flat());
}

for (let item in children) {
    let holder = children[item];

    for (let item2 in holder) {
        let subholder = holder[item2].children;

        for (let item3 in subholder) {
            if (subholder[item3].tag === "a") {
                let deepholder = subholder[item3].children;

                for (let item4 in deepholder) {
                    if (deepholder[item4].tag === "img") {
                        console.log(deepholder[item4].props.src);
                    }
                }
            }
        }
    }
}

for (let item in allContent.data._rawValue) {
    console.log(allContent.data._rawValue[item].image.src);
}

console.log(children);

</script>