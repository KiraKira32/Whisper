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
          <div class="flex gap-3 pr-3">
            <img
              class="person-icon cursor-pointer"
              @click="togglePersonsList"
              src="/icons/friend_default.svg"
              alt=""
            />
            <div class="relative">
              <input
                class="w-full bg-cl-1F1F1F rounded py-1 pr-8 pl-2 styled-input placeholder:text-m placeholder:text-cl-6B5D83 text-cl-C4BECD focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB focus:ring-1"
                type="text"
                placeholder="對話搜尋"
              />
              <img
                class="absolute right-3 bottom-2"
                src="/icons/search_default.svg"
                alt=""
              />
            </div>
            <img
              @click="toggleServer"
              class="more-icon cursor-pointer"
              src="/icons/more_default.svg"
              alt=""
            />
          </div>
        </section>
        <section
          class="settings-window absolute right-2 top-14 z-10"
          v-if="isShowSettings"
        >
          <div
            @mouseleave="closeSettings"
            class="flex flex-col gap-2 bg-cl-141316E5 py-2 px-2 rounded-md"
          >
            <div
              @click.stop="toggleInvite()"
              class="text-cl-C4BECD click-hover px-2 py-1 text-sm flex gap-2"
            >
              <p>邀請其他人</p>
              <img class="w-5 h-5" src="/icons/person_add.svg" alt="" />
            </div>
            <div
              @click.stop="toggleSettingServer()"
              class="text-cl-C4BECD click-hover px-2 py-1 text-sm flex gap-2"
            >
              <p>伺服器設定</p>
              <img src="/icons/settings.svg" alt="" />
            </div>
            <div
              @click.stop="toggleUserSettings()"
              class="text-cl-C4BECD click-hover px-2 py-1 text-sm flex justify-between gap-2"
            >
              <p>使用者設定</p>
              <img class="w-5 h-5" src="/icons/user_settings.svg" alt="" />
            </div>
          </div>
        </section>
      </header>

      <section class="flex">
        <!-- 伺服器聊天室 & 成員列表 -->
        <ServerChatRoom />
        <transition name="slide-fade">
          <ServerPersonsList v-if="isPersonsList" />
        </transition>
      </section>
      <!-- 伺服器邀請 -->
      <ServerInvite />
      <!-- 伺服器設定 -->
      <ServerSetting />
      <!-- 使用者設定 -->
      <ServerUserSetting />
    </main>
  </div>
</template>

<script setup lang="ts" name="PageServer">
import ServerChatRoom from "../components/Server/ServerChatRoom.vue";
import ServerPersonsList from "../components/Server/ServerPersonsList.vue";
import ServerSetting from "../components/Server/ServerSetting.vue";
import ServerUserSetting from "../components/Server/ServerUserSetting.vue";
import ServerInvite from "../components/Server/ServerInvite.vue";
import { isServerInfo, isServerUser, isServerInvite } from "../store/PopStore";
import { ref } from "vue";

const isPersonsList = ref(false);
const isShowSettings = ref(false);
const togglePersonsList = () => {
  isPersonsList.value = !isPersonsList.value;
};

/* 伺服器設定功能 */
const toggleServer = () => {
  isShowSettings.value = true;
  console.log("開啟");
};

const toggleInvite = () => {
  isServerInvite.value = true;
};

const toggleSettingServer = () => {
  isServerInfo.value = true;
};

const toggleUserSettings = () => {
  isServerUser.value = true;
};

// 關閉設定視窗
const closeSettings = () => {
  isShowSettings.value = false;

  console.log("關閉");
};
</script>

<style lang="scss" scoped>
.click-hover {
  @apply hover:bg-cl-3B3743 hover:rounded cursor-pointer;
}

.person-icon:hover {
  content: url("/icons/friend_light.svg");
}

.more-icon:hover {
  content: url("/icons/more_light.svg");
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
