<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const layout = computed(
  () => router.currentRoute.value.meta?.layout || "Default"
);
</script>

<template>
  <component :is="layout"></component>
</template>