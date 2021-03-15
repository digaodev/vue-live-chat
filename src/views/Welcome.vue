<template>
  <div class="welcome container">
    <h1>Welcome to the live-chat app</h1>

    <div v-if="isShowingLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        No account yet? <span @click="toggleAuthMode">Sign up</span> instead
      </p>
    </div>

    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        Already have an account?
        <span @click="toggleAuthMode">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";

export default {
  name: "Welcome",
  components: {
    LoginForm,
    SignupForm,
  },
  setup() {
    const router = useRouter();
    const isShowingLogin = ref(true);

    function toggleAuthMode() {
      isShowingLogin.value = !isShowingLogin.value;
    }

    function enterChat() {
      router.push({ name: "Chatroom" });
    }

    return { isShowingLogin, toggleAuthMode, enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 24px 0;
}
.welcome h1 {
  margin-bottom: 24px;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
