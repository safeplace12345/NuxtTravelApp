<template>
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
</template>