<template>
  <div class="user_friends_lsit">
    <main class="w-60 bg-cl-353040">
      <div class="h-fh-50 bg-cl-473653"></div>
      <section class="friends_block friends_flex my-4 cursor-pointer">
        <div
          class="w-fw-212 h-fh-45 flex gap-3 items-center px-4 py-3 hover:bg-cl-BAA9C180 hover:rounded-md"
        >
          <img
            class="friends_icon w-7 h-5 object-contain"
            src="/icons/friend_default.svg"
            alt=""
          />
          <div class="friends_text text-cl-C4BECD hover:text-cl-E8E1F1">
            好友
          </div>
        </div>
      </section>
      <div class="flex justify-center mb-4">
        <p class="w-fw-212 text-cl-C4BECD font-bold">私人訊息</p>
      </div>
      <div class="pr-2 pb-3">
        <!-- sm:h-65vh  -->
        <!-- h-65vh md:h-70vh lg:h-75vh -->
        <div class="h-calc-239 list_scroll overflow-y-auto">
          <section class="friends_flex flex-col gap-3 cursor-pointer">
            <div
              class="friends_info flex gap-2 w-fw-212 px-2 py-2 hover:bg-cl-BAA9C180 hover:rounded-md"
              v-for="i in 15"
              :key="i"
            >
              <div class="relative w-8 h-8 bg-white rounded-full">
                <div class="img"></div>
                <img
                  class="absolute bottom-0 right-0"
                  src="/icons/state_online.svg"
                  alt=""
                />
              </div>
              <div>
                <div class="friends_name text-sm font-bold text-cl-C4BECD">
                  好友暱稱
                </div>
                <div class="friends_state text-xs text-cl-C3C3C3">好友狀態</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts" name="UserFriendsList"></script>

<style lang="scss" scoped>
.user_friends_lsit {
  .friends_block:hover {
    .friends_icon {
      content: url("/icons/friend_light.svg");
    }
    .friends_text {
      color: #e8e1f1;
    }
  }
  /* 設置位置置中對齊*/
  .friends_flex {
    @apply flex items-center justify-center;
  }
  .friends_info:hover {
    .friends_name,
    friends_state {
      color: #e8e1f1;
    }
  }
  .list_scroll {
    /* 整體滾動條樣式 */
    &::-webkit-scrollbar {
      width: 8px;
      background: #353040;
    }
    /* 滾動條滑塊 */
    &::-webkit-scrollbar-thumb {
      border-radius: 20px;

      background: #6f687a; /* 背景顏色 */
    }
    /* 滾動條軌道 */
    &::-webkit-scrollbar-track {
      background: #1f1f1f; /* 背景顏色 */
      border-radius: 10px; /* 圓角 */
    }
  }
}
</style>
