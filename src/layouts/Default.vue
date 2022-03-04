<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

// props
const store = useStore();
const router = useRouter();
const user = store.getters["user/getUser"];
const disableButton = ref(false);

// vuex
const logout = () => store.dispatch("user/logout");

// computed
const nameUser = computed(
  () => user?.email.replace(/\@.*/, "") || "Account Root"
);

// method
const handleLogout = async () => {
  disableButton.value = true;
  try {
    await logout();
    disableButton.value = false;
    router.go("/login");
  } catch (error) {
    disableButton.value = false;
    console.log("Not logout successful");
  }
};
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
    <header class="h-14 w-full bg-blue-500">
      <div class="content flex h-full items-center justify-between px-4">
        <p class="text-left font-sans text-lg text-white">
          Xin chào,
          <span
            class="
              cursor-pointer
              font-bold
              hover:underline hover:decoration-solid
            "
            >{{ nameUser }}</span
          >
        </p>
        <div class="button">
          <button
            class="rounded-md bg-slate-100 px-2 py-1"
            @click="handleLogout"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </header>
    <main class="flex items-center justify-center">
      <div class="px-4">
        <router-view />
      </div>
    </main>
  </div>
</template>