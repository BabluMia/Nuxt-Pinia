<template>
  <aside class="h-full w-64 bg-gray-100 shadow-md p-2">
    <DxList
      :items="menuItems"
      :selectionMode="'single'"
      @itemClick="(e) => router.push(e.itemData.link)"
    />
  </aside>
</template>

<script setup lang="ts">
import { DxList } from 'devextreme-vue/list';
import { useRouter } from 'nuxt/app';

const router = useRouter();
const menuItems = [
  { text: 'Home', link: '/' }, 
  { text: 'TODO', link: '/todo' },
];
</script>

<style scoped>
aside {
  min-height: 100vh;
}
</style>
