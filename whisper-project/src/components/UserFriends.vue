<template>
  <div class="user-friends">
    <section class="w-screen h-fh-50 bg-cl-473653 flex items-center">
      <section class="flex gap-3 pl-5">
        <img src="/icons/friend_light.svg" alt="" />
        <div class="text-cl-C4BECD font-bold text-base">好友</div>
      </section>
      <div class="border-r border-cl-564E63 h-7 mx-3"></div>
      <!-- 功能列表 -->
      <section class="flex gap-4">
        <div v-for="state in tabs" :key="state">
          <div
            @click="selectTab(state)"
            :class="{
              'py-1 px-3 cursor-pointer font-normal rounded': true,
              'text-cl-C4BECD hover:bg-cl-87748F hover:text-white':
                currentTab !== state,
              'bg-cl-87748F text-white': currentTab === state,
            }"
          >
            {{ state }}
          </div>
        </div>
      </section>
      <section class="ml-5">
        <div class="text-cl-E8E0F5 py-1 px-3 bg-cl-8E4FF1 rounded">
          新增好友
        </div>
      </section>
    </section>

    <section></section>
  </div>
</template>

<script setup lang="ts" name="UserFriends">
import { ref } from "vue";

const tabs = ref({
  online: "線上",
  all: "所有",
  pending: "等待中",
  blocked: "已封鎖",
});

// 預設當前 Tab 狀態
const currentTab = ref<string>("online");

// 切換 Tab 狀態方法
const selectTab = (tab: string) => {
  currentTab.value = tab;
  console.log("currentTab", currentTab.value);
};
</script>

<style lang="scss" scoped></style>
