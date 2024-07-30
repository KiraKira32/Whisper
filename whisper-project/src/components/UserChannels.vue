<template>
  <div class="user_channels">
    <main
      class="channels_list bg-cl-221F26 w-cw-72 h-screen overflow-y-auto scrollbar-hidden"
    >
      <section class="channels_home">
        <img
          src="/icons/home.svg"
          alt="home"
          class="home_icon cursor-pointer mb-2"
          :class="{ no_hover: isMobile }"
        />
      </section>
      <div class="border-t border-cl-6B5D83 w-12"></div>
      <section class="flex flex-col gap-4 mt-4">
        <div class="channels_group" v-for="i in 5" :key="i">
          <div
            class="w-10 h-10 rounded-full bg-cl-6B5D83 lg:hover:rounded-lg"
          ></div>
        </div>
        <div class="chammels_add">
          <div
            class="flex items-center justify-center w-10 h-10 bg-cl-2E2C36 rounded-full hover:rounded-lg hover:bg-cl-9C96CD cursor-pointer"
          >
            <img class="add_icon" src="/icons/add.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts" name="UserChannels">
import { ref, onMounted } from "vue";
import useIsMobile from "../hooks/useIsMobile";

const isMobile = useIsMobile();

console.log(isMobile.value);
</script>

<style scoped>
.user_channels {
  .channels_list {
    @apply flex flex-col items-center py-4;
  }
  .home_icon:hover {
    content: url("/icons/home_light.svg");
  }
  .no_hover:hover {
    content: url("/icons/home.svg");
  }
  .channels_group {
    @apply cursor-pointer;
  }
  .chammels_add:hover {
    .add_icon {
      content: url("/icons/add_light.svg");
    }
  }
}
</style>
