import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import Activity from "../views/home/Activity.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/activity",
    name: "activity",
    component: Activity,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
