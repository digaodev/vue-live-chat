<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';

import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter()

    const handleLogout = async () => {
      await logout();

      if (!error.value) {
        router.push({name: 'Welcome'})
      }
    };
    
    return { handleLogout, user };
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #eee;
  padding: 20px;
}
nav p {
  color: #444;
  font-size: 16px;
  margin: 2px auto;
  text-align: left;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>