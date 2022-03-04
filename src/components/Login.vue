<script setup>
import { ref, reactive, computed } from "vue";
import { RouterLink } from "vue-router";

// props
const infoUser = reactive({ username: "", password: "" });

// computed
const isValid = computed(() => {
  if (infoUser.username && infoUser.password) {
    return true;
  } else {
    return false;
  }
});

const isValidUsername = computed(() => {
  return false;
});

const isValidPassword = computed(() => {
  return false;
});
// method
function submitForm() {
  console.log("Submit form");
}
</script>

<template>
  <div class="border-light-50 rounded-2xl border-2 p-10 shadow-inner">
    <p class="mb-5 text-4xl font-medium uppercase text-blue-600">
      Đăng nhập tài khoản
    </p>
    <form @submit.prevent>
      <div class="form flex flex-col gap-y-4">
        <div class="group-form">
          <label for="username">Tài khoản</label><br />
          <input
            type="text"
            id="password"
            v-model="infoUser.username"
            :class="[
              'form-input w-full rounded-lg',
              isValidUsername ? 'border-red-500' : '',
            ]"
          />
          <span v-show="isValidUsername" class="text-red-500"
            >Tài khoản không hợp lệ</span
          >
        </div>
        <div class="group-form">
          <label for="password">Mật khẩu</label><br />
          <input
            type="text"
            id="password"
            v-model="infoUser.password"
            :class="[
              'form-input w-full rounded-lg',
              isValidPassword ? 'border-red-500' : '',
            ]"
          />
          <span v-show="isValidPassword" class="text-red-500"
            >Mật khẩu không hợp lệ</span
          >
        </div>
        <div class="group-form text-sm text-blue-400">
          <router-link :to="{ name: 'register' }">
            Đăng ký tài khoản
          </router-link>
        </div>
      </div>
    </form>
    <div class="form-group mt-1">
      <button
        type="submit"
        @click="submitForm"
        :disabled="!isValid"
        :class="[
          'w-full rounded-md bg-blue-400 py-3 text-white shadow-lg',
          !isValid ? 'disabled:opacity-50' : '',
        ]"
      >
        Đăng nhập
      </button>
    </div>
  </div>
</template>