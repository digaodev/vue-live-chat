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

    <div class="error">{{ error }}</div>

    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  name: "LoginForm",
  emits: ["login"],
  setup(props, context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    async function handleSubmit() {
      await login(email.value, password.value);

      if (!error.value) {
        context.emit("login");
      }
    }

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>