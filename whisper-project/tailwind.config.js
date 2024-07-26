/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-mode="dark"]'],//手動切換深色模式。
  // darkMode: 'selector', 
  theme: {
    extend: {
      colors: {
        // 登入頁面
        'login-background': '#9C96CD',
        'login-form-background': '#2E2C36',
        'login-input': '#1F1F1F',
        'lg-7225EB': '#7225EB',
        'lg-border': '#8661C1',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      width: {
        // 登入頁面
        'login-custom-420': '26.25rem', 
      },
    },
  },
  plugins: [],
}

