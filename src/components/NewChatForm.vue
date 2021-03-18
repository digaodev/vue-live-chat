<template>
  <form>
    <textarea
      name="message"
      id="message"
      placeholder="Type a message and hit <Enter> to send"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>

    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";

import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../services/firebase";

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { error, addDoc } = useCollection("messages");

    async function handleSubmit() {
      const newChat = {
        message: message.value,
        user: user.value.displayName,
        createdAt: timestamp(),
      };

      await addDoc(newChat);

      if (!error.value) {
        message.value = "";
      }
    }

    return { message, handleSubmit, error, addDoc };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>