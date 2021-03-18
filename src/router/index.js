import { createRouter, createWebHistory } from "vue-router";

import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { auth } from "../services/firebase";


function requireAuth(to, from, next) {
  const loggedUser = auth.currentUser

  if (!loggedUser) return next({ name: 'Welcome' })

  return next()
}

function requireNoAuth(to, from, next) {
  const loggedUser = auth.currentUser

  if (loggedUser) return next({ name: 'Chatroom' })

  return next()
}

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
