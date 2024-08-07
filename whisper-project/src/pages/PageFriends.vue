<template>
  <!-- 使用者Tabs區塊 -->
  <div class="user-friends w-calc-312">
    <!-- tabs切換功能 -->
    <section class="h-fh-50 bg-cl-473653 flex items-center">
      <section class="flex gap-3 pl-5">
        <img src="/icons/friend_light.svg" alt="" />
        <div class="text-cl-C4BECD font-bold text-base">好友</div>
      </section>
      <div class="border-r border-cl-564E63 h-7 mx-3"></div>
      <section class="flex gap-4">
        <div v-for="(tab, key) in tabs" :key="key">
          <div @click="selectTab(key)" :class="tabClass(key)">
            {{ tab }}
          </div>
        </div>
      </section>
    </section>

    <section class="flex w-calc-312">
      <!-- 好友列表顯示 -->
      <BlockFrinedsList :currentTab="currentTab" :selectTab="selectTab" />
      <!-- 動態牆顯示 -->
      <BlockMotionList />
    </section>
  </div>
</template>

<script setup lang="ts" name="UserFriends">
import BlockFrinedsList from "../components/Block/BlockFrinedsList.vue";
import BlockMotionList from "../components/Block/BlockMotionList.vue";
import { ref } from "vue";

const tabs = ref({
  all: "所有",
  online: "線上",
  pending: "等待中",
  blocked: "已封鎖",
  friends: "新增好友",
});

// 預設當前 Tab 狀態
const currentTab = ref<string>("all");
// 切換 Tab 狀態方法
const selectTab = (tab: string) => {
  currentTab.value = tab;
};

// Tab 動態 class 樣式
const tabClass = (key: string) => ({
  "py-1 px-3 cursor-pointer font-normal rounded": true,
  "text-cl-C4BECD hover:bg-cl-604B69 hover:text-white":
    currentTab.value !== key,
  "active bg-cl-87748F text-white": currentTab.value === key,
  "text-cl-E8E0F5 py-1 px-3 bg-cl-8E4FF1 rounded cursor-pointer":
    currentTab.value !== key && key == "friends",
});
</script>

<style lang="scss" scoped></style>
