<script setup>
const isSignUp = ref();
const isLogin = ref();

</script>
<template>
  <div class="container row">
    <div class="row col-12">
      <div class="mx-auto my-5">
        <button
          v-if="!isSignUp && !isLogin"
          class="btn btn-primary btn-lg"
          @click="isLogin = true"
        >
          Login
        </button>
      </div>
    </div>
    <Login :isLogin="isLogin" />
  </div>
</template>
