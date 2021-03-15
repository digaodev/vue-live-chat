<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="email"
      id="email"
      name="email"
      placeholder="email"
      required
      v-model="email"
    />

    <input
      type="password"
      id="password"
      name="password"
      placeholder="password"
      required
      v-model="password"
    />

    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginForm",
  setup() {
    const email = ref("");
    const password = ref("");

    function handleSubmit() {
      console.log(email.value, password.value);
    }

    return { email, password, handleSubmit };
  },
};
</script>

<style>
</style>