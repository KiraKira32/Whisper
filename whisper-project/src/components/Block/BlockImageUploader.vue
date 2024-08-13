<template>
  <!-- 上傳圖片-->
  <div class="block-image-uploader">
    <section>
      <div class="flex flex-col items-center justify-center">
        <div v-if="!imagePreview" class="flex justify-center pt-2 pb-4">
          <img class="h-36" src="/icons/uploading_loop.svg" alt="" />
        </div>
        <!-- 圖片預覽-->
        <div v-if="imagePreview" class="pt-2 pb-4">
          <img
            :src="imagePreview"
            alt="Image Preview"
            class="my-2 mx-2 w-32 h-32 rounded-full object-cover object-center"
          />
        </div>
        <!-- 隱藏的文件輸入區塊 -->
        <input
          type="file"
          @change="onFileChange"
          class="hidden"
          ref="fileInput"
          accept="image/*"
        />

        <!-- 上傳按鈕 -->
        <div class="flex gap-5">
          <button
            type="button"
            v-if="imagePreview"
            class="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            @click="removeImage"
          >
            刪除圖片
          </button>
          <button
            type="button"
            class="px-4 py-1 bg-cl-9C96CD text-white rounded hover:bg-cl-8279C9"
            @click="triggerFileInput"
          >
            封面上傳
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup name="BlockImageUploader">
import { ref, defineEmits } from "vue";

/* 預覽圖片 */
const imagePreview = ref<string | null>(null);

/* 上傳圖片 */
const fileInput = ref<HTMLInputElement | null>(null);
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const emit = defineEmits(["update-image"]);

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
      emit("update-image", imagePreview.value);
    };
    /* 用於將檔案轉換為 base64 */
    reader.readAsDataURL(file);
  }
};

/* 移除上傳圖片 */
const removeImage = () => {
  imagePreview.value = null;
  if (fileInput.value) {
    fileInput.value.value = "";
  }
};
</script>

<style scoped></style>
