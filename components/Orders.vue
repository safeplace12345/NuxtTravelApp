<template>
  <div class="jumbotron Orders col-12">
    <h1 class="display-4">Orders</h1>
    <hr class="my-4" />
    <ol>
      <li v-for="order of orders" :key="order">
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
    </ol>
  </div>
</template>
