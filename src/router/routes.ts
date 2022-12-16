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
];

export default routes;
