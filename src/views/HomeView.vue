<template>
  <div v-if="loading">
    <p class="lg:text-4xl text-xl text-center text-black font-extrabold">
      Nothing to show. Please search something
    </p>
  </div>
  <div class="py-8 container mx-auto flex flex-wrap justify-center gap-10">
    <RecipeItemComponent
      v-for="(item, index) in recipeList"
      :item="item"
      :key="index"
    />
  </div>
</template>

<script setup>
import RecipeItemComponent from "../components/recipe-item/RecipeItemComponent.vue";
import { inject } from "vue";
const globalState = inject("globalState");
const recipeList = globalState.recipeList;
const loading = globalState.loading;
</script>
