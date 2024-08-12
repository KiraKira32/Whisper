<template>
  <div class="page-hangout w-dvw">
    <main class="">
      <!-- 聊天內容 -->
      <section class="bg-cl-2E2C36 p-5">
        <div class="h-calc-239 overflow-y-auto scroll-bar-style">
          <div class="pr-5 w-full">
            <!-- 聊天室開頭 -->
            <section class="p-5 bg-cl-413E4B rounded-lg mb-4">
              <div class="flex items-center gap-3">
                <div class="text-cl-C4BECD mb-4">
                  <p class="font-bold text-2xl mb-1">歡迎來到 OOOO !</p>
                  <p>這裡就是 OOOO 的聊天室的起始點</p>
                </div>
              </div>
            </section>

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
        <div class="bottom-0 bg-cl-2E2C36 p-5">
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
  </div>
</template>
<script setup leng="ts" name="HangoutChatRoom">
import { ref, computed } from "vue";

const inputText = ref("");
const maxChars = ref(2000);
const remainingChars = computed(() => {
  return maxChars.value - inputText.value.length;
});
</script>
