<template>
  <v-app>
    <div id="app">
      <Header />
      <transition name="fade" mode="out-in">
      <router-view></router-view>
      </transition>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import "normalize.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap");
@import '/node_modules/vue-image-lightbox/dist/vue-image-lightbox.min.css';
* {
  box-sizing: border-box;
  font-family:  "meiryo", "hiragino kaku Gothic ProN",sans-serif;
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
</style>
