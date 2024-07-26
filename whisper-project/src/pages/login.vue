<template>
  <div
    class="login h-screen flex items-center justify-center bg-login-background"
  >
    <main>
      <div class="login_form">
        <div>
          <!-- <img src="" alt="" /> -->
          <div class="login_form_title flex flex-col items-center">
            <div class="text-2xl my-2 font-bold text-purple-50">歡迎回來！</div>
            <div class="text-l text-gray-400 mb-6">我們很高興又見到您了！</div>
          </div>
        </div>
        <section>
          <input
            name="email"
            class="login_input"
            placeholder="you@example.com"
          />
          <input name="password" class="login_input" placeholder="password" />
          <p class="text-xs mb-3 text-center text-violet-400">忘記您的密碼?</p>
          <button class="login_btn">登入</button>
          <p class="mt-3 text-sm text-neutral-500">
            需要一個帳號？
            <router-link to="/register"
              ><span class="text-violet-400 hover:underline hover"
                >註冊</span
              ></router-link
            >
          </p>
        </section>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
/* 確保瀏覽器默認的 margin 和 padding 被清除 */
body,
html {
  @apply m-0 p-0;
}

.login_form {
  @apply bg-login-form-background rounded-md p-6 w-login-custom-420 shadow-md;
}

.login_input {
  @apply px-3 py-3 mb-4 text-gray-300  border-transparent bg-login-input border shadow-sm placeholder-neutral-500 focus:outline-none focus:border-lg-7225EB focus:ring-lg-7225EB block w-full rounded-md sm:text-sm focus:ring-1;
}

.login_btn {
  @apply w-full hover:bg-violet-600 bg-lg-7225EB rounded-md py-3 text-purple-50;
}
</style>
