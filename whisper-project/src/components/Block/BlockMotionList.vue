<template>
  <div class="block-motion-list">
    <main
      class="h-calc-50 bg-cl-2E2C36 min-w-388 border-l border-cl-6B5D83 px-4"
    >
      <div
        class="text-cl-C4BECD font-bold pt-8 pb-3 border-l-1 border-cl-9C96CD"
      >
        動態牆
      </div>
      <div class="pb-3">
        <!-- list-scroll  -->
        <div class="h-calc-150 overflow-y-auto scroll-bar-style">
          <section class="friends-flex flex-col gap-3 cursor-pointer">
            <div
              class="friends-info flex gap-2 w-full px-2 py-2"
              v-for="i in 1"
              :key="i"
            >
              <section class="flex bg-cl-1F1F1F w-fu rounded-lg p-2 gap-2">
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
                <div class="">
                  <p
                    class="friends-name line-clamp-1 text-sm font-bold text-cl-C4BECD"
                  >
                    好友暱稱好友暱稱
                  </p>
                  <p class="friends-state line-clamp-1 text-xs text-cl-C3C3C3">
                    更新過後的好友狀態好友狀態好友狀態好友狀態好友狀態好友狀態好友狀態
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
      <!-- 空值 -->
      <section
        v-if="false"
        class="flex flex-col items-center justify-center py-4"
      >
        <div class="text-cl-C4BECD font-bold">雖然現在很安靜...</div>
        <div class="text-cl-6B5D83 font-bold">
          一但有人更新狀態欄位，就會在這裡顯示！
        </div>
      </section>
    </main>
  </div>
</template>
