<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="activity">
    <div class="activity_nav">
      <router-link to="/">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_1833)">
              <path
                d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22198L13.192 5.63598L7.828 11Z"
                fill="#f7ae90"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_1833">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg></div
      ></router-link>

      <p>Click the 'finished' button when the activity has been done</p>
    </div>

    <div class="activity_header">
      <h1>Eating Food</h1>

      <p>
        I love eating healthy everyday, so I have a target to eat at least 14
        times a day. 0-0-1 don tire me. LOL
      </p>
    </div>

    <div class="activity_body">
      <div class="buttons">
        <div class="btn">
          <div class="button">
            <button>Finished "Eating food"</button>
          </div>
        </div>

        <div class="btn">
          <div class="button">
            <button>Revert (Mistake)</button>
          </div>
        </div>
      </div>

      <div class="activity_stats">
        <h1>Daily Stats</h1>
        <div class="activity_stats_wrapper">
          <div class="home_body_card">
            <h1>Today</h1>
            <p>3 Times</p>
          </div>

          <div class="home_body_card">
            <h1>Yesterday</h1>
            <p>3 Times</p>
          </div>

          <div class="home_body_card">
            <h1>Highest this week</h1>
            <p>Tuesday</p>
          </div>

          <div class="home_body_card">
            <h1>Compared to yesterday</h1>
            <p>50% increase</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  method: {},
};
</script>

<style lang="scss" scoped>
.activity {
  display: flex;
  flex-direction: column;
  width: 100%;
  .activity_nav {
    display: flex;
    align-items: center;
    gap: 12px;

    p {
      align-items: center;
      font-size: 12px;
      text-align: center;
    }
    a {
      display: flex;
      align-items: center;
      div {
        width: 30px;
        margin-top: 10px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #f7ae90;
        border-radius: 50%;
      }
    }
  }

  .activity_header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    border-radius: 12px;
    background-color: #e6f6ff;
    padding: 15px 12px;
    margin: auto;
    margin-top: 12px;
    h1 {
      font-size: 18px;
      text-align: center;
    }

    p {
      font-size: 12px;
      text-align: center;
    }
  }

  .activity_body {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

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

    .activity_stats {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 25px;
      h1 {
        font-size: 18px;
        text-align: center;
      }
      .activity_stats_wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 25px;

        .home_body_card {
          animation: slideUp 0.5s ease-in-out forwards;
          width: 160px;
          box-shadow: 0px 4px 10px rgba(150, 150, 150, 0.2); /* Base shadow */
          transition: box-shadow 0.2s ease-in-out; /* Smooth hover transition */
          // flex: 1;
          justify-content: center;
          padding: 5px 12px;
          height: 150px;
          display: flex;
          // background-color: #fac9b5;
          border: 1px solid #e6f6ff;
          gap: 12px;
          border-radius: 12px;
          flex-direction: column;

          h1 {
            font-size: 15px;
            text-align: start;
          }
          p {
            font-size: 12px;
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
