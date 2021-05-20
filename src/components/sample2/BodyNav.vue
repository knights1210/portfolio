<template>
  <div class="container">
    <ul class="body-nav">
      <router-link to="/"><li>ABOUT US</li></router-link>
      <router-link to="/"><li>お部屋のご案内</li></router-link>
      <router-link to="/"><li>温泉</li></router-link>
      <router-link to="/"><li>お食事</li></router-link>
      <router-link to="/"><li>プラン</li></router-link>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Body",
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  & .body-nav {
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;
    & a {
      text-decoration: none;
      & li {
        margin-right: 5px;
        padding-right: 5px;
        list-style: none;
        border-right: 1px solid black;
        color: black;
      }
    }
  }
}
</style>
