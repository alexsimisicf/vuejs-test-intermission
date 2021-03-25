import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Alerts from "../views/Alerts.vue";
import Ecosystem from "../views/Ecosystem.vue";
import Specifications from "../views/Specifications.vue";
import Data from "../views/Data.vue";
import Settings from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/alerts",
    name: "Alerts",
    component: Alerts,
  },
  {
    path: "/ecosystem",
    name: "Ecosystem",
    component: Ecosystem,
  },
  {
    path: "/specifications",
    name: "Specifications",
    component: Specifications,
  },
  {
    path: "/data",
    name: "Data",
    component: Data,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
