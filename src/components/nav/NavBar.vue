<template>
  <div class="nav">
    <div class="hamburger" @click="openMenuHandler">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openMenuHandler() {
      this.$store.dispatch("navMenuHandler", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 5px 15px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 55px;
  position: sticky;

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 0.1875rem;

    div {
      background-color: #2b2b2b;
      height: 0.1125rem;
      width: 1.125em;
    }
  }
}
</style>
