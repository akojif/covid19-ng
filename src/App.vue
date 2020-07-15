<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// Slabo and Roboto Font Url Link
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,300&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

:root {
  --main-bg-color: #e5e5e5;
  --primary-bg-color: #212b45;
  --primary-text-color: #ffffff;
  --white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
}
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-secondary {
  color: var(--main-bg-color);
  font-size: 1.6rem;
}
</style>
