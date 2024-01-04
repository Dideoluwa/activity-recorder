<template>
  <div class="app">
    <div class="nav">
      <nav-bar />

      <!-- <Menu
        class="menu"
        :class="{
          open: this.$store.state.openNav,
        }"
      /> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/nav/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap");

@media only screen and (max-width: 920px) {
  .menu {
    position: absolute;
    left: 0;
    z-index: -1;
    max-width: 0px;
    transition: max-width 0.1s ease-in-out;
  }

  .open {
    z-index: 1000;
    max-width: 100vw;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-family: "Moderat", "Inter";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
}
</style>
