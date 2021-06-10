<template>
  <div class="bg-black">
    <div class="component2">
      <div class="container">
        <p class="transition">Scroll</p>
        <font-awesome-icon class="fa-long-arrow-alt-down" icon="arrow-down" />
      </div>
      <div class="top-content container">
        <h1>PortFolio SAMPLE 2</h1>
        <p>都会の喧騒から離れて、当旅館で癒やされませんか？</p>
      </div>
    </div>
    <Body-nav />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import BodyNav from "../components/sample2/BodyNav.vue";

export default {
  name: "Component2",
  components: {
    BodyNav,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kameron&display=swap");
.bg-black {
  background-color: black;
}
.component2 {
  margin-top: 58px;
  background-image: url("/onsentop.jpg");
  height: 100vh;
  background-size: cover;
  position: relative;
  & .container {
    max-width: 1100px;
    margin: 0 auto;
    & .transition {
      position: absolute;
      bottom: 12%;
      left: 50%;
      transform: rotate(90deg);
      font-weight: bold;
      font-family: "Kameron", serif;
    }
    & .fa-long-arrow-alt-down {
      position: absolute;
      bottom: 13%;
      left: 48%;
      transform: translateX(-48%);
      font-weight: bold;
      color: black;
      font-size: 30px;
      animation-name: bounce;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
      animation-duration: 1s;
    }
  }
  & .top-content {
    margin-top: 20%;
    width: auto;
    text-align: center;
    & h1 {
      font-size: 3rem;
      font-family: "Kameron", serif;
      text-shadow: 1px 1px 0 white;
    }
    & p {
      display: inline-block;
      text-shadow: 3px 3px 1px lightgray;
      font-size: 1.125rem;
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: 5px;
      padding: 5px;
      backdrop-filter: blur(2.5px);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}

@keyframes bounce {
  0%,
  40%,
  100% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(10px);
  }
}

@media (max-width: 600px) {
  .component2 {
    margin-top: 0;
    background-position: 30% bottom;
    & .container {
      & .transition {
        bottom: 35%;
        left: 46%;
        margin: 0;
      }
      & .fa-long-arrow-alt-down {
        bottom: 30%;
        // left: 50%;
        // transform: translateX(-50%);
      }
    }
    & .top-content {
      & h1 {
        font-size: 2rem;
      }
      & p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
