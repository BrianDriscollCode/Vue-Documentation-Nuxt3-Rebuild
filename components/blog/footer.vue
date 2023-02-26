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
              <del>Blog</del>
            </NuxtLink>
          </span>
          <span>
            <NuxtLink to="/free-course" class="footerLink">
              <del>Free Course</del>
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
	background-color: #202a39;
	position: absolute;
	bottom: 0;
      margin-top: 2em;
      padding-bottom: 2em;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
      color: white;
  }

  .footerWrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1em;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
  }

  .footerLink {
      text-decoration: none;
      margin-right: 1em;
      color: #ffffff;
  }

  .footerLink:hover {
      color: #00c872;
  }

  hr {
	margin: 0;
  }

  .footerComponent {
		margin-left: auto;
		margin-right: auto;
		width: 70%;
	}

  @media only screen and (max-width: 1350px) {
     .footerWrapper {
		flex-direction: column;
		text-align: center;
     }

     .links {
		margin-bottom: 1em;
     }

     .footerLink {
		margin-right: .5em;
     }
}

  </style>
