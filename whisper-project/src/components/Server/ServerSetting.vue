<template>
  <div class="hangout-server" v-if="isServerInfo" @click="closeServer">
    <main class="absolute top-0 right-0 z-20">
      <section
        class="w-screen h-screen bg-cl-1B1B1BCC flex justify-center items-center"
      >
        <div class="relative bg-cl-4D4866 rounded-md" @click.stop>
          <img
            @click.stop="closeServer"
            class="absolute right-4 top-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300"
            src="/icons/round_cancel.svg"
            alt=""
          />
          <section class="py-6 px-10">
            <div class="text-white text-xl font-bold">伺服器設定</div>
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

            <!-- <section class="pt-5">
              <p class="text-cl-E8E1F1 font-bold text-sm">伺服器成員： 10 位</p>
            </section> -->
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts" name="HangoutServer">
import { isServerInfo } from "../../store/PopStore";
import { ref } from "vue";

const inputName = ref("");
/* 預覽圖片 */
const imagePreview = ref<string | null>(null);

/* 上傳圖片 */
const fileInput = ref<HTMLInputElement | null>(null);
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};
/*選擇圖片 */
const onFileChange = (event: Event) => {
  console.log(event);
  const target = event.target as HTMLInputElement;
  /* 取得選擇的圖片 & 只取得第一張 */
  const file = target.files && target.files[0];
  /* 檢查文件是否存在 */
  if (file) {
    /* 建立讀取檔案的內容 */
    const reader = new FileReader();
    reader.onload = () => {
      /* 轉換為字符串 */
      imagePreview.value = reader.result as string;
      /* 傳遞圖片的內容 */
    };
    /* 用於將檔案轉換為 base64 */
    reader.readAsDataURL(file);
  }
};

const closeServer = () => {
  isServerInfo.value = false;
};
</script>
