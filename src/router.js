import Vue from "vue";
import { Auth } from 'aws-amplify';
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "SignIn",
      meta: { redirectIfLoggedIn: true },
      component: () => import(/* webpackChunkName: "SignIn" */ "./views/SignIn.vue")
    },
    {
      path: "/new-password",
      name: "NewPassword",
      meta: { redirectIfLoggedIn: true },
      component: () => import(/* webpackChunkName: "NewPassword" */ "./views/NewPassword.vue")
    },
    {
      path: "/admin/monitors",
      name: "AdminMonitors",
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "AdminMonitors" */ "./views/AdminMonitors.vue")
    },
    {
      path: "/logout",
      name: "Logout",
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "AdminMonitors" */ "./views/Logout.vue")
    },
    // {
    //   path: "/destination/:slug",
    //   name: "DestinationDetails",
    //   props: true,
    //   component: () =>
    //     import(/* webpackChunkName: "DestinationDetails"*/ "./views/DestinationDetails"),
    //   children: [
    //     {
    //       path: ":experienceSlug",
    //       name: "experienceDetails",
    //       props: true,
    //       component: () =>
    //         import(/*webpackChunkName: "ExperienceDetails"*/ "./views/ExperienceDetails")
    //     }
    //   ],
    //   beforeEnter: (to, from, next) => {
    //     const exists = store.destinations.find(
    //       destination => destination.slug === to.params.slug
    //     );
    //     if (exists) {
    //       next();
    //     } else {
    //       next({ name: "notFound" });
    //     }
    //   }
    // },
    // {
    //   path: "/user",
    //   name: "user",
    //   component: () =>
    //     import(/* webpackChunkName: "User" */ "./views/User.vue"),
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: "/invoices",
    //   name: "invoices",
    //   component: () =>
    //     import(/* webpackChunkName: "Invoices" */ "./views/Invoices"),
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: "/404",
      alias: "*",
      name: "NotFound",
      component: () => import(/* webpackChunkName: "NotFound" */ "./views/NotFound")
    }
  ]
});

router.beforeResolve(async (to, from, next) => {
  const user = await getUser();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) {
      next({
        name: "SignIn"
      });
    } else {
      next();
    }
  }
  if (to.matched.some(record => record.meta.redirectIfLoggedIn)) {
    if (user) {
      next({
        name: "AdminMonitors"
      });
    } else {
      next();
    }
  }
  next();
});

function getUser() {
  return Auth.currentAuthenticatedUser().then((user) => {
    if (user && user.signInUserSession) {
      return user;
    } else {
      return null;
    }
  }).catch(err => {
    console.log(err);
    return null;
  });
}

export default router;
