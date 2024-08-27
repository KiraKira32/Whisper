<template>
  <div class="hangout-server" v-if="isServerUser" @click="closeUser">
    <main class="absolute top-0 right-0 z-20">
      <section
        class="w-screen h-screen bg-cl-1B1B1BCC flex justify-center items-center"
      >
        <div class="relative bg-cl-4D4866 rounded-md" @click.stop>
          <img
            @click.stop="closeUser"
            class="absolute right-4 top-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300"
            src="/icons/round_cancel.svg"
            alt=""
          />
          <section class="py-6 px-10">
            <div class="text-white text-xl font-bold">使用者設定</div>
            <section
              class="py-5 flex justify-between items-center gap-8 border-b border-cl-9C96CD"
            >
              <!-- 隱藏的文件輸入區塊 -->
              <input
                type="file"
                @change="onFileChange"
                class="hidden"
                ref="fileInput"
                accept="image/*"
              />
              <!-- 圖片預設區塊 -->
              <section class="flex flex-shrink-0">
                <div class="relative">
                  <!-- 上傳圖片顯示區塊 -->
                  <div v-if="imagePreview">
                    <img
                      :src="imagePreview"
                      alt="Image Preview"
                      class="w-24 h-24 rounded-full object-cover object-center"
                    />
                  </div>
                  <!-- 空值_圖片預設區塊 -->
                  <div
                    v-else
                    class="bg-cl-353040 w-24 h-24 flex-shrink-0 rounded-full"
                  ></div>
                  <!-- 編輯圖片 -->
                  <div
                    @click="triggerFileInput()"
                    class="absolute right-0 bottom-1 bg-cl-1B1B1BCC w-8 h-8 rounded-full cursor-pointer hover:bg-cl-BAA9C180 transition duration-500"
                  >
                    <img class="p-1" src="/icons/camera.svg" alt="" />
                  </div>
                </div>
              </section>

              <section>
                <p class="text-cl-E8E1F1 font-bold text-sm mb-2">伺服器名稱</p>
                <input
                  v-model="inputName"
                  type="text"
                  class="text-cl-E8E1F1 bg-cl-2E2C36 rounded w-64 focus:outline-none px-2 py-2 text-sm"
                />
              </section>
            </section>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts" name="HangoutUserSetting">
import { isServerUser } from "../../store/PopStore";
import { ref } from "vue";

const closeUser = () => {
  isServerUser.value = false;
};
</script>
