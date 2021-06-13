<template>
  <div>
    <myHeader />
    <Nuxt />
    <scrollUp />
    <myFooter />
  </div>
</template>

<style>
html {
  font-family: 'Oswald', Courier, monospace;
  word-spacing: 5px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #4D5156;
  background-color: rgb(241, 241, 241);
  /* text-shadow: 0.3rem 0.3rem 2rem #808080; 一応*/
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.common-layout {
  padding: 5vh 20vh;
  text-align: center;
}
.card {

  margin: 7rem 0;
  padding: 3rem;
  background: rgb(241, 241, 241);
  box-shadow:  -5px -5px 5px rgba(0, 0, 0, 0.1)inset, 5px 5px 5px rgba(0, 0, 0, 0.1)inset;
  /* box-shadow: -2px -2px 5px rgba(255, 255, 255, 1),
              5px 5px 5px rgba(0, 0, 0, 0.1); 凸バージョン*/
  border-radius: 40px;
}
</style>
