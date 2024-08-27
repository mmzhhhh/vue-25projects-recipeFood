<template>
  <nav
    class="flex justify-between items-center py-8 container flex-col lg:flex-row gap-5 mx-auto"
  >
    <h2 class="text-2xl font-semibold">
      <router-link to="/">FoodRecipe</router-link>
    </h2>
    <form @submit="handleSubmit">
      <input
        type="text"
        name="search"
        placeholder="Enter Items..."
        v-model="searchParam"
        class="bg-white/75 p-3 px-8 rounded-full outline-none shadow-lg w-40 shadow-red-200 focus:shadow-red-500 focus:w-96 transition-all duration-500"
      />
    </form>
    <ul class="flex gap-5">
      <li>
        <router-link
          to="/"
          class="hover:underline hover:text-black transition-all duration-700"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/favorites"
          class="hover:underline hover:text-black transition-all duration-700"
        >
          Favorites
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { inject } from "vue";
const globalState = inject("globalState");
const searchParam = globalState.searchParam;
const handleSubmit = globalState.handleSubmit;
console.log(searchParam.value);
</script>
