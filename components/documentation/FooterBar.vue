<template>
    <div class="footerContainer">
      <hr>
      <div class="footerWrapper">
        <div>
          <span>
            <NuxtLink to="/" class="footerLink">
              Home
            </NuxtLink>
          </span>
          <span>
            <NuxtLink to="/blog" class="footerLink">
              Blog
            </NuxtLink>
          </span>
          <span>
            <NuxtLink to="/free-course" class="footerLink">
              Free Course
            </NuxtLink>
          </span>
          <span>
            <NuxtLink to="/contact" class="footerLink">
              Contact
            </NuxtLink>
          </span>
        </div>

        <div>
          <span> &#169; All Rights Reserved by Vue Reference  </span>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
  .footerContainer {
      margin-top: 2em;
      padding-bottom: 2em;
      font-family: 'Montserrat', sans-serif;
  }

  .footerWrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1em;
  }

  .footerLink {
      text-decoration: none;
      margin-right: 1em;
      color: #4c6182;
  }

  .footerLink:hover {
      color: #202a39;
  }

  </style>
