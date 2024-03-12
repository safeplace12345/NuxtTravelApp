<template>
  <form v-if="isSignUp">
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
      :disabled="!email | !name"
      class="btn btn-primary btn-lg my-5"
      @click="signUp"
    >
      Sign up
    </button>
  </form>
</template>
