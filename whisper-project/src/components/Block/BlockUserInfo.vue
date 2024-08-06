<template>
  <div class="block-user-info" v-if="isShowInfo" @click="close">
    <main class="fixed top-0 left-0 right-0 bottom-0">
      <section
        class="w-screen h-screen bg-cl-1B1B1BCC flex justify-center items-center"
      >
        <div class="bg-cl-594866 w-600 rounded-md" @click.stop>
          <div class="relative p-6">
            <img
              class="absolute right-6"
              src="/icons/round_cancel.svg"
              alt=""
            />
            <div class="flex gap-5 items-center mt-2">
              <div class="bg-cl-353040 w-120 h-120 rounded-full"></div>

              <div class="flex flex-col gap-1">
                <div class="text-xl font-bold text-cl-E8E1F1">使用者的名稱</div>
                <div class="text-base ont-bold text-cl-E8E1F1">
                  ragdoll54@gmail.com
                </div>
              </div>
            </div>
            <div class="flex justify-end cursor-pointer">
              <div
                class="flex gap-2 text-white bg-cl-BAA9C180 rounded py-1 px-2"
              >
                <img src="/icons/pencil_light.svg" alt="" />
                <img src="/icons/message_light.svg" alt="" />
                <div>編輯個人資料</div>
              </div>
            </div>
            <div class="flex flex-col bg-cl-2E2C36 mt-4 rounded-md p-5">
              <div class="text-white font-bold">狀態消息</div>
              <div class="border-b border-cl-6B5D83 w-full py-1"></div>
              <div class="h-20 text-white mt-2 text-sm">123132123</div>
              <div class="text-cl-E8E1F1 text-sm mb-1">成為成員時間</div>
              <div class="text-white text-xs">2024年8月6日</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts" name="BlockUserInfo">
import { isShowInfo } from "../../store/LayoutStore";

const close = () => {
  isShowInfo.value = false;
  // console.log("showUserInfo", isShowInfo.value);
};
</script>
