<template>
    <div class="documentationContainer">
      <aside class="leftSideBar">
        <LeftSideBar />
      </aside>

      <section class="documentationView">
        <TopBar />

        <div class="content">
          <!-- <TopBar /> -->
          <slot />
        </div>
      </section>
    </div>
  </template>

<script>
import LeftSideBar from "../components/leftSideBar.vue";
import TopBar from "../components/topBar.vue";

export default {
    name: "DocumentationLayout",
    components: {
        LeftSideBar,
        TopBar
    }
};
</script>

  <style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,600;0,700;0,800;1,100;1,300;1,400;1,500;1,700&display=swap');

  .documentationContainer {
    display: flex;
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(255, 255, 255);
  }

  /* Navigation */

  .leftSideBar {
    background-color: rgb(248, 248, 255);
    width: 18%;
  }

  .documentationView {
    width: 82%;
    height: 100vh;
  }

  /* Content */

  .content {
    height: 100vh;
  }

  </style>
