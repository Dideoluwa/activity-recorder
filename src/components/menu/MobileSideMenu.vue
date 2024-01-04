<template>
  <div class="overlay" @click="closeMenuHandler">
    <div v-stop-propagation class="modal">
      <!-- {/* logo */} -->
      <div class="modal_logo">
        <div class="modal_logo_inner">
          <img src="../../assets/logo.png" alt="logo" />
        </div>
      </div>

      <div class="side_menu_links">
        <router-link to="/">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="15"
              height="15"
              rx="7.5"
              fill="#f7ae90"
              fill-opacity="0.8"
            />
          </svg>
          <p>Home</p>
        </router-link>
      </div>

      <div class="logout_container" @click="logOutHandler">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="15"
            height="15"
            rx="7.5"
            fill="#f7ae90"
            fill-opacity="0.8"
          />
        </svg>

        <p>Logout</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    stopPropagation(e) {
      e.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    },
  },
  methods: {
    closeMenuHandler() {
      this.$store.dispatch("navMenuHandler", false);
    },
    logOutHandler() {
      this.$store.dispatch("clearSignUpDetails");
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  height: 100vh;
  top: 0px;
  // left: 0px;
  z-index: 100;
  width: 100%;
  background-color: rgba(196, 196, 196, 0.525);

  .modal {
    position: relative;
    padding: 0.3125rem 0.625rem;
    width: 100%;
    background-color: #fafafa;
    height: 40vh;
    overflow: auto;

    .modal_logo {
      display: flex;
      width: 9.3125em;
      height: 3.6875em;
      margin-bottom: 1.25rem;

      .modal_logo_inner {
        width: 100%;
        display: flex;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .side_menu_links {
      width: 100%;
      flex-shrink: 0;

      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.375rem;

      .router-link-active {
        background-color: #f7ae90;

        svg {
          fill: #fafafa;
          rect {
            fill: #fafafa;
          }
        }
        p {
          color: white;
        }
      }
      & a {
        display: flex;
        width: 100%;
        height: 3.125em;
        flex-shrink: 0;
        border-radius: 0.3125rem;
        align-items: center;
        text-decoration: none;

        p {
          font-family: Inter;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: rgba(54, 53, 57, 0.65);
        }

        svg {
          margin: 0rem 0.5rem;
        }
      }
    }
    .logout_container {
      display: flex;
      cursor: pointer;
      width: 100%;
      height: 3.125em;
      flex-shrink: 0;
      border-radius: 0.3125rem;
      align-items: center;
      text-decoration: none;

      p {
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: rgba(54, 53, 57, 0.65);
      }
      svg {
        margin: 0rem 0.5rem;
      }
    }
  }
}
</style>
