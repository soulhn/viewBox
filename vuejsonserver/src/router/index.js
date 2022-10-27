import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Detail from "../views/DetailView.vue";
import Write from "../views/WriteView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/board/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/board/write/:id?", //아이디를 넘길수도 안넘길수도있다.
    name: "Write",
    component: Write,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
