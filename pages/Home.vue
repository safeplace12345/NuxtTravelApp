<script setup>
const currentUser = useCurrentUser();
const destinations = useDestinations();
const cart = useCart([]);
const orders = ref();
const selectedDestinations = ref();
const numOfSeats = ref();
const amount = ref();
const selectedOrders = ref();
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
    <Form/>
    <Cart/>
    <Orders/>
  </div>
</template>
