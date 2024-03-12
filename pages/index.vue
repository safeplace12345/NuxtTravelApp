<script setup>
const email = ref();
const name = ref();
const isSignUp = ref();
const isLogin = ref();
const currentUser = useCurrentUser();
const router = useRouter();

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

const signUp = async (e) => {
  e.preventDefault();
  await createUser(email.value, name.value).then(
    (user) => (currentUser.value = user)
  );
  return router.push("/home");
};
</script>
<template>
  <div class="container row">
    <div class="row col-12">
      <div class="col-6 my-5">
        <button
          v-if="!isSignUp && !isLogin"
          class="btn btn-primary btn-lg mx-auto"
          @click="isSignUp = true"
        >
          SignUp
        </button>
      </div>
      <div class="col-6 my-5">
        <button
          v-if="!isSignUp && !isLogin"
          class="btn btn-primary btn-lg"
          @click="isLogin = true"
        >
          Login
        </button>
      </div>
    </div>
    <Login />
    <SignUp />
  </div>
</template>
