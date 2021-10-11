<template>
  <div class="header">
    <router-link to="/" exact><h1>My Port Folio</h1></router-link>
    <!-- <p>駆け出しエンジニア</p> -->
    <ul class="menu">
      <li>
        <v-btn
          to="/component1"
          active-class="btn"
          color="blue-grey darken-4"
          elevation="2"
          outlined
          exact
          >SAMPLE1</v-btn
        >
      </li>
      <li>
        <v-btn
          to="/component2"
          active-class="btn"
          color="blue-grey darken-4"
          elevation="2"
          outlined
          >SAMPLE2</v-btn
        >
      </li>
      <li>
        <v-btn
          to="/component3"
          active-class="btn"
          color="blue-grey darken-4"
          elevation="2"
          outlined
          exact
          >SAMPLE3</v-btn
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ranchers&display=swap");

.header {
  position: fixed;
  display: flex;
  background-color: rgb(59, 86, 136);
  // opacity: 0.7;
  top: 0px;
  height: 58px;
  width: 100%;
  justify-content: space-between;
  letter-spacing: 2px;
  z-index: 100;
  & ul {
    list-style: none;
  }
  & h1 {
    margin: 5px;
    letter-spacing: 3px;
    font-family: "Ranchers", cursive;
    white-space: pre;
    color: white;
    text-shadow: 2px 2px 0 black;
    
  }
  & p {
    margin: 0;
    line-height: 58px;
    font-size: 13px;
    white-space: pre;
    color: white;
  }
  & .menu {
    display: flex;
      justify-content: space-between;
    & a {
      text-decoration: none;
    }
    & li {
      margin: 10px 25px;
      // margin-right: 25px;
      & .v-btn {
        background-color: white;
        padding: 0 5px;
        &.btn {
          background-color: rgb(32, 197, 148);
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .header {
    position: relative;
    flex-direction: column;
    text-align: center;
    height: auto;
    & .menu {
      position: fixed;
      bottom: 0;
      width: 100%;
      // padding-bottom: 10px;
      background-color: white;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
  }
  .v-application ol,
  .v-application ul {
    padding: 0;
  }
}
</style>
