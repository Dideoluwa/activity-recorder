<template>
  <div class="overlay" @click="this.closeFormModal">
    <div v-stop-propagation class="modal">
      <h1>Add activity</h1>

      <form class="activity_form" @submit.prevent="submitFormHandler">
        <div class="shipments_select">
          <label>Name</label>
          <div class="input">
            <input
              v-model="name"
              required
              type="text"
              placeholder="Enter name of activity"
              class="input_field"
            />
          </div>
        </div>

        <div class="shipments_select">
          <label>Product description</label>
          <div class="input_textarea">
            <textarea
              v-model="description"
              required
              type="text"
              placeholder="Activity Description"
              class="input_field"
            />
          </div>
        </div>

        <div class="btn" @click="openFormModal">
          <div class="button">
            <button>Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  props: {
    closeFormModal: Function,
  },
  directives: {
    stopPropagation(e) {
      e.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    },
  },
  methods: {
    submitFormHandler() {},
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
    height: 70vh;
    overflow: auto;
    animation: openModal 0.5s ease-in-out forwards;

    h1 {
      text-align: center;
      font-size: 18px;
      margin-top: 24px;
    }

    .activity_form {
      display: flex;
      flex-direction: column;
      gap: 2.8125rem;
      width: 29.1875em;
      margin-top: 22px;

      @media only screen and (max-width: 920px) {
        width: 100%;
        padding: 0px 0.5rem;
      }
      .shipments_select:nth-child(2) {
        height: 6.9375em;

        .input_textarea {
          height: 6.9375em;
          border-radius: 0.3125rem;
          border: 0.0625rem solid #c4c1c1;

          & textarea {
            width: 100%;
            resize: none;
            flex: 1;
            height: 6.75em;
            display: flex;
            border: none;
            border-radius: 0.3125rem;
            padding: 0.875rem 1rem;

            color: $black-color;
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            &:focus {
              outline: none;
            }
          }
        }
      }
      .shipments_select {
        border-radius: 0.625rem;
        width: 100%;
        height: 3.125em;
        gap: 0.625rem;
        display: flex;
        flex-direction: column;

        label {
          color: #606060;
          font-family: Inter;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      .btn {
        width: 100%;
        height: 80px;
        display: flex;

        .button {
          display: flex;
          height: 80px;
          width: 100%;

          button {
            height: 30px;
          }
        }
      }
    }
  }

  @keyframes openModal {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
