<template>
  <div
    class="register h-screen flex items-center justify-center bg-login-background"
  >
    <main>
      <div class="login_form">
        <div>
          <div class="login_form_title flex flex-col items-center">
            <div class="text-2xl mt-2 font-bold text-purple-50">建立新帳號</div>
          </div>
        </div>
        <!-- 添加表單 submit 處理器，並不需要 prevent 因為 VeeValidate 會幫我們處理 -->
        <VForm @submit="onSubmit" v-slot="{ meta }">
          <!-- 電子郵件 -->
          <label for="email" class="register_form_label"
            >電子郵件 <span class="text-red-500">*</span></label
          >
          <VField
            name="電子郵件"
            type="email"
            rules="required|email"
            class="login_input"
            placeholder="you@example.com"
          />
          <ErrorMessage class="text-red-500 text-xs" name="電子郵件" />
          <!-- 使用者名稱 -->
          <label for="password" class="register_form_label"
            >使用者名稱 <span class="text-red-500">*</span>
          </label>
          <VField
            type="userName"
            name="使用者名稱"
            class="login_input"
            placeholder="使用者名稱"
            rules="required"
          />
          <ErrorMessage class="text-red-500 text-xs" name="使用者名稱" />
          <!-- 密碼 -->
          <label for="password" class="register_form_label"
            >密碼 <span class="text-red-500">*</span></label
          >
          <VField
            v-model="password"
            type="password"
            name="密碼"
            class="login_input"
            placeholder="password"
            rules="required|min:6|regex:/^[A-Za-z0-9]+$/"
          />
          <ErrorMessage class="text-red-500 text-xs" name="密碼" />

          <button type="submit" class="register_btn" :disabled="!meta.valid">
            註冊
          </button>
          <div class="mt-3 text-sm text-neutral-500">
            <router-link to="/login"
              ><span class="text-violet-400 hover:underline"
                >已經有一個帳號？</span
              ></router-link
            >
          </div>
        </VForm>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts" name="Register">
import { ref } from "vue";
import { useFormStore } from "../store/useFormStore.ts";

// 使用 Pinia Store
// const formStore = useFormStore();
// const { name, password, errors, onSubmit } = formStore;

const { handleSubmit, userName, password, onSubmit, errors, resetForm } =
  useFormStore;

const form = ref({
  email: "",
  userName: "",
  password: "",
});
</script>

<style lang="scss" scoped>
/* 確保瀏覽器默認的 margin 和 padding 被清除 */
body,
html {
  @apply m-0 p-0;
}

.register_form_label {
  @apply mt-4 mb-2 block text-sm font-medium text-neutral-300;
}
.login_form {
  @apply bg-login-form-background rounded-md p-6 w-login-custom-420 shadow-md;
}

.login_input {
  @apply px-3 py-3 text-gray-300  border-transparent bg-login-input border shadow-sm placeholder-neutral-500 focus:outline-none focus:border-lg-7225EB focus:ring-lg-7225EB block w-full rounded-md sm:text-sm focus:ring-1;
}

.register_btn {
  @apply mt-5 w-full hover:bg-violet-600 bg-lg-7225EB rounded-md py-3 text-purple-50;
}
</style>
