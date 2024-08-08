<template>
  <div class="page-chat-room">
    <main class="w-calc-312">
      <!-- 聊天窗 -->
      <section
        class="h-fh-50 bg-cl-473653 flex items-center justify-between px-3"
      >
        <div class="flex items-center gap-3 shadow-b">
          <div class="relative h-6 w-6 bg-slate-400 rounded-full"></div>
          <div class="text-cl-E8E1F1 text-sm font-bold">好友名稱</div>
        </div>
        <div class="flex gap-2">
          <img
            @click="toggleFriendsInfo()"
            class="info-icon cursor-pointer transition duration-500"
            src="/icons/personinfo_default.svg"
            alt=""
          />
          <div class="relative pr-3">
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
        </div>
      </section>

      <!-- 聊天內容 -->
      <section class="bg-cl-2E2C36 h-calc-50 p-5">
        <div class="h-calc-239 overflow-y-auto scroll-bar-style">
          <div class="pr-5">
            <div class="p-5 bg-cl-413E4B rounded-lg mb-4">
              <div class="flex items-center gap-3">
                <div class="bg-slate-400 w-28 h-28 rounded-full"></div>
                <div class="text-cl-C4BECD font-bold mb-4">
                  <p class="text-2xl mb-1">好友名稱</p>
                  <p>ackd123@gmail.com</p>
                </div>
              </div>
              <p class="text-cl-C4BECD font-bold mt-4">
                這是您與 xxx 私人訊息記錄的開頭
              </p>
              <div class="my-4 flex gap-3">
                <button>移除好友</button>
                <button>封鎖好友</button>
              </div>
            </div>

            <!-- 聊天內容 -->
            <div v-for="i in 10" :key="i">
              <div class="flex items-center gap-3">
                <div class="border-t border-cl-787380 w-full"></div>
                <div class="flex flex-shrink-0 text-cl-C4BECD text-xs py-2">
                  2024年8月8日
                </div>
                <div class="border-t border-cl-787380 w-full"></div>
              </div>
              <div>
                <!-- 頭樣/名稱/時間-->
                <section class="flex gap-2 items-start">
                  <div
                    class="flex flex-shrink-0 bg-slate-400 w-10 h-10 rounded-full"
                  ></div>
                  <div class="">
                    <div class="flex items-end gap-1">
                      <p class="text-md text-white">用戶名稱</p>
                      <p class="text-sm text-cl-C4BECD">2024/08/08 12:09</p>
                    </div>
                    <div class="text-cl-E8E1F1">
                      聊天訊息聊天訊息聊天訊息聊天訊息聊天訊息聊天訊息聊天訊息
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 輸入框 -->
      <section>
        <div class="fixed bottom-0 w-calc-312 bg-cl-2E2C36 p-5">
          <textarea
            v-model="inputText"
            :maxlength="maxChars"
            placeholder="@傳送訊息給..."
            class="w-full p-4 text-cl-E8E1F1 bg-cl-1F1F1F rounded-md focus:outline-none focus:ring-2 focus:ring-cl-6B5D83"
          ></textarea>

          <div class="flex justify-end text-cl-9C96CD text-xs">
            {{ remainingChars }}
          </div>
        </div>
      </section>
    </main>

    <section v-if="isShowInfoFriend" class="">
      <BlockUserInfo :friendState="friendState" />
    </section>
  </div>
</template>

<script setup lang="ts" name="PageChatRoom">
import BlockUserInfo from "../components/Block/BlockUserInfo.vue";
import { ref, computed } from "vue";
import { isShowInfoFriend } from "../store/LayoutStore";
const inputText = ref("");

const maxChars = ref(2000);

const friendState = ref(false);

const toggleFriendsInfo = () => {
  isShowInfoFriend.value = true;
  friendState.value = true;
};

const remainingChars = computed(() => {
  return maxChars.value - inputText.value.length;
});
</script>

<style lang="scss" scoped>
button {
  @apply text-white bg-cl-BAA9C180 rounded py-1 px-4 hover:bg-cl-F2E9F680 transition duration-500;
}
textarea {
  height: 5rem !important;
}

.info-icon:hover {
  content: url("/icons/personinfo_light.svg");
}
</style>
