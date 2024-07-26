import { defineConfig } from "vite";
// import { io } from 'socket.io-client';

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
