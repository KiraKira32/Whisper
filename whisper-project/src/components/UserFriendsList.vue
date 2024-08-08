<template>
  <!-- 使用者好友列表 -->
  <div class="user-friends-lsit">
    <main class="w-60 bg-cl-353040">
      <div class="h-fh-50 bg-cl-473653"></div>
      <section class="friends-block friends-flex my-4 cursor-pointer">
        <router-link :to="{ name: 'PageFriends' }">
          <div
            class="w-fw-212 h-fh-45 flex gap-3 items-center px-4 py-3 hover:bg-cl-BAA9C180 hover:rounded-md"
          >
            <img
              class="friends-icon w-7 h-5 object-contain"
              src="/icons/friend_default.svg"
              alt=""
            />
            <div class="friends-text text-cl-C4BECD hover:text-cl-E8E1F1">
              好友
            </div>
          </div>
        </router-link>
      </section>
      <div class="flex justify-center mb-4">
        <p class="w-fw-212 text-cl-C4BECD font-bold">私人訊息</p>
      </div>
      <div class="pr-2 pb-3">
        <div class="h-calc-239 overflow-y-auto scroll-bar-style">
          <section class="friends-flex flex-col gap-3 cursor-pointer">
            <div
              class="friends-info flex gap-2 w-fw-212 px-2 py-2 hover:bg-cl-BAA9C180 hover:rounded-md"
              v-for="i in 15"
              :key="i"
            >
              <router-link :to="{ name: 'PageChatRoom' }">
                <section class="flex gap-2">
                  <div
                    class="relative w-8 h-8 bg-white rounded-full flex-shrink-0"
                  >
                    <div class="img"></div>
                    <img
                      class="absolute bottom-0 right-0"
                      src="/icons/state_online.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div
                      class="friends-name line-clamp-1 text-sm font-bold text-cl-C4BECD"
                    >
                      好友暱稱好友暱稱好友暱稱好友暱稱好友暱稱好友暱稱
                    </div>
                    <div
                      class="friends-state line-clamp-1 text-xs text-cl-C3C3C3"
                    >
                      好友狀態好友狀態好友狀態好友狀態好友狀態好友狀態好友狀態
                    </div>
                  </div>
                </section>
              </router-link>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts" name="UserFriendsList"></script>

<style lang="scss" scoped>
.user-friends-lsit {
  .friends-block:hover {
    .friends-icon {
      content: url("/icons/friend_light.svg");
    }
    .friends-text {
      color: #e8e1f1;
    }
  }
  /* 設置位置置中對齊*/
  .friends-flex {
    @apply flex items-center justify-center;
  }
  .friends-info:hover {
    .friends-name,
    friends-state {
      color: #e8e1f1;
    }
  }
}
</style>
