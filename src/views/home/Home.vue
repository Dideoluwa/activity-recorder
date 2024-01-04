<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <add-activity-form v-if="isModalOpen" :closeFormModal="closeActivityForm" />
  <div class="home">
    <div class="home_header">
      <div class="home_header_title">
        <h1>Hi, Dara</h1>
      </div>

      <div class="btn" @click="openFormModal">
        <div class="button">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_784)">
                <path
                  d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_784">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="home_body">
      <div class="home_body_empty" v-if="isEmpty">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 32 40"
            style="enable-background: new 0 0 32 32"
            xml:space="preserve"
          >
            <g>
              <path
                d="M27.28,25.86C29.59,23.22,31,19.78,31,16c0-8.27-6.73-15-15-15S1,7.73,1,16s6.73,15,15,15c3.78,0,7.22-1.41,9.86-3.72   l3.43,3.43C29.49,30.9,29.74,31,30,31s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L27.28,25.86z M12,11c1.1,0,2,0.9,2,2   s-0.9,2-2,2s-2-0.9-2-2S10.9,11,12,11z M21,20.91c-0.13,0.06-0.27,0.09-0.4,0.09c-0.38,0-0.75-0.22-0.92-0.6   C19.03,18.94,17.58,18,16,18s-3.03,0.94-3.68,2.41c-0.22,0.5-0.81,0.74-1.32,0.51c-0.5-0.22-0.73-0.81-0.51-1.32   C11.46,17.41,13.63,16,16,16s4.54,1.41,5.5,3.59C21.73,20.1,21.5,20.69,21,20.91z M20,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2   S21.1,15,20,15z"
              />
            </g>
          </svg>

          <p>
            You don't have any activity. Click the "+" button to add an activity
          </p>
        </div>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import AddActivityForm from "@/components/menu/AddActivityForm.vue";
export default {
  data() {
    return {
      isEmpty: true,
      isModalOpen: false,
    };
  },
  components: {
    AddActivityForm,
  },
  methods: {
    openFormModal() {
      this.isModalOpen = true;
    },
    closeActivityForm() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  .home_header {
    display: flex;
    align-content: center;
    justify-content: space-between;

    .home_header_title {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 18px;
      }
    }

    .btn {
      width: 110px;
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

  .home_body {
    display: flex;
    flex-direction: column;

    .home_body_empty {
      display: flex;
      margin-top: 100px !important;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: auto;

      div {
        display: flex;
        flex-direction: column;
        margin: auto;

        svg {
          margin: auto;
          width: 220px;
          height: 220px;
        }

        p {
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
}
</style>
