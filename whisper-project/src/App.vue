<template>
  <div>
    <!-- <button @click="darkModeStore.toggleDarkMode">
      切換到{{ darkModeStore.isDarkMode ? "日間模式" : "夜間模式" }}
    </button> -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useDarkModeStore } from "./store/darkModeStore";

const darkModeStore = useDarkModeStore();
</script>

<style scoped></style>
