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
        // 頻道_狀態 
        'cl-241D29': '#241D29',
        // 頻道_好友
        'cl-564E63': '#564E63',
        'cl-87748F': '#87748F',
        'cl-E8E0F5': '#E8E0F5',
        'cl-8E4FF1': '#8E4FF1',

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
        'calc-239': 'calc(100dvh - 239px)',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
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
        // 行數限制顯示
        '.line-clamp-1': {
          'display': '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
          'overflow': 'hidden',
          'text-overflow': 'ellipsis',
        },
      
      }, ['responsive']);
    },
  ],
}

