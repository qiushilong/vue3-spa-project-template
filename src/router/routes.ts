const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/components/Demo.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/i18n",
    name: "i18n",
    component: () => import("@/components/i18n-demo.vue"),
  },
];

export default routes;
