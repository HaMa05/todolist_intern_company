<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const title = computed(() => router.currentRoute.value.meta?.title || "");
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex
      aspect-auto
      h-screen
      max-w-full
      flex-col
      justify-between
    "
  >
    <header class="flex h-14 w-full items-center justify-center bg-blue-500">
      <!-- <p class="text-center font-sans text-2xl text-white">{{ title }}</p> -->
    </header>
    <main class="flex items-center justify-center">
      <router-view />
    </main>
    <footer
      class="
        flex
        h-14
        w-full
        items-center
        justify-center justify-items-end
        bg-blue-500
      "
    ></footer>
  </div>
</template>