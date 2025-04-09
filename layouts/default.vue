<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <div class="fixed w-full z-10 ">
      <Header />
    </div>

    <div class="flex flex-1  "> <!-- Added pt-16 to account for header height -->
      <!-- Sidebar -->
      <div class="fixed h-screen pt-16"> <!-- Added pt-16 to account for header height -->
        <Sidebar />
      </div>

      <!-- Main Content -->
      <main class="flex-1 mt-8 p-4 bg-gray-50 ml-64 pt-16 overflow-y-auto"> <!-- Added pt-16 -->
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Sidebar from '~/components/Sidebar.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>

</style>
