<template>
  <div class="page-channels flex">
    <UserChannels />
    <section
      v-if="!isHiddenPage"
      class="h-screen flex-col flex justify-between bg-cl-353040"
    >
      <UserFriendsList />
      <UserStatus />
    </section>
    <section class="page-channels">
      <RouterView />
    </section>
  </div>
</template>

<script setup lang="ts" name="PageChannels">
import UserChannels from "../components/UserChannels.vue";
import UserFriendsList from "../components/UserFriendsList.vue";
import UserStatus from "../components/UserStatus.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/* 隱藏頁面 */
const isHiddenPage = computed(() => {
  return route.name === "PageServer";
});
</script>

<style scoped></style>
