<template>
	<section class="leftSideBarContainer">
      <div class="navTitleContainer">
        <img src="~/assets/vue_logo.png" class="mainLogo">
        <p class="navTitle">
          <NuxtLink to="/" class="sideBarTitle">
            Vue Reference
          </NuxtLink>
        </p>
      </div>

      <div>
        <li class="navItem">
          <h3 id="startTitle"> Start Here </h3>
          <NuxtLink to="/documentation" class="leftSideLink">
            Introduction
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/getting-started" class="leftSideLink">
            Getting Started
          </NuxtLink>
        </li>
      </div>

      <div>
        <h3> Vue Fundamentals </h3>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/making-a-component" class="leftSideLink">
            Making a Component
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/computed-properties" class="leftSideLink">
            Computed Properties
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/basic-routing" class="leftSideLink">
            <del>Basic Routing</del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/props" class="leftSideLink">
            Props
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/lifecycle" class="leftSideLink">
            Lifecycle
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/directives" class="leftSideLink">
            Directives
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/event-handling" class="leftSideLink">
            Event Handling
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/conditional-rendering" class="leftSideLink">
            Conditional Rendering
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/emitted-events" class="leftSideLink">
            Emitted Events
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/v-model" class="leftSideLink">
            V-Model
          </NuxtLink>
        </li>
      </div>

      <div>
        <h3> Vue In-Depth </h3>
        <li class="navItem">
          <NuxtLink to="/documentation/intermediate/slots" class="leftSideLink">
            Slots
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/intermediate/provide-and-inject" class="leftSideLink">
            Provide and Inject
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/intermediate/attribute-inheritance" class="leftSideLink">
            <del> Attribute Inheritance </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/async-components" class="leftSideLink">
            <del> Async Components </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/intermediate/vue-api-reference" class="leftSideLink">
            <del> Vue API Reference </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/intermediate/reactivity-and-state" class="leftSideLink">
            <del> Reactivity and State </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/intermediate/working-inline-the-template" class="leftSideLink">
            <del> Working Inline the Template </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/documentation/intermediate/shared-state-solution" class="leftSideLink">
            <del> Shared State Solution </del>
          </NuxtLink>
        </li>
      </div>

      <div>
        <h3> Reusability </h3>
        <li class="navItem">
          <NuxtLink to="documentation/composables" class="leftSideLink">
            <del> Composables </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/custome-directive" class="leftSideLink">
            <del> Custom Directive </del>
          </NuxtLink>
        </li>
      </div>

      <div>
        <h3> Tooling and Pre-Built Components </h3>
        <li class="navItem">
          <NuxtLink to="documentation/custom-directives" class="leftSideLink">
            <del> Custom Directives </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/transition" class="leftSideLink">
            <del> Transition </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/transition-group" class="leftSideLink">
            <del> Transition Group </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/keep-alive" class="leftSideLink">
            <del> Keep Alive </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/teleport" class="leftSideLink">
            <del> Teleport </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/suspense" class="leftSideLink">
            <del> Suspense </del>
          </NuxtLink>
        </li>
      </div>

      <div>
        <h3> Composition API </h3>
        <li class="navItem">
          <NuxtLink to="documentation/composition-setup" class="leftSideLink">
            <del> Setup </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/composition-core" class="leftSideLink">
            <del> Core </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/composition-utilities" class="leftSideLink">
            <del> Utilities </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/composition-composition" class="leftSideLink">
            <del> Composition </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/composition-misc" class="leftSideLink">
            <del> Misc </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/composition-component-instance" class="leftSideLink">
            <del> Component Instance </del>
          </NuxtLink>
        </li>
      </div>

      <div class="lastItemsContainer">
        <h3> Component Examples </h3>
        <li class="navItem">
          <NuxtLink to="documentation/banner" class="leftSideLink">
            <del> Banner </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/article-preview" class="leftSideLink">
            <del> Article Preview </del>
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="documentation/multiple-layout" class="leftSideLink">
            <del> Multiple Layout </del>
          </NuxtLink>
        </li>
      </div>
    </section>
  </template>

<script setup>
</script>

  <style scoped>

  .navTitleContainer {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    margin-bottom: 3em;
  }

  .mainLogo {
	width: 40px;
	height: 40px;
  }

  .sideBarTitle {
    text-decoration: none;
    color: #34445c;
  }

  .navTitle {
    font-size: 16px;
    font-weight: 600;
    color: #34445c;
  }

  h3 {
    font-size: 15px;
    font-weight: 700;
	margin-top: 2.5em;
    margin-bottom: 0.5em;
    color: #34445c;
  }

  .startTitle {
	margin-top: 0;
  }

  .leftSideBarContainer {
    height: 100vh;
    padding: 0 1em 0 1em;
    overflow: scroll;
    overflow-x: hidden;
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
    border-radius: 10px;
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .navItem {
    list-style: none;
    list-style-type: none;
    padding: none;
  }

  .leftSideLink {
    color:#4c6182;
    text-decoration: none;
  }

  .leftSideLink:hover {
    color:#202a39;
    font-weight: 500;
    text-decoration: underline;
  }

  li {
    font-size: 14px;
    line-height: 1.7em;
    color: #346c6a;
  }

  .lastItemsContainer {
    margin-bottom: 6em;
  }

  </style>
