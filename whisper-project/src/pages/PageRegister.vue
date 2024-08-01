<template>
  <div class="register h-screen flex items-center justify-center bg-cl-9C96CD">
    <main>
      <div class="register-form">
        <section>
          <div class="flex flex-col items-center">
            <div class="text-2xl mt-2 font-bold text-purple-50">建立新帳號</div>
          </div>
        </section>
        <!-- 添加表單 submit 處理器，並不需要 prevent 因為 VeeValidate 會幫我們處理 -->
        <VForm @submit="onSubmit" v-slot="{ meta }">
          <!-- 電子郵件 -->
          <label for="email" class="register-form-label"
            >電子郵件 <span class="text-red-500">*</span></label
          >
          <VField
            v-model="form.email"
            name="電子郵件"
            type="email"
            rules="required|email"
            class="register-input"
            placeholder="you@example.com"
          />
          <ErrorMessage class="text-red-500 text-xs" name="電子郵件" />

          <!-- 使用者名稱 -->

          <label for="userName" class="register-form-label"
            >使用者名稱 <span class="text-red-500">*</span>
          </label>
          <VField
            v-model="form.userName"
            type="userName"
            name="使用者名稱"
            class="register-input"
            placeholder="使用者名稱"
            rules="required"
          />
          <ErrorMessage class="text-red-500 text-xs" name="使用者名稱" />

          <!-- 密碼 -->

          <label for="password" class="register-form-label"
            >密碼 <span class="text-red-500">*</span></label
          >

          <VField
            v-model="form.password"
            type="password"
            name="密碼"
            class="register-input"
            placeholder="password"
            rules="required|regex:/^[A-Za-z0-9]+$/|min:6"
          />
          <ErrorMessage class="text-red-500 text-xs" name="密碼" />

          <label for="confirmPassword" class="register-form-label"
            >再次輸入密碼 <span class="text-red-500">*</span></label
          >

          <VField
            v-model="form.confirmPassword"
            type="password"
            name="再次輸入密碼"
            class="register-input"
            placeholder="password"
            rules="required|regex:/^[A-Za-z0-9]+$/|min:6|confirmed:密碼"
          />
          <ErrorMessage class="text-red-500 text-xs" name="再次輸入密碼" />

          <button type="submit" class="register-btn" :disabled="!meta.valid">
            送出
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

<script setup lang="ts" name="PageRegister">
import { ref } from "vue";
import { defineRule } from "vee-validate";
// 引入 VeeValidate 的驗證規則
import { required, email, min } from "@vee-validate/rules";

/* 定義驗證規則 */
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
/* 密碼自定義規則 */
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
/* 密碼雙重驗證 */
defineRule("confirmed", (value, [target]: [string], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }
  return "密碼不一致，請重新輸入";
});
const form = ref({
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
});

const onSubmit = () => {
  console.log("表單資料:", form.value);
};
</script>

<style lnag="scss" scoped>
/* 確保瀏覽器默認的 margin 和 padding 被清除 */
body,
html {
  @apply m-0 p-0;
}

.register-form-label {
  @apply mt-4 mb-2 block text-sm font-medium text-neutral-300;
}
.register-form {
  @apply rounded-md p-4 bg-cl-2E2C36
  w-login-custom-336 
  sm:p-6 sm:w-login-custom-420
  lg:w-login-custom-420 
  max-w-sm 
  shadow-md;
}

.register-input {
  @apply px-3 py-3 text-gray-300  border-transparent bg-cl-1F1F1F border shadow-sm placeholder-neutral-500 focus:outline-none focus:border-cl-7225EB focus:ring-cl-7225EB block w-full rounded-md sm:text-sm focus:ring-1;
}

.register-btn {
  @apply mt-5 w-full disabled:bg-zinc-600  hover:bg-violet-600 bg-cl-7225EB rounded-md py-3 text-purple-50;
}
</style>
