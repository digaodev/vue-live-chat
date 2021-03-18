<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <ul v-if="formattedDocuments" class="messages" ref="messagesRef">
      <li class="single" v-for="doc in formattedDocuments" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";

import getCollection from "../composables/getCollection";

export default {
  setup() {
    const messagesRef = ref(null);
    const { error, documents } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => ({
          ...doc,
          createdAt: formatDistanceToNow(doc.createdAt.toDate()),
        }));
      } else {
        return null;
      }
    });

    // auto-scroll to the bottom (most recent messages in chat)
    onUpdated(() => {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messagesRef };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
  text-align: left;
}
.chat-window ul {
  list-style-type: none;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;

  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>