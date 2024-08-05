<template>
  <div
    class="page-login h-screen flex items-center justify-center bg-cl-9C96CD"
  >
    <main>
      <div class="login-form">
        <div>
          <div class="flex flex-col items-center">
            <div class="text-2xl my-2 font-bold text-purple-50">歡迎回來！</div>
            <div class="text-l text-gray-400 mb-6">我們很高興又見到您了！</div>
          </div>
        </div>
        <section>
          <VForm @submit="onSubmit" v-slot="{ meta }">
            <label for="email" class="form-label"
              >電子郵件 <span class="text-red-500">*</span></label
            >
            <VField
              v-model="userForm.email"
              name="電子郵件"
              type="email"
              rules="required|email"
              class="login-input"
              placeholder="you@example.com"
            />
            <ErrorMessage class="text-red-500 text-xs" name="電子郵件" />
            <label for="password" class="form-label"
              >密碼 <span class="text-red-500">*</span></label
            >
            <VField
              v-model="userForm.password"
              type="password"
              name="密碼"
              class="login-input"
              placeholder="password"
              rules="required|regex:/^[A-Za-z0-9]+$/|min:6"
            />
            <ErrorMessage class="text-red-500 text-xs" name="密碼" />
            <p class="text-xs my-3 text-center text-violet-400">
              忘記您的密碼?
            </p>
            <button class="login-btn" :disabled="!meta.valid">登入</button>
            <p class="mt-3 text-sm text-neutral-500">
              需要一個帳號？
              <router-link to="/register"
                ><span class="text-violet-400 hover:underline hover"
                  >註冊</span
                ></router-link
              >
            </p>
          </VForm>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts" name="PageLogin">
import { ref } from "vue";
import { defineRule } from "vee-validate";
// 引入 VeeValidate 的驗證規則
import { required, email, min } from "@vee-validate/rules";
/* 定義驗證規則 */
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
// 密碼自定義規則
defineRule("regex", (value: string) => {
  // 檢查是否包含至少一個大寫字母
  const hasUpperCase = /[A-Z]/.test(value);
  // 檢查是否包含至少一個數字
  const hasNumber = /[0-9]/.test(value);
  // 檢查是否包含至少一個小寫字母
  const hasSymobol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

  if (hasUpperCase && hasNumber && hasSymobol) {
    return true;
  }
  if (value.length < 8) {
    return "密碼長度需至少8個字元";
  }
  if (value.length >= 21) {
    return "密碼長度不能超過20個字元";
  }
  return "密碼需至少包含一個大寫字母、一個特殊符號和一個數字";
});

const userForm = ref({
  email: "",
  password: "",
});

const onSubmit = () => {
  console.log("表單資料:", userForm.value);
};
</script>

<style scoped>
/* 確保瀏覽器默認的 margin 和 padding 被清除 */

.form-label {
  @apply mt-4 mb-2 block text-sm font-medium text-neutral-300;
}

.login-form {
  @apply rounded-md p-4 bg-cl-2E2C36
  w-login-custom-336 
  sm:p-6 sm:w-login-custom-420 
  lg:w-login-custom-420 
  max-w-sm 
  shadow-md;
}

.login-input {
  @apply px-3 py-3 
  text-gray-300    bg-cl-1F1F1F 
  border-transparent border 
  shadow-sm 
  placeholder-neutral-500 
  focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB 
  block w-full 
  rounded-md sm:text-sm focus:ring-1;
}

.login-btn {
  @apply w-full disabled:bg-zinc-600  hover:bg-violet-600 bg-cl-7225EB rounded-md py-3 text-purple-50;
}
</style>
