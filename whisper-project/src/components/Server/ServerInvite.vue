<template>
  <!-- 伺服器好友邀請 -->
  <div class="hangout-server" v-if="isServerInvite" @click="closeInvite">
    <main class="absolute top-0 right-0 z-20">
      <section
        class="w-screen h-screen bg-cl-1B1B1BCC flex justify-center items-center"
      >
        <div class="relative bg-cl-4D4866 rounded-md" @click.stop>
          <img
            @click.stop="closeInvite"
            class="absolute right-4 top-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300"
            src="/icons/round_cancel.svg"
            alt=""
          />
          <section class="py-6 px-6">
            <div class="text-white text-xl font-bold">邀請好友到聊天室</div>
            <div>
              <label class="py-3 flex">
                <input
                  class="relative w-96 bg-cl-1F1F1F rounded py-2 pr-4 pl-10 styled-input placeholder:text-m placeholder:text-cl-6B5D83 text-cl-C4BECD focus:outline-none focus:border-cl-9C96CD focus:ring-cl-9C96CD focus:ring-1"
                  type="text"
                  placeholder="搜尋好友"
                />
                <img
                  class="absolute py-3 px-3"
                  src="/icons/search.svg"
                  alt=""
                />
              </label>
            </div>
            <div
              class="p-2 flex flex-col justify-between bg-cl-2E2C36 min-h-10 max-h-48 overflow-y-auto scroll-bar-style rounded-md"
            >
              <div v-for="(i, index) in 1" :key="index" class="gap-5">
                <div
                  class="flex gap-2 items-center p-1 justify-between hover:bg-cl-3B3743 hover:rounded-md"
                >
                  <div class="flex gap-2 items-center">
                    <div class="bg-slate-300 w-8 h-8 rounded-full"></div>
                    <p class="text-cl-C4BECD text-xs">好友名稱</p>
                  </div>

                  <button
                    @click="clickInvite(index)"
                    type="button"
                    class="text-cl-C4BECD border-green-600 border px-3 py-1 rounded hover:bg-green-600 hover:text-white"
                  >
                    邀請
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts" name="HangoutUserSetting">
import { isServerInvite } from "../../store/PopStore";
import { ref } from "vue";

const InviteIndex = ref<number | null>(null);
const clickInvite = (index: number) => {
  InviteIndex.value = InviteIndex.value === index ? null : index;
  console.log("傳送邀請", index);
};

const closeInvite = () => {
  isServerInvite.value = false;
};
</script>
