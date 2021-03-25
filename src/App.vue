<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <div class="container">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/layouts/navbar/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #071f3a;
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  position: relative;
  margin-top: 100px;
  .content {
    display: block;
    width: 100%;
  }
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
