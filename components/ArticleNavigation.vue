<template>
    <section class="articleNavigationWrapper">
      <h4> In this Article </h4>

      <div class="navigationLinkWrapper">
        <li v-for="title in newHeaders" :key="title" href="#" class="listElement">
          <a :href="convertText(title)" class="navigationLink"> {{ title }} </a>
        </li>
      </div>

      <!-- <p> {{ newHeaders }} </p> -->
    </section>
  </template>

<script>
export default {
    name: "ArticleNavigation",
    props: {
        newHeaders: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            title: ""
        };
    },
    methods: {
        convertText(htmlId) {
            const newId = htmlId.trim().replace(/\s/g, "");
            console.log(newId);
            return "#" + newId;
        }
    }
};
</script>

  <style scoped>
  h4 {
    padding-top: 105px !important;
    margin-top: 0;
  }

  li {
    line-height: 1.5em;
  }

  .articleNavigationWrapper {
    height: 100vh;
    position: fixed;
    padding-left: 1.5em;
  }

  .navigationLinkWrapper {
    display: flex;
    flex-direction: column;
  }

  .listElement {
    list-style: none;
  }

  .navigationLink {
    list-style: none;
    text-decoration: none;
    color:#34445c;
  }

  .navigationLink:hover {
    color: #4c6182;
  }
  </style>
