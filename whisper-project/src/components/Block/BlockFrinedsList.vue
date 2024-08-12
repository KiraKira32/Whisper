<template>
  <!-- 好友列表區塊顯示 -->
  <div class="block-friends-list">
    <main class="px-8 bg-cl-2E2C36 w-calc-700 h-calc-50">
      <!-- 新增好友 -->
      <section v-if="currentTab == 'friends'">
        <div class="text-cl-C4BECD font-bold pt-4 pb-1">新增好友</div>
        <div class="text-cl-BEB9C5 text-sm">
          新增您的 Whisper 好友，立馬進行悄悄話:)
        </div>
        <label class="py-2 flex relative">
          <input
            class="w-full bg-cl-1F1F1F rounded py-2.5 px-4 styled-input focus:ring-1 placeholder:text-m placeholder:text-cl-6B5D83 text-cl-C4BECD focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB"
            type="text"
            placeholder="您可以利用 Whisper 使用者名稱來新增好友:)"
            v-model="inputValue"
          />
          <button
            class="absolute right-3 mt-2 text-white font-bold bg-cl-5E3EC6 py-1 px-2 rounded text-sm"
            :disabled="isButtonDisabled"
          >
            傳送好友請求
          </button>
        </label>
      </section>
      <!-- 好友列表 && 搜尋欄位-->
      <section v-if="currentTab !== 'friends' && true">
        <div>
          <label class="py-6 flex">
            <input
              class="relative w-full bg-cl-1F1F1F rounded py-2 pr-4 pl-10 styled-input placeholder:text-m placeholder:text-cl-6B5D83 text-cl-C4BECD focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB focus:ring-1"
              type="text"
              placeholder="搜尋好友"
            />
            <img class="absolute py-3 px-3" src="/icons/search.svg" alt="" />
          </label>
        </div>
        <div>
          <div class="flex text-cl-C4BECD text-xs font-bold mb-4">
            <p>{{ currentTabText }}</p>
            <span class="pl-1">xx位</span>
          </div>
          <!-- 好友列表欄位顯示 -->
          <div class="pr-5 overflow-y-auto h-calc-200 scroll-bar-style">
            <div
              v-for="(item, index) in 5"
              :key="index"
              class="click-hover"
              @mouseover="hoverIndex = index"
              @mouseleave="hoverIndex = null"
            >
              <div
                class="flex justify-between gap-2 border-t border-cl-6B5D83 py-2 px-2"
                :class="{
                  'border-transparent':
                    hoverIndex === index || hoverIndex === index - 1,
                }"
              >
                <router-link :to="{ name: 'PageChatRoom' }">
                  <section class="flex gap-3 relative">
                    <div
                      class="user-cover relative w-9 h-9 bg-slate-400 rounded-full"
                    >
                      <div class="state absolute bottom-0 right-0">
                        <img src="/icons/state_ofline.svg" alt="" />
                      </div>
                    </div>
                    <div>
                      <div class="text-cl-EDE6F7 text-sm">好友名稱</div>
                      <div
                        v-if="currentTab == 'all' || currentTab == 'online'"
                        class="text-cl-BEB9C5 text-xs"
                      >
                        好友狀態的內容......
                      </div>
                      <!-- 等待中 -->
                      <div
                        v-if="currentTab == 'pending'"
                        class="text-cl-BEB9C5 text-xs"
                      >
                        已收到好友邀請
                      </div>
                    </div>
                  </section>
                </router-link>
                <!-- 功能 設定視窗 -->
                <section class="flex gap-3 relative items-center">
                  <section
                    v-if="activeIndex === index"
                    class="settings-window absolute right-2 top-4 z-10"
                  >
                    <div
                      @mouseleave="closeSettings"
                      class="flex flex-col gap-2 w-36 bg-cl-141316E5 py-2 px-3 rounded-md"
                    >
                      <div
                        @click.stop="toggleFriendsInfo()"
                        class="text-cl-C4BECD click-hover px-2 py-1"
                      >
                        查看資料
                      </div>
                      <div class="text-rose-600 click-hover px-2 py-1">
                        移除好友
                      </div>
                    </div>
                  </section>
                  <!-- 所有/線上 -->
                  <div
                    v-if="currentTab == 'online' || currentTab == 'all'"
                    class="flex items-center gap-3"
                  >
                    <div
                      class="flex justify-center items-center bg-cl-212026 w-8 h-8 rounded-full"
                    >
                      <router-link :to="{ name: 'PageChatRoom' }">
                        <img
                          class="message-icon hover:scale-110"
                          src="/icons/message.svg"
                          alt=""
                        />
                      </router-link>
                    </div>
                    <div
                      class="flex justify-center items-center bg-cl-212026 w-8 h-8 rounded-full"
                    >
                      <img
                        @click.stop="toggleSettings(index)"
                        :class="{ 'hover:animate-stop': activeIndex === index }"
                        class="w-5 hover:animate-spin-slow"
                        src="/icons/settings.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <!-- 等待確認 -->
                  <div class="flex items-center gap-3">
                    <div
                      v-if="currentTab == 'pending'"
                      class="flex justify-center items-center bg-cl-212026 w-8 h-8 rounded-full"
                    >
                      <img
                        class="check-icon w-6"
                        src="/icons/check_default.svg"
                        alt=""
                      />
                    </div>
                    <div
                      v-if="currentTab == 'pending' || currentTab == 'blocked'"
                      class="flex justify-center items-center bg-cl-212026 w-8 h-8 rounded-full"
                    >
                      <img
                        class="cancel-icon w-5"
                        src="/icons/cancel_dafault.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 好友空值展示 -->
      <section
        v-if="currentTab !== 'friends' && false"
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
    </main>
    <section v-if="isShowInfoFriend" class="absolute top-0 z-30">
      <BlockUserInfo :friendState="friendState" />
    </section>
  </div>
</template>

<script setup lang="ts" name="BlockFrinedsList">
import BlockTabsEmptyState from "../Block/BlockTabsEmptyState.vue";
import BlockUserInfo from "../Block/BlockUserInfo.vue";
import { isShowInfoFriend } from "../../store/PopStore";

import { ref, defineProps, computed, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  currentTab: string;
  selectTab: (tab: string) => void;
}>();

const tab = ref("friends");
const friendState = ref(false);
const hoverIndex = ref<number | null>(null);

/*  currentTan 計算顯示的文字 */
const currentTabText = computed(() => {
  switch (props.currentTab) {
    case "online":
      return "線上";
    case "all":
      return "全部";
    case "pending":
      return "等待確認";
    case "blocked":
      return "封鎖";
    default:
      return "";
  }
});

const toggleFriendsInfo = () => {
  isShowInfoFriend.value = true;
  friendState.value = true;
};

// 使用 ref 來存儲輸入框的值
const inputValue = ref("");
// 判斷輸入框的值來決定按鈕的 disabled 狀態
const isButtonDisabled = computed(() => {
  // 檢查輸入框的值是否為空
  return inputValue.value === "";
});

// 追蹤好友列表中視窗設定是顯示的
const activeIndex = ref<number | null>(null);
// 設定好友列表的視窗獨立判斷顯示
const toggleSettings = (index: number) => {
  // activeIndex.value === index 判斷當前用戶點擊好友列表的索引
  activeIndex.value = activeIndex.value === index ? null : index;
};

// 關閉設定視窗
const closeSettings = () => {
  activeIndex.value = null;
};

// 點擊旁邊關閉視窗
const handleClickOutside = (event: MouseEvent) => {
  // 將事件目標轉換為 HTMLElement 類型
  const target = event.target as HTMLElement;
  // 選取所有具有 'settings-window' 類名的元素
  const settingsWindows = document.querySelectorAll(".settings-window");
  // 將 NodeList 轉換為數組，並檢查點擊目標是否在任何設定視窗內
  const clickedInside = Array.from(settingsWindows).some((window) =>
    window.contains(target)
  );

  // 如果點擊不在任何設定視窗內，則關閉設定視窗
  if (!clickedInside) {
    closeSettings();
  }
};

// 全局點擊事件監聽，用來檢測是否點擊視窗外部
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
// 移除全局監聽
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss" scoped>
button:disabled {
  opacity: 0.5;
  // cursor: not-allowed;
}

.click-hover {
  @apply hover:bg-cl-3B3743 hover:rounded-md cursor-pointer;
}

.check-icon:hover {
  content: url("/public/icons/check_light.svg");
}

.cancel-icon:hover {
  content: url("/public/icons/cancel_light.svg");
}
.message-icon:hover {
  content: url("/public/icons/message_purple.svg");
}
</style>
