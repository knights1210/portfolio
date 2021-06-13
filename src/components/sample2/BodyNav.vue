<template>
  <div class="container">
    <div class="body-nav">
      <router-link
        class="nav-link txt-center"
        active-class="link-active"
        exact
        :to="{ name: 'about' }"
        >About Us</router-link
      >
      <router-link
        class="nav-link txt-center"
        active-class="link-active"
        exact
        :to="{ name: 'room' }"
        >Room</router-link
      >
      <router-link
        class="nav-link txt-center"
        active-class="link-active"
        exact
        :to="{ name: 'onsen' }"
        >Onsen</router-link
      >
      <router-link
        class="nav-link txt-center"
        active-class="link-active"
        exact
        :to="{ name: 'foods' }"
        >Foods</router-link
      >
      <router-link class="nav-link txt-center" active-class="link-active" exact to="/"
        >プラン</router-link
      >
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Body",
};
</script>

<style lang="scss" scoped>
.link-active {
  background-color: white;
  color: black !important;
  text-shadow: gray 2px 2px 3px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
  background-color: black;
  & .body-nav {
    justify-content: center;
    display: flex;
    & .nav-link {
      border-top: 1px solid black;
      text-decoration: none;
      transition: all 0.5s ease;
      width: 150px;
      padding: 5px;
      list-style: none;
      border-right: 1px solid black;
      color: white;
      position: relative;
      z-index: 1;
      overflow: hidden;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(100px);
        transition: all 0.3s;
        transform-origin: top center;
        opacity: 0;
        z-index: -1;
      }
      &:hover {
        color: black;
        text-shadow: gray 2px 2px 3px;
        &::before {
          transform: none;
          opacity: 1;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .container {
    .body-nav {
      // flex-direction: column;
      padding: 0;
      .nav-link {
        // border-top: 1px solid black;
        width: 20%;
      }
    }
  }
}
</style>
