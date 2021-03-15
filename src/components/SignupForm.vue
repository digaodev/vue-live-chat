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

    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SignupForm",
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    function handleSubmit() {
      console.log(displayName.value, email.value, password.value);
    }

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style>
</style>