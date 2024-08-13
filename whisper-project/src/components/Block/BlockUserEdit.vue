<template>
  <div class="block-user-edit" v-if="isShowEdit" @click="closeEdit">
    <main class="fixed top-0 left-0 right-0 bottom-0">
      <section class="w-screen h-screen flex justify-center items-center">
        <!-- 使用者資料區塊 -->
        <div class="bg-cl-4D4866 w-600 rounded-md" @click.stop>
          <div class="p-6 shadow-md">
            <section class="flex gap-1 justify-between items-center">
              <div class="flex">
                <p class="text-white font-bold text-xl">使用者個人資料編輯</p>
                <img class="h-7 w-7" src="/icons/person_edit.svg" alt="" />
              </div>
              <div
                @click="backInfo"
                class="right-6 top-6 py-1 px-3 text-sm font-bold text-white bg-cl-BAA9C180 rounded cursor-pointer hover:bg-cl-9C96CD transition duration-300"
              >
                返回
              </div>
            </section>
            <div class="border-t border-cl-6B5D83 w-full mb-10 mt-4"></div>
            <!-- 使用者頭像 -->
            <section class="flex gap-5 items-center mt-5 mb-8">
              <!-- 隱藏的文件輸入區塊 -->
              <input
                type="file"
                @change="onFileChange"
                class="hidden"
                ref="fileInput"
                accept="image/*"
              />
              <!-- 圖片預設區塊 -->
              <section class="relative flex flex-shrink-0">
                <!-- 上傳圖片顯示區塊 -->
                <div v-if="imagePreview">
                  <img
                    :src="imagePreview"
                    alt="Image Preview"
                    class="w-120 h-120 rounded-full object-cover object-center"
                  />
                </div>
                <!-- 空值_圖片預設區塊 -->
                <div
                  v-else
                  class="bg-cl-353040 w-120 h-120 flex-shrink-0 rounded-full"
                ></div>
                <div
                  @click="triggerFileInput()"
                  class="absolute right-0 bottom-1 bg-cl-1B1B1BCC w-8 h-8 rounded-full cursor-pointer hover:bg-cl-BAA9C180 transition duration-500"
                >
                  <img class="m-2" src="/icons/pencil_light.svg" alt="" />
                </div>
              </section>
              <!-- 使用者名稱 -->
              <div class="flex flex-col gap-1 w-full">
                <div class="text-cl-E8E1F1">
                  <p class="font-bold text-xs mb-2">
                    顯示名稱<span class="text-rose-500">*</span>
                  </p>
                  <input
                    v-model="inputName"
                    type="text"
                    class="bg-cl-2E2C36 rounded w-full focus:outline-none px-2 py-2 text-xs"
                  />
                </div>
                <div class="border-t border-cl-6B5D83 w-full my-2"></div>
                <div class="text-base text-cl-E8E1F1">
                  <p class="font-bold text-xs">電子郵件</p>
                  <p>ragdoll54@gmail.com</p>
                  <div class="flex mt-2 gap-2">
                    <p class="text-cl-E8E1F1 text-xs mb-1">成為成員時間</p>
                    <p class="text-white text-xs">2024年8月6日</p>
                  </div>
                </div>
              </div>
            </section>
            <!-- 狀態消息 -->
            <section>
              <div class="text-cl-E8E1F1 font-bold text-sm mb-3">狀態消息</div>
              <div class="flex flex-col">
                <div class="relative text-white text-sm">
                  <textarea
                    v-model="inputStateText"
                    :maxlength="maxChars"
                    placeholder="輸入文字..."
                    class="w-full h-32 min-h-32 max-h-52 p-4 text-cl-E8E1F1 bg-cl-2E2C36 rounded-md focus:outline-none focus:ring-2 focus:ring-cl-6B5D83"
                  ></textarea>
                  <div class="absolute right-3 bottom-3 text-cl-E8E1F1">
                    {{ remainingChars }}
                  </div>
                </div>
              </div>
            </section>

            <!-- 送出按鈕 -->
            <section
              class="flex gap-3 text-white text-sm font-bold mt-5 justify-end"
            >
              <button
                type="button"
                @click="closeEdit"
                class="bg-cl-BAA9C180 px-2 p-1 rounded hover:bg-cl-F2E9F680 transition duration-300"
              >
                取消
              </button>
              <button
                type="submit"
                @click="submitEdit"
                class="bg-cl-8E4FF1 px-2 p-1 rounded hover:bg-cl-7A4CC2 transition duration-300"
              >
                確認編輯
              </button>
            </section>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts" name="BlockUserInfo">
import { isShowInfoUser, isShowEdit } from "../../store/PopStore";
import { ref, computed } from "vue";

const inputName = ref("");
const inputStateText = ref("");
const maxChars = 200;

/* 顯示剩餘字數 */
const remainingChars = computed(() => {
  return maxChars - inputStateText.value.length;
});

/* 預覽圖片 */
const imagePreview = ref<string | null>(null);

/* 上傳圖片 */
const fileInput = ref<HTMLInputElement | null>(null);
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const submitEdit = () => {
  if (inputName.value === "") {
    return alert("請輸入名稱");
  }
  console.log("inputName:", inputName.value);
  // console.log("imagePreview:", imagePreview.value);
  console.log("inputStateText:", inputStateText.value);

  /* 關閉編輯元件 */
  isShowEdit.value = false;
  isShowInfoUser.value = false;
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
      // emit("update-image", imagePreview.value);
    };
    /* 用於將檔案轉換為 base64 */
    reader.readAsDataURL(file);
  }
};

/* 關閉編輯元件 */
const closeEdit = () => {
  isShowEdit.value = false;
  isShowInfoUser.value = false;
};

const backInfo = () => {
  isShowEdit.value = false;
};
</script>

<style scoped></style>
