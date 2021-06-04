import Vue from "vue";
import Router from "vue-router";
import Component1 from "./view/Component1.vue";
import Component2 from "./view/Component2.vue";
import Component3 from "./view/Component3.vue";
import About from "./components/sample2/About.vue";
import Room from "./components/sample2/Room.vue";
import Onsen from "./components/sample2/Onsen.vue";
import TopPage from "./view/Top.vue";

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: TopPage },
    { path: "/component1", component: Component1, meta: {title: 'sample1'}},
    {
      path: "/component2",
      component: Component2,
      children: [
        {
          meta: {title: 'sample2'},
          path: "/component2",
          name: "about",
          component: About,
        },
        {
          path: 'room',
          name: 'room',
          component: Room,
        },
        {
          path: 'onsen',
          name: 'onsen',
          component: Onsen,
        }
      ],
    },
    { path: "/component3", component: Component3 },
  ],
  scrollBehavior (to) {
    if (to.meta.title) {
      console.log(to.meta.title);
      return { x: 0, y: 0 }
    } 
  }
});

Vue.use(Router);
