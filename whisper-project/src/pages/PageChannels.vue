<template>
  <div class="page-channels flex">
    <UserChannels />
    <section class="h-screen flex-col flex justify-between bg-cl-353040">
      <div class="">
        <UserFriendsList />
      </div>
      <div class=""><UserStatus /></div>
    </section>
    <section>
      <RouterView />
    </section>
  </div>
</template>

<script setup lang="ts" name="PageChannels">
import UserChannels from "../components/UserChannels.vue";
import UserFriendsList from "../components/UserFriendsList.vue";
import UserStatus from "../components/UserStatus.vue";
</script>

<style scoped></style>
