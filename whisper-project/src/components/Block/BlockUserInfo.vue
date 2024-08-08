<template>
  <div class="block-user-info">
    <main
      v-if="isShowInfoUser || isShowInfoFriend"
      @click="closeInfo"
      class="fixed top-0 left-0 right-0 bottom-0"
    >
      <section
        class="w-screen h-screen bg-cl-1B1B1BCC flex justify-center items-center"
      >
        <div
          class="w-600 rounded-md"
          :class="userState ? 'bg-cl-4D4866 ' : 'bg-cl-594866 '"
          @click.stop
        >
          <div class="relative p-6">
            <div class="cursor-pointer">
              <img
                @click="closeInfo"
                class="absolute right-6 top-6 hover:-translate-y-1 hover:scale-110 duration-300"
                src="/icons/round_cancel.svg"
                alt=""
              />
            </div>

            <div class="flex gap-5 items-center mt-2">
              <div class="bg-cl-353040 w-120 h-120 rounded-full"></div>
              <div class="flex flex-col gap-1">
                <div class="text-xl font-bold text-cl-E8E1F1">使用者的名稱</div>
                <div class="text-base ont-bold text-cl-E8E1F1">
                  ragdoll54@gmail.com
                </div>
              </div>
            </div>
            <div class="flex justify-end cursor-pointer">
              <div
                v-if="userState"
                class="flex gap-2 text-white bg-cl-BAA9C180 rounded py-1 px-2 hover:bg-cl-F2E9F680 transition-colors duration-500 ease-in-out"
              >
                <img src="/icons/pencil_light.svg" alt="icon" />
                <p @click="clickEdit" class="text-sm">編輯個人資料</p>
              </div>

              <div
                v-if="friendState"
                @click="toggleChatRoom"
                class="flex gap-2 text-white bg-cl-BAA9C180 rounded py-1 px-2 hover:bg-cl-F2E9F680 transition-colors duration-500 ease-in-out"
              >
                <img src="/icons/message_light.svg" alt="icon" />
                <p class="text-sm">傳送訊息</p>
              </div>
            </div>
            <div
              class="flex flex-col bg-cl-2E2C36 my-4 rounded-md pt-3 pb-3 px-5"
            >
              <div class="text-white font-bold text-sm">狀態消息</div>

              <p class="h-20 text-white mt-2 text-sm">123132123</p>
              <div class="border-b border-cl-6B5D83 w-full my-2"></div>
              <div class="flex gap-2 items-center justify-end">
                <p class="text-cl-E8E1F1 text-sm mb-1">成為成員時間</p>
                <p class="text-white text-xs">2024年8月6日</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <BlockUserEdit v-if="isShowEdit" />
  </div>
</template>

<script setup lang="ts" name="BlockUserInfo">
// import { ref } from "vue";
import BlockUserEdit from "./BlockUserEdit.vue";
import {
  isShowInfoUser,
  isShowEdit,
  isShowInfoFriend,
} from "../../store/LayoutStore";
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

defineProps<{
  userState?: boolean;
  friendState?: boolean;
}>();

const emit = defineEmits<{
  (e: "update-user-state", value: boolean): void;
}>();

/* 編輯資料 */
const clickEdit = () => {
  isShowEdit.value = true;
};

const router = useRouter();

/* 導向聊天室 關閉使用者資訊 */
const toggleChatRoom = () => {
  router.push({ name: "PageChatRoom" });
  isShowInfoFriend.value = false;
};

/* 關閉視窗 */
const closeInfo = () => {
  isShowInfoUser.value = false;
  isShowInfoFriend.value = false;
  /* 更新狀態  */
  emit("update-user-state", false);
};
</script>
