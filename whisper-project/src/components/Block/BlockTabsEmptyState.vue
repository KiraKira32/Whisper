<template>
  <div class="block-tabs-empty-state">
    <div class="flex-col text-center">
      <div class="text-cl-C4BECD">
        {{ title }}
      </div>
      <div
        v-if="currentTab == 'all'"
        class="my-2 inline-block text-cl-E8E0F5 py-1 px-3 bg-cl-8E4FF1 rounded cursor-pointer"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="BlockTabsEmptyState">
defineProps({ title: String, currentTab: String });
</script>
