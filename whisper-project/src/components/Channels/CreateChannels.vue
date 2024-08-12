<template>
  <div class="create-channels" v-if="isCreateChannel" @click="closeInfo">
    <main class="absolute top-0 right-0 z-20">
      <section
        class="w-screen h-screen bg-cl-1B1B1BCC flex justify-center items-center"
      >
        <div class="relative bg-cl-4D4866 rounded-md" @click.stop>
          <img
            @click="closeInfo()"
            class="absolute right-4 top-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300"
            src="/icons/round_cancel.svg"
            alt=""
          />
          <!-- 建立伺服器/加入伺服器 -->
          <section v-if="openCreate">
            <div class="text-center p-6">
              <p class="text-white text-xl font-bold mt-5">
                建立您的伺服器頻道
              </p>
              <p class="text-cl-E8E1F1">
                伺服器是您和好友互動的地方，建立屬於您的頻道開始聊天！
              </p>
            </div>
            <section class="p-6">
              <div
                @click="create()"
                class="flex items-center gap-2 bg-cl-2E2C36 p-2 rounded hover:bg-neutral-900 cursor-pointer duration-300"
              >
                <img class="w-10 p-1" src="/icons/user_talk_ltr.svg" alt="" />
                <div class="text-cl-E8E1F1 font-bold">Go! 建立伺服器</div>
              </div>

              <section class="mt-5 border-t border-cl-6B5D83">
                <p class="text-white pb-3 py-4 font-bold text-xl text-center">
                  嘿！您已經有邀請了嗎?
                </p>
                <div
                  class="flex items-center gap-2 bg-cl-2E2C36 p-2 rounded hover:bg-neutral-900 cursor-pointer duration-300"
                >
                  <img class="w-10 p-1" src="/icons/user_talk_rtl.svg" alt="" />
                  <div class="text-cl-E8E1F1 font-bold">Yep! 加入伺服器</div>
                </div>
              </section>
            </section>
          </section>
          <!-- 上傳封面圖 -->
          <section v-if="isCreate">
            <div class="text-center p-6">
              <p class="text-white text-2xl font-bold mt-5">自訂伺服器頻道</p>
              <p class="text-cl-E8E1F1 mt-2">
                幫您的頻道新增封面圖和命名，您之後隨時都可以做更改。
              </p>
            </div>

            <div class="flex items-center justify-center">
              <BlockImageUploader />
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts" name="CreateChannels">
import { isCreateChannel } from "../../store/PopStore";
import BlockImageUploader from "../Block/BlockImageUploader.vue";

import { ref } from "vue";

window.URL = window.URL || window.webkitURL;

const openCreate = ref(true);
const isCreate = ref(false);

const inputDOM = ref<HTMLInputElement | null>(null);

const fileChange = (e: any) => {
  console.log(e.target.files);
};

const uploadImages = () => {
  (inputDOM.value as HTMLInputElement).click();
};

function closeInfo(): void {
  isCreateChannel.value = false;
}

const create = () => {
  isCreate.value = true;
  openCreate.value = false;
};
</script>

<style lang="scss" scoped>
.upload {
  position: fixed;
  top: -500px;
  left: -500;
  z-index: -100;
  opacity: 0;
}
</style>
