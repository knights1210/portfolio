<template>
  <div>
    <div class="component2">
      <div class="container">
        <p class="transition">Scroll</p>
        <font-awesome-icon class="fa-long-arrow-alt-down" icon="arrow-down" />
      </div>
      <div class="top-content container">
        <h2>PortFolio SAMPLE 2</h2>
        <p>テスト文章テスト文章テスト文章テスト文章テスト文章テスト文章</p>
      </div>
    </div>
    <Body-nav />
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

.component2 {
  margin-top: 58px;
  background-image: url("/onsentop.jpg");
  height: 100vh;
  background-size: cover;
  position: relative;
  & .container {
    width: 1100px;
    margin: 0 auto;
    & .transition {
      position: absolute;
      bottom: 10%;
      right: 50%;
      font-weight: bold;
      font-family: "Kameron", serif;
    }
    & .fa-long-arrow-alt-down {
      position: absolute;
      bottom: 8%;
      right: 51%;
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
    & h2 {
      font-size: 3rem;
      font-family: "Kameron", serif;
    }
    & p {
      font-size: 1.125rem;
    }
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
}
</style>
