<template>
  <!-- 使用者頻道 -->
  <div class="user-channels">
    <main
      class="channels-list z-0 bg-cl-221F26 w-cw-72 h-screen overflow-y-auto scrollbar-hidden"
    >
      <section>
        <router-link :to="{ name: 'PageFriends' }">
          <img
            src="/icons/home.svg"
            alt="home"
            class="home-icon cursor-pointer mb-2"
            :class="{ 'no-hover': isMobile }"
          />
        </router-link>
      </section>
      <div class="border-t border-cl-6B5D83 w-12"></div>
      <section class="flex flex-col gap-4 mt-4">
        <div class="channels-group" v-for="i in 5" :key="i">
          <router-link :to="{ name: 'PageServer' }">
            <div
              class="w-10 h-10 rounded-full bg-cl-6B5D83 lg:hover:rounded-lg"
            ></div>
          </router-link>
        </div>

        <div class="channels-add">
          <div
            @click="toggleCreateChannels"
            class="flex items-center justify-center w-10 h-10 bg-cl-2E2C36 rounded-full hover:rounded-lg hover:bg-cl-9C96CD cursor-pointer"
          >
            <img class="add-icon" src="/icons/add.svg" alt="" />
          </div>
        </div>
      </section>
    </main>

    <CreateServer v-if="isCreateChannel" />
  </div>
</template>

<script setup lang="ts" name="UserChannels">
import CreateServer from "./Channels/CreateServer.vue";
import useIsMobile from "../hooks/useIsMobile";
import { isCreateChannel } from "../store/PopStore";

const isMobile = useIsMobile();

const toggleCreateChannels = () => {
  isCreateChannel.value = true;
};
// console.log(isMobile.value);
</script>

<style lang="scss" scoped>
.user-channels {
  .channels-list {
    @apply flex flex-col items-center py-4;
  }
  .home-icon:hover {
    content: url("/icons/home_light.svg");
  }
  .no-hover:hover {
    content: url("/icons/home.svg");
  }
  .channels-group {
    @apply cursor-pointer;
  }
  .channels-add:hover {
    .add-icon {
      content: url("/icons/add_light.svg");
    }
  }
}
</style>
