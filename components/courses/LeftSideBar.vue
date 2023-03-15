<template>
	<section class="leftSideBarContainer">
      <div class="navTitleContainer">
        <p class="navTitle">
          <NuxtLink to="/" class="sideBarTitle">
            Vue<span id="refLogo">Ref</span>
          </NuxtLink>
        </p>
      </div>

        <div>
            <NuxtLink to="/courses/fundamentals" class="leftSideLink"> Course Home </NuxtLink>
        </div>

      <div>
        <li class="navItem">
          <h3 id="startTitle"> Chapter 1 - Learning </h3>
          <NuxtLink to="/courses/fundamentals/module-1/getting-started" class="leftSideLink" @click="$emit('turnOffSideBar')">
            Getting Started
          </NuxtLink>
        </li>
        <li class="navItem">
          <NuxtLink to="/courses/fundamentals/module-1/how-to-learn" class="leftSideLink" @click="$emit('turnOffSideBar')">
            How to Learn
          </NuxtLink>
        </li>
		<li class="navItem">
          <NuxtLink to="/courses/fundamentals/module-1/build-first-application" class="leftSideLink" @click="$emit('turnOffSideBar')">
            Build your first application
          </NuxtLink>
        </li>
      </div>

      <div>
        <h3> Chapter 2 - Basics </h3>
        <li class="navItem">
          <NuxtLink to="/documentation/fundamentals/making-a-component" class="leftSideLink" @click="$emit('turnOffSideBar')">
            Making a Component
          </NuxtLink>
        </li>
		<li class="navItem">
          <NuxtLink to="/documentation/fundamentals/ref-and-reactive" class="leftSideLink" @click="$emit('turnOffSideBar')">
            Ref and Reactive
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
    margin-bottom: 3em;
  }

  .mainLogo {
	width: 40px;
	height: 40px;
  }

  #refLogo {
	font-weight: 700;
	color: #00c69a;
  }

  .sideBarTitle {
	font-size: 1.2em;
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
