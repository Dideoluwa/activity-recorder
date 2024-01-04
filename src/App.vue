<template>
  <div class="app" v-if="setShowModal">
    <div class="nav">
      <nav-bar />

      <Menu class="menu" v-if="this.$store.state.openNav" />
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
  <div v-else class="app">
    <p>Please open on a mobile device</p>
  </div>
</template>

<script>
import NavBar from "./components/nav/NavBar.vue";
import Menu from "./components/menu/MobileSideMenu.vue";

export default {
  name: "App",
  data() {
    return {
      setShowModal: false,
    };
  },
  components: {
    NavBar,
    Menu,
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 920) {
        this.setShowModal = false;
      } else {
        this.setShowModal = true;
      }
    },
  },
  mounted() {
    this.handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", this.handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", this.handleResize);
    };
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap");

@media only screen and (max-width: 920px) {
  .body {
    padding: 5px 15px;
  }

  .menu {
    position: absolute;
    left: 0px;
    z-index: -1;
    width: 100vw;
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
