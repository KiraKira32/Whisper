<template>
  <div class="page-hangout">
    <main class="w-calc-72 h-screen bg-cl-2E2C36">
      <header
        class="flex justify-between items-center px-4 h-fh-50 bg-cl-473653 w-calc-72"
      >
        <div class="flex gap-2">
          <img src="/icons/chat.svg" alt="" />
          <p class="text-cl-E8E1F1">聊天室名稱</p>
        </div>
        <!-- 頻道功能 -->
        <section>
          <div class="relative flex gap-3 pr-3">
            <img
              class="person-icon cursor-pointer"
              @click="togglePresonsList"
              src="/icons/friend_default.svg"
              alt=""
            />
            <input
              class="w-full bg-cl-1F1F1F rounded py-1 pr-8 pl-2 styled-input placeholder:text-m placeholder:text-cl-6B5D83 text-cl-C4BECD focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB focus:ring-1"
              type="text"
              placeholder="對話搜尋"
            />
            <img
              class="absolute right-5 bottom-2"
              src="/icons/search_default.svg"
              alt=""
            />
          </div>
        </section>
      </header>

      <section class="flex">
        <HangoutChatRoom />
        <transition name="slide-fade">
          <HangoutPersonsList v-if="isPersonsList" />
        </transition>
      </section>
    </main>
  </div>
</template>

<script setup leng="ts" name="PageHangout">
import HangoutChatRoom from "../components/Hangout/HangoutChatRoom.vue";
import HangoutPersonsList from "../components/Hangout/HangoutPersonsList.vue";

import { ref, onMounted } from "vue";

const isPersonsList = ref(false);

const togglePresonsList = () => {
  isPersonsList.value = !isPersonsList.value;
};
</script>

<style lang="scss" scoped>
.person-icon:hover {
  content: url("/icons/friend_light.svg");
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(0px);
  opacity: 0;
  width: 0px !important;
}
</style>
