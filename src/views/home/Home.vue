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
            viewBox="0 0 32 40"
            x="0px"
            y="0px"
          >
            <title>No Data Found, Not Found, Lost, Searching, Search</title>
            <g data-name="No Data Found, Not Found, Lost, Searching, Search">
              <path
                d="M24.71,24.29a1,1,0,0,0-1-.24l-1.9-1.91a8.52,8.52,0,1,0-.71.71l1.91,1.91a1,1,0,0,0,.24.95l2.2,2.19a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41ZM10.2,21.8a7.5,7.5,0,1,1,10.6,0A7.49,7.49,0,0,1,10.2,21.8Z"
              />
              <path
                d="M11.65,16.35a.48.48,0,0,0,.7,0l.65-.64.65.64a.48.48,0,0,0,.7,0,.48.48,0,0,0,0-.7L13.71,15l.64-.65a.49.49,0,0,0-.7-.7l-.65.64-.65-.64a.49.49,0,0,0-.7.7l.64.65-.64.65A.48.48,0,0,0,11.65,16.35Z"
              />
              <path
                d="M16.65,16.35a.48.48,0,0,0,.7,0l.65-.64.65.64a.48.48,0,0,0,.7,0,.48.48,0,0,0,0-.7L18.71,15l.64-.65a.49.49,0,1,0-.7-.7l-.65.64-.65-.64a.49.49,0,0,0-.7.7l.64.65-.64.65A.48.48,0,0,0,16.65,16.35Z"
              />
              <path
                d="M19.5,18h-8a.5.5,0,0,0,0,1H13v1.5a1.5,1.5,0,0,0,3,0V19h3.5a.5.5,0,0,0,0-1ZM15,20.5a.5.5,0,0,1-1,0V19h1Z"
              />
              <path
                d="M25.5,5A2.5,2.5,0,1,0,28,7.5,2.5,2.5,0,0,0,25.5,5Zm0,4A1.5,1.5,0,1,1,27,7.5,1.5,1.5,0,0,1,25.5,9Z"
              />
              <path
                d="M9,6A2,2,0,1,0,7,8,2,2,0,0,0,9,6ZM6,6A1,1,0,1,1,7,7,1,1,0,0,1,6,6Z"
              />
              <path
                d="M8.5,26H8v-.5a.5.5,0,0,0-1,0V26H6.5a.5.5,0,0,0,0,1H7v.5a.5.5,0,0,0,1,0V27h.5a.5.5,0,0,0,0-1Z"
              />
            </g>
          </svg>

          <p>
            You don't have any activity. Click the "+" button to add an activity
          </p>
        </div>
      </div>
      <div class="home_body_normal" v-else>
        <h1>Added Activities.</h1>
        <div class="home_body_normal_inner">
          <router-link to="/activity">
            <div class="home_body_card">
              <h1>Eating</h1>
              <p>Total this week: 5</p>
            </div></router-link
          >

          <router-link to="/activity">
            <div class="home_body_card">
              <h1>Eating</h1>
              <p>Total this week: 5</p>
            </div></router-link
          >

          <router-link to="/activity">
            <div class="home_body_card">
              <h1>Eating</h1>
              <p>Total this week: 5</p>
            </div></router-link
          >

          <router-link to="/activity">
            <div class="home_body_card">
              <h1>Eating</h1>
              <p>Total this week: 5</p>
            </div></router-link
          >

          <router-link to="/activity">
            <div class="home_body_card">
              <h1>Eating</h1>
              <p>Total this week: 5</p>
            </div></router-link
          >

          <router-link to="/activity">
            <div class="home_body_card">
              <h1>Eating</h1>
              <p>Total this week: 5</p>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddActivityForm from "@/components/menu/AddActivityForm.vue";
export default {
  data() {
    return {
      isEmpty: false,
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

    .home_body_normal {
      h1 {
        font-size: 18px;
        // margin-bottom: 50px;
      }

      .home_body_normal_inner {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 25px;
        gap: 20px;
        height: 450px;
        overflow: auto;

        a {
          animation: slideUp 0.5s ease-in-out forwards;
          text-decoration: none;
          color: #000000;
          display: flex;
          width: calc(50% - 10px);
          .home_body_card {
            display: flex;
            flex: 1;
            box-shadow: 0px 4px 10px rgba(150, 150, 150, 0.2); /* Base shadow */
            transition: box-shadow 0.2s ease-in-out; /* Smooth hover transition */
            justify-content: center;
            padding: 5px 12px;
            height: 150px;
            // background-color: #fac9b5;
            border: 1px solid #f7ae90;
            gap: 12px;
            border-radius: 12px;
            flex-direction: column;

            h1 {
              font-size: 15px;
            }
            p {
              font-size: 12px;
            }
          }
        }

        .home_body_card:hover {
          box-shadow: 0px 6px 15px rgba(150, 150, 150, 0.35); /* Enhanced shadow on hover */
        }
      }

      @keyframes slideUp {
        from {
          transform: translateY(
            100%
          ); /* Start position: move items 100% down */
        }
        to {
          transform: translateY(
            0
          ); /* End position: move items to their original position */
        }
      }
    }
  }
}
</style>
