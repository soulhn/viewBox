import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; //컴포넌트 import 방법1

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView, //컴포넌트 import 방법1
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true */ "../views/AboutView.vue"
      ), //컴포넌트 import 방법2 webpackChunkName: "about"
    // 컴포넌트 import 방법3 webpackChunkName: "about", webpackPrefetch:true
  },
  {
    //문자열 데이터 바인딩 코드
    path: "/databinding/string",
    name: "DataBindingStringView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingStringView.vue"
      ),
  },
  {
    //HTML 데이터 바인딩 코드
    path: "/databinding/html",
    name: "DataBindingHtmlView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingHtmlView.vue"
      ),
  },
  {
    //INPUT 데이터 양방향 바인딩 코드
    path: "/databinding/input",
    name: "DataBindingInputView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingInputView.vue"
      ),
  },
  {
    //Select로 처리 하기
    path: "/databinding/select",
    name: "DataBindingSelectView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingSelectView.vue"
      ),
  },
  {
    //Check Box로 처리 하기
    path: "/databinding/check",
    name: "DataBindingCheckBoxView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingCheckBoxView.vue"
      ),
  },
  {
    //라디오 버튼으로 처리 하기
    path: "/databinding/radio",
    name: "DataBindingRadioView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingRadioView.vue"
      ),
  },
  {
    //html 속성 처리 하기
    path: "/databinding/attr",
    name: "DataBindingAttrubuteView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingAttrubuteView.vue"
      ),
  },
  {
    //Databinding 배열
    path: "/databinding/list",
    name: "DataBindingListView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingListView.vue"
      ),
  },
  {
    //Class 바인딩
    path: "/databinding/class",
    name: "DataBindingClassView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingClassView.vue"
      ),
  },
  {
    //Class 바인딩
    path: "/databinding/style",
    name: "DataBindingStyleView",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/1_databinding/DataBindingStyleView.vue"
      ),
  }, //----------- 이벤트 리스너 다루기 -----------
  {
    //클릭이벤트
    path: "/event/click",
    name: "EventClickView",
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ "../views/2_event/EventClickView.vue"
      ),
  },
  {
    //Change 이벤트
    path: "/event/change",
    name: "EventChangeView",
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ "../views/2_event/EventChangeView.vue"
      ),
  },
  {
    //Key 이벤트
    path: "/event/key",
    name: "EventKeyView",
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ "../views/2_event/EventKeyView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
