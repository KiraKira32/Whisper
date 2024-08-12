<template>
  <div class="hangout-persons-list">
    <main class="min-w-64">
      <div class="h-calc-50 pr-2 pt-3 pb-10">
        <div class="h-full overflow-y-auto scroll-bar-style">
          <section class="friends-flex flex-col gap-3 cursor-pointer">
            <div class="flex gap-2 w-fw-212 py-4">
              <section class="flex flex-col gap-2">
                <p class="text-cl-E8E1F1 text-xs">使用者:)</p>
                <div class="flex gap-2">
                  <div
                    class="flex relative w-8 h-8 bg-white rounded-full flex-shrink-0"
                  >
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
                      使用者的暱稱
                    </div>
                    <div
                      class="friends-state line-clamp-1 text-xs text-cl-BEB9C5"
                    >
                      好友狀態好友狀態好友狀態好友狀態好友狀態好友狀態好友狀態
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <p class="text-cl-E8E1F1 text-xs">成員列表: 87人數</p>
            <div
              class="friends-info flex gap-2 w-fw-212 px-2 py-2 hover:bg-cl-BAA9C180 hover:rounded-md"
              v-for="i in 39"
              :key="i"
            >
              <router-link :to="{ name: 'PageChatRoom' }">
                <section class="flex gap-2">
                  <div
                    class="relative w-8 h-8 bg-white rounded-full flex-shrink-0"
                  >
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
                      class="friends-state line-clamp-1 text-xs text-cl-BEB9C5"
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

<script setup leng="ts" name="HangoutPersonsList"></script>
