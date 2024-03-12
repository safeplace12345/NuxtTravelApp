<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css");
</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NuxtLink class="nav-brand" to="/">Home</NuxtLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

      </ul>
    </div>
  </nav>
  <div class="container mx-auto col-8">
    <slot />
  </div>
</template>
