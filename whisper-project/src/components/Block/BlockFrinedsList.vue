<template>
  <!-- 好友列表區塊顯示 -->
  <div class="block-friends-list">
    <main class="px-10 bg-cl-2E2C36 w-calc-312 h-calc-50">
      <!-- 搜尋欄位 -->
      <section v-if="false">
        <label class="py-6 flex">
          <input
            class="relative w-full bg-cl-1F1F1F rounded py-2 pr-4 pl-10 styled-input placeholder:text-m placeholder:text-cl-6B5D83 text-cl-C4BECD focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB focus:ring-1"
            type="text"
            placeholder="搜尋好友"
          />
          <img class="absolute py-3 px-3" src="/icons/search.svg" alt="" />
        </label>
      </section>
      <!-- 新增好友 -->
      <section v-if="currentTab == 'friends'">
        <div class="text-cl-C4BECD font-bold pt-4 pb-1">新增好友</div>
        <div class="text-cl-BEB9C5 text-sm">
          新增您的 Whisper 好友，立馬進行悄悄話:)
        </div>
        <label class="py-2 flex">
          <input
            class="relative w-full bg-cl-1F1F1F rounded py-2.5 px-4 styled-input focus:ring-1 placeholder:text-m placeholder:text-cl-6B5D83 text-cl-C4BECD focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB"
            type="text"
            placeholder="您可以利用 Whisper 使用者名稱來新增好友:)"
            v-model="inputValue"
          />
          <button
            class="absolute right-12 mt-2 text-white font-bold bg-cl-5E3EC6 py-1 px-2 rounded text-sm"
            :disabled="isButtonDisabled"
          >
            傳送好友請求
          </button>
        </label>
      </section>
      <!-- 好友列表 -->
      <section v-if="false">
        <div class="text-cl-C4BECD font-bold mb-4">線上好友 xx位</div>
        <div class="pr-5 overflow-y-auto h-calc-200 scroll-bar-style">
          <!-- 好友列表欄位顯示 -->
          <div
            v-for="(item, index) in 5"
            :key="index"
            class="hover:bg-cl-BAA9C180 hover:rounded-md cursor-pointer"
            @mouseover="hoverIndex = index"
            @mouseleave="hoverIndex = null"
          >
            <div
              class="flex gap-2 border-t border-cl-6B5D83 py-2 px-1"
              :class="{
                'border-transparent':
                  hoverIndex === index || hoverIndex === index - 1,
              }"
            >
              <div
                class="user-cover relative w-9 h-9 bg-slate-400 rounded-full"
              >
                <div class="state absolute bottom-0 right-0">
                  <img src="/icons/state_ofline.svg" alt="" />
                </div>
              </div>
              <div>
                <div class="text-cl-EDE6F7 text-sm">好友名稱</div>
                <div class="text-cl-C3C3C3 text-xs">好友狀態</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 好友空值展示 -->
      <section
        v-if="currentTab !== 'friends'"
        class="empty-state h-calc-50 flex justify-center items-center"
      >
        <BlockTabsEmptyState
          v-if="currentTab == 'all'"
          :currentTab="currentTab"
          title="目前沒有任何好友"
        >
          <div @click="selectTab(tab)">新增好友</div>
        </BlockTabsEmptyState>
        <BlockTabsEmptyState
          v-if="currentTab == 'online'"
          title="目前沒有好友在線上"
        />
        <BlockTabsEmptyState
          v-if="currentTab == 'pending'"
          title="目前沒有待審中的好友請求"
        />
        <BlockTabsEmptyState
          v-if="currentTab == 'blocked'"
          title="目前沒有封鎖的用戶"
        />
      </section>
      <!-- 新增好友 -->
    </main>
  </div>
</template>

<script setup lang="ts" name="BlockFrinedsList">
import { ref, defineProps, computed } from "vue";
import BlockTabsEmptyState from "./BlockTabsEmptyState.vue";

defineProps(["currentTab", "selectTab"]);

const tab = ref("friends");

const hoverIndex = ref<number | null>(null);

// 使用 ref 來存儲輸入框的值
const inputValue = ref("");
// 判斷輸入框的值來決定按鈕的 disabled 狀態
const isButtonDisabled = computed(() => {
  // 檢查輸入框的值是否為空
  return inputValue.value === "";
});

// defineProps({ currentTab: String });
</script>

<style lang="scss" scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
