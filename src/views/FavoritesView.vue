<template>
  <div
    v-if="favoritesList && favoritesList.length > 0"
    className="py-8 container mx-auto flex flex-wrap justify-center gap-10"
  >
    <RecipeItem
      v-for="(favorites, index) in favoritesList"
      :item="favorites"
      :key="index"
    />
  </div>
  <div v-else>
    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
      Nothing is added in favorites
    </p>
  </div>
</template>

<script setup>
import RecipeItem from "../components/recipe-item/RecipeItemComponent.vue";
import { inject } from "vue";
const globalState = inject("globalState");
const favoritesList = globalState.favoritesList;
console.log(favoritesList.value);
</script>
