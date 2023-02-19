<template>
    <div class="footerContainer">
      <hr>
      <div class="footerWrapper">
        <div class="links">
          <span>
            <NuxtLink to="/" class="footerLink">
              Home
            </NuxtLink>
          </span>
          <span>
            <NuxtLink to="/documentation" class="footerLink">
              Documentation
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
        </div>

        <div>
          <span> &#169; All Rights Reserved by VueReference  </span>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
  .footerContainer {
	background-color: #ffffff;
      margin-top: 2em;
      padding-bottom: 2em;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
      color: rgb(51, 51, 51);
  }

  .footerWrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1em;
      width: 95%;
      margin-left: auto;
      margin-right: auto;
  }

  .footerLink {
      text-decoration: none;
      margin-right: 1em;
      color: #282828;
  }

  .footerLink:hover {
      color: #1abb7d;
  }

  hr {
	margin: 0;
  }

  @media only screen and (max-width: 1580px) {
      .footerWrapper {
		flex-direction: column;
		text-align: center;
      }
      .links {
		margin-bottom: 1em;
      }
  }

  @media only screen and (max-width: 1350px) {
     .footerWrapper {
		flex-direction: column;
		text-align: center;
		width: 95%;
     }

     .links {
		margin-bottom: 1em;
     }

     .footerLink {
		margin-right: .5em;
     }
}

  </style>
