import MainLayout from "@/views/layout/MainLayout";
import MainPage from "@/views/pages/MainPage";

export const routes = [
  {
    path: "/",
    name: "main",
    component: MainLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: MainPage,
      },
    ],
  },
  //   {
  //     path: '/about',
  //     name: 'About',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
];
