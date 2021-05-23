import Vue from "vue";
import Router from "vue-router";
import Component1 from "./view/Component1.vue";
import Component2 from "./view/Component2.vue";
import Component3 from "./view/Component3.vue";
// import BodyNav from "./components/sample2/BodyNav.vue";
import About from "./components/sample2/About.vue";
import TopPage from "./view/Top.vue";

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: TopPage },
    { path: "/component1", component: Component1 },
    {
      path: "/component2",
      component: Component2,
      children: [
        {
          path: "top",
          name: "about",
          component: About,
        },
      ],
    },
    { path: "/component3", component: Component3 },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

Vue.use(Router);
