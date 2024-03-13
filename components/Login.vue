<script setup>
const currentUser = useCurrentUser();
const router = useRouter();

const email = ref();
const name = ref();

defineProps({
  isLogin: Boolean,
});

const login = async (e) => {
  e.preventDefault();
  const data = await getUser(email.value);
  if (!data) {
    currentUser.value.email = email.value;
  } else {
    currentUser.value = data.user;
  }
  return router.push("/home");
};
</script>
<template>
  <form v-if="isLogin">
    <div class="form-group">
      <label for="destination">
        <h1 class="text-center">Welcome to Travelers:</h1>
      </label>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We ll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="name"
          class="form-control"
          id="name"
          aria-describedby="nameHelp"
          placeholder="Enter name"
          v-model="name"
        />
      </div>
    </div>
    <button
      :disabled="!email"
      class="btn btn-primary btn-lg my-5"
      @click="login"
    >
      Login
    </button>
  </form>
</template>
