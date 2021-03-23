import Vue from "vue";
import Router from "vue-router";
import Component1 from "./view/Component1.vue";
import Component2 from "./view/Component2.vue";
import Component3 from "./view/Component3.vue";
import TopPage from "./view/Top.vue";

export default new Router({
  mode:"history",
  routes: [
    { path: "/", component: TopPage },
    { path: "/component1", component: Component1 },
    { path: "/component2", component: Component2 },
    { path: "/component3", component: Component3 },
  ],
});

Vue.use(Router);
