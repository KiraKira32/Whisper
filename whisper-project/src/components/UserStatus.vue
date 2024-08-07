<template>
  <div class="user-status">
    <section class="relative w-60 bg-cl-241D29">
      <div class="flex py-3 px-4 gap-2 relative">
        <div class="w-9 h-9 bg-slate-50 rounded-full flex-shrink-0"></div>
        <div div="">
          <p class="line-clamp-1 text-white text-sm font-bold pr-5">
            使用者的暱稱使用者的暱稱使用者的暱稱
          </p>
          <p class="line-clamp-1 text-cl-C3C3C3 text-xs pr-6">
            狀態狀態狀態狀態狀態狀態狀態狀態狀態
          </p>
        </div>
        <div
          class="absolute right-3 bottom-3 cursor-pointer"
          @click="toggleUserInfo()"
        >
          <img
            class="hover:animate-spin-slow h-5"
            src="/icons/settings.svg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section v-show="isShowInfo" class="absolute top-0 z-30">
      <BlockUserInfo />
    </section>
  </div>
</template>

<script setup lang="ts" name="UserStatus">
import BlockUserInfo from "./Block/BlockUserInfo.vue";
import { isShowInfo } from "../store/LayoutStore";

const toggleUserInfo = () => {
  isShowInfo.value = true;
};
</script>

<style scoped></style>
