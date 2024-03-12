<template>
  <div class="jumbotron Cart">
    <h1 class="display-4">Cart</h1>
    <p class="lead">
      Please checkout Items within the next 15 mins , Thank you :)
    </p>
    <hr class="my-4" />
    <p>
      <select
        v-model="selectedOrders"
        class="form-control"
        id="orders"
        multiple
      >
        <option v-for="order in cart" :key="order">
          {{ order.id }}
        </option>
      </select>
    </p>
    <div class="form-group">
      <label for="amount">Email address</label>
      <input
        type="amount"
        class="form-control"
        id="amount"
        aria-describedby="amountHelp"
        placeholder="Enter amount"
        v-model="amount"
      />
    </div>
    <p class="lead">
      <button
        :disabled="!selectedOrders"
        class="btn btn-primary btn-lg my-5"
        type="submit"
        @click="order"
      >
        Checkout
      </button>
    </p>
  </div>
</template>
