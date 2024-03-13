<script setup>
const currentUser = useCurrentUser();
const destinations = useDestinations();
const cart = useCart([]);
const orders = ref([]);
const selectedDestinations = ref([]);
const numOfSeats = ref([]);
const amount = ref(0);
const selectedOrders = ref([]);
const router = useRouter();

const {
  value: { email },
} = currentUser;

if (!email) {
  router.push("/");
}

const getTravels = async () => {
  await getDestinations().then((data) => {
    return (destinations.value = data.travels);
  });
};

const bookTravel = async (e) => {
  e.preventDefault();
  const updatedCart = await makeBooking(
    email,
    selectedDestinations.value,
    numOfSeats.value
  );
  cart.value = updatedCart.book.orders;
};

const order = async (e) => {
  e.preventDefault();
  const filtered = cart.value.filter((o) =>
    selectedOrders.value.includes(o.id)
  );

  const updatedOrders = await checkout({
    email,
    orders: filtered,
    amount: amount.value,
  });

  orders.value = updatedOrders.checkOut.map((o) => ({ ...o }));
  cart.value = [];
};

getTravels();
</script>

<template>
  <div class="container row form">
    <form>
      <h1 class="text-center">Welcome {{ email }}</h1>
      <div class="form-group">
        <label for="destination">Select Destination:</label>
        <select
          v-model="selectedDestinations"
          class="form-control"
          id="destinations"
        >
          <option v-for="destination in destinations" :key="destination">
            {{ destination?.slug }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="numOfSeats">Number of Seats:</label>
        <select v-model="numOfSeats" class="form-control" id="numOfSeats">
          <option v-for="seat in [1, 2, 3, 4, 5]" :key="seat">
            {{ seat }}
          </option>
        </select>
      </div>
      <button
        :disabled="!numOfSeats | selectedDestinations"
        class="btn btn-primary btn-lg my-5"
        type="submit"
        @click="bookTravel"
      >
        Add to Cart
      </button>
    </form>
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
    <div class="jumbotron Orders col-12">
    <h1 class="display-4">Orders</h1>
    <hr class="my-4" />
    <ul>
      <li v-for="(order, i) of orders" :key="order">
        <p>Order {{i+1}}</p>
        <div class="card" v-for="travel of order.orders" :key="travel">
          <div class="card-body">
            <p>
              {{ travel.id.toUpperCase().replace(/[\W_]+/g, " ") }}
            </p>
            <p>
              {{ travel.numOfSeats }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
