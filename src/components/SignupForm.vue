<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      id="displayName"
      name="displayName"
      placeholder="displayName"
      required
      v-model="displayName"
    />

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

    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  name: "SignupForm",
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup()

    async function handleSubmit() {
      await signup(displayName.value, email.value, password.value)
    }

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>