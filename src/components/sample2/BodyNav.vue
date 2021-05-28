<template>
  <div class="container">
    <div class="body-nav">
      <router-link class="nav-link" active-class="link-active" exact :to="{ name: 'about' }"
        >ABOUT US</router-link
      >
      <router-link class="nav-link" active-class="link-active" exact :to="{ name: 'room' }"
        >お部屋のご案内</router-link
      >
      <router-link class="nav-link" active-class="link-active" exact to="/">温泉</router-link>
      <router-link class="nav-link" active-class="link-active" exact to="/">お食事</router-link>
      <router-link class="nav-link" active-class="link-active" exact to="/">プラン</router-link>
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
      text-decoration: none;
      transition: all 0.5s ease;
      text-align: center;
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
      flex-direction: column;
      padding: 0;
      .nav-link {
        
          border-top: 1px solid black;
          width: 100%;
        
      }
    }
  }
}
</style>
