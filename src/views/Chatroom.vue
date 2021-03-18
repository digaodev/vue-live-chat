<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";

export default {
  name: "Chatroom",
  components: { NavBar, NewChatForm, ChatWindow },
};
</script>

<style>
</style>