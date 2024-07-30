/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-mode="dark"]'],//手動切換深色模式。
  // darkMode: 'selector', 
  theme: {
    extend: {
      colors: {
        // 登入頁面
        'cl-2E2C36': '#2E2C36',
        'cl-1F1F1F': '#1F1F1F',
        'cl-7225EB': '#7225EB',
        'cl-9C96CD': '#9C96CD',
   
        // 頻道_群組區塊
        'cl-221F26':'#221F26',
        'cl-6B5D83' :"#6B5D83",
        'cl-2E2C36' :"#2E2C36",
        // 頻道_好友列表
        'cl-473653' :"#473653",
        'cl-C4BECD' :"#C4BECD",
        'cl-353040' :"#353040",
        'cl-BAA9C180': '#BAA9C180',
        'cl-E8E1F1': '#E8E1F1',
        'cl-C3C3C3': '#C3C3C3',

      },
      width: {
        // 登入頁面
        'login-custom-420': '26.25rem', 
        'login-custom-336': '21rem', 
        // 頻道_群組區塊
        'cw-72': '4.5rem',
        // 頻道_好友列表
        'fw-212': '13.25rem',
        
      },
      height: {
        //頻道_好友列表
        'fh-50': '3.125rem',
        'fh-45': '2.8125rem',
        '64vh': '64vh',
        '74vh': '74vh',
        '80vh': '80vh',
        '85vh': '85vh',
        'calc-239': 'calc(100dvh - 239px)',
      },
      padding: {
        //頻道_好友列表

      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        // 隱藏滾動條
        '.scrollbar-hidden': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE 10+ */
          '&::-webkit-scrollbar': {
            'display': 'none', /* Safari 和 Chrome */
          },
        },
      }, ['responsive']);
    },
  ],
}

