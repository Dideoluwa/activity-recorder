<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="overlay" @click="this.closeModal">
    <div v-stop-propagation class="modal">
      <h1>{{ title }}</h1>

      <p>{{ message }}</p>

      <div class="buttons">
        <div class="btn">
          <div class="button">
            <button @click="confirmBtnHandler">{{ confirmBtn }}</button>
          </div>
        </div>

        <div class="btn">
          <div class="button">
            <button @click="declineBtnHandler">{{ declineBtn }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeModal: Function,
    title: String,
    message: String,
    confirmBtn: String,
    declineBtn: String,
    declineBtnHandler: Function,
    confirmBtnHandler: Function,
  },
  directives: {
    stopPropagation(e) {
      e.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  background-color: rgba(196, 196, 196, 0.525);

  .modal {
    margin: auto;
    position: relative;
    padding: 0.3125rem 0.625rem;
    width: 80%;
    border-radius: 12px;
    background-color: #fafafa;
    overflow: auto;
    animation: openModal 0.5s ease-in-out forwards;

    h1 {
      text-align: center;
      font-size: 18px;
      margin-top: 24px;
    }

    p {
      text-align: center;
      font-size: 12px;
      margin-top: 14px;
    }

    .buttons {
      display: flex;
      gap: 10px;
      width: 100%;

      .btn {
        width: 100px;
        display: flex;
        flex: 1;
        height: 80px;

        .button {
          display: flex;
          height: 80px;
          width: 100%;

          button {
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
