<template>
  <div class="container">
    <ul class="body-nav">
      <router-link class="nav-link" :to="{ name: 'about' }"
        ><li>ABOUT US</li></router-link
      >
      <router-link class="nav-link" to="/"><li>お部屋のご案内</li></router-link>
      <router-link class="nav-link" to="/"><li>温泉</li></router-link>
      <router-link class="nav-link" to="/"><li>お食事</li></router-link>
      <router-link class="nav-link" to="/"><li>プラン</li></router-link>
    </ul>
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
  background-color: black;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 10px;
  & .body-nav {
    justify-content: center;
    display: flex;
    & .nav-link {
      text-decoration: none;
      & li {
        transition: all 0.5s ease;
        text-align: center;
        width: 150px;
        padding: 5px;
        list-style: none;
        border-right: 1px solid black;
        color: black;
        position: relative;
        z-index: 1;
        overflow: hidden;

        &::before {
          content: "";
          width: 100%;
          height: 100%;
          background-color: black;
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
          color: white;
          &::before {
            transform: none;
            opacity: 1;
          }
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
      // display: hidden;
      // position: absolute;
      .nav-link {
        // width: 600px;
        & li {
          border-top: 1px solid black;
          width: 100%;
        }
      }
    }
  }
}
</style>
