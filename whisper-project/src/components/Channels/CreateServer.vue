<template>
  <!-- 創建伺服器頻道 && 加入伺服器頻道 -->
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
            <section class="p-6 mb-5">
              <div
                @click="changeCreateServer()"
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
                  @click="changejoinServer"
                  class="flex items-center gap-2 bg-cl-2E2C36 p-2 rounded hover:bg-neutral-900 cursor-pointer duration-300"
                >
                  <img class="w-10 p-1" src="/icons/user_talk_rtl.svg" alt="" />
                  <div class="text-cl-E8E1F1 font-bold">Yep! 加入伺服器</div>
                </div>
              </section>
            </section>
          </section>
          <!-- 上傳封面圖 -->
          <section v-if="isCreate || isJoin">
            <div class="text-center pt-6 px-6">
              <p class="text-white text-2xl font-bold mt-1">
                {{ isCreate ? "自訂伺服器頻道" : "加入伺服器" }}
              </p>
              <p class="text-cl-E8E1F1 mt-1">
                {{
                  isCreate
                    ? "幫您的頻道新增封面圖和命名，您之後隨時都可以做更改。"
                    : "請您輸入伺服器的邀請碼以加入現有的頻道進行聊天 :)"
                }}
              </p>
            </div>

            <div class="flex items-center justify-center" v-if="isCreate">
              <BlockImageUploader @update-image="updateImage" />
            </div>
          </section>
          <!-- 伺服器名稱 -->
          <section v-if="isCreate || isJoin" class="px-5 pb-5">
            <div class="border-t border-cl-9C96CD mt-4">
              <p class="text-sm pt-3 text-cl-E8E1F1 mb-2">
                {{ isCreate ? "伺服器名稱" : "邀請連結"
                }}<span class="text-rose-500">*</span>
              </p>
              <input
                class="w-full bg-cl-1F1F1F rounded py-2 px-4 styled-input focus:ring-1 placeholder:text-m placeholder:text-cl-6B5D83 text-cl-C4BECD focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB"
                type="text"
                :placeholder="
                  isCreate ? '請輸入您的伺服器名稱' : '輸入邀請連結'
                "
                v-model="currentInput"
              />
              <p v-if="isCreate" class="text-xs pt-3 text-cl-E8E1F1 mb-2">
                在創立伺服器的同時將代表您已同意 Whisper 的社群守則。
              </p>
            </div>
          </section>
          <!-- 按鈕 -->
          <section
            v-if="isCreate || isJoin"
            class="bg-cl-403C57 rounded-br-md rounded-bl-md"
          >
            <div class="flex justify-between py-4 px-5 text-white">
              <button type="button" @click="backPage">上一頁</button>
              <button
                type="submit"
                v-if="isCreate || isJoin"
                @click="isCreate ? createServer() : joinServer()"
                class="p-1 px-2 bg-cl-9C96CD rounded cursor-pointer hover:bg-cl-8E4FF1 duration-300"
              >
                {{ isCreate ? "建立伺服器" : "加入伺服器" }}
              </button>
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

import { ref, computed } from "vue";

const openCreate = ref(true);
const isCreate = ref(false);
const isJoin = ref(false);

const inputName = ref("");
const inputCode = ref("");

/* 判斷當前輸入的內容 */
const currentInput = computed({
  get() {
    return isCreate.value ? inputName.value : inputCode.value;
  },
  set(value: string) {
    if (isCreate.value) {
      inputName.value = value;
    } else {
      inputCode.value = value;
    }
  },
});

const closeInfo = () => {
  isCreate.value = false;
  isCreateChannel.value = false;
};

/* 選擇建立新伺服器 */
const changeCreateServer = () => {
  isCreate.value = true;
  openCreate.value = false;

  console.log();
};

/* 選擇加入伺服器 */
const changejoinServer = () => {
  isJoin.value = true;
  openCreate.value = false;
};

/* 返回上一頁 */
const backPage = () => {
  openCreate.value = true;
  isCreate.value = false;
  isJoin.value = false;
};

/* 接收上傳的圖片內容 */
const uploadImage = ref<string | null>(null);
const updateImage = (image: string) => {
  uploadImage.value = image;

  // console.log(uploadImage.value);
};

/* 建立伺服器 && 判斷內容是否輸入 */
const createServer = () => {
  /* 驗證內容是否輸入  */
  if (inputName.value === "") {
    alert("請輸入伺服器名稱");
  }
  if (uploadImage.value === "" || uploadImage.value === null) {
    alert("請上傳圖片");
  }

  if (inputName.value && uploadImage.value) {
    isCreateChannel.value = false;

    console.log("伺服器建立成功！");
    console.log("inputName:", inputName.value);
  }

  return;
};

/* 加入現有伺服器 && 判斷邀請碼是否輸入 */
const joinServer = () => {
  if (inputCode.value === "") {
    alert("請輸入伺服器邀請碼");
  } else if (inputCode.value) {
    console.log("伺服器加入成功！");
    isCreateChannel.value = false;
  }

  console.log("inputCode:", inputCode.value);
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
