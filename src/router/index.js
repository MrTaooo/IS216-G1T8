import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: '/',
    name: 'About',
    component: About,
  },
  {
    path: '/planner',
    name: 'Planner',
    // component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Planner.vue'),
    meta: {
      requiresAuth: true, // only when login then can access page
    }
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Navigation.vue'),
    meta: {
      requiresAuth: true, // only when login then can access page
    }
  },
  {
    path: '/mrt',
    name: 'MRT',
    component: () => import(/* webpackChunkName: "about" */ '../views/MRT.vue'),
    meta: {
      requiresAuth: true, // only when login then can access page
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true, // only when login then can access page
    }
  },
  {
    path: '/bus',
    name: 'Bus',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bus.vue'),
    meta: {
      requiresAuth: true, // only when login then can access page
    }
  },
  {
    path: '/register', 
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login', 
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    meta: {
      requiresAuth: true, // only when login then can access page
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)){
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access!");
      next("/"); // goes to Home page
    }
  } else {
    next();
  }
});

export default router