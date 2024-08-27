<template>
  <div class="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div class="row-start-2 lg:row-start-auto">
      <div class="h-96 overflow-hidden rounded-xl group">
        <img
          :src="recipeDetailsData?.recipe?.image_url"
          alt="recipe-item"
          class="w-full h-full object-cover block group-hover:scale-105 duration-300"
        />
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <span class="text-sm text-cyan-700 font-medium">
        {{ recipeDetailsData?.recipe?.publisher }}
      </span>
      <h3 class="font-bold text-2xl truncate text-black">
        {{ recipeDetailsData?.recipe?.title }}
      </h3>
      <div>
        <button
          @click="handleAddToFavorites(recipeDetailsData?.recipe)"
          class="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium bg-black text-white inline-block tracking-wider shadow-md hover:bg-lime-300 hover:text-black transition-all duration-300 hover:underline"
        >
          {{
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"
          }}
        </button>
      </div>
      <div>
        <span class="text-2xl font-semibold text-black"> Ingredients: </span>
        <ul class="flex flex-col gap-3">
          <li
            v-for="(ingredient, index) in recipeDetailsData?.recipe
              ?.ingredients"
            :key="index"
          >
            <span class="text-2xl font-semibold text-black">
              {{ ingredient.quantity }} {{ ingredient.unit }}
            </span>
            <span class="text-2xl font-semibold text-black">
              {{ ingredient.description }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { inject } from "vue";
import { useRoute } from "vue-router";
// 获取当前路由对象
const route = useRoute();
// 从路由参数中获取 id
const recipeId = route.params.id;

const globalState = inject("globalState");
const recipeDetailsData = globalState.recipeDetailsData;
const handleAddToFavorites = globalState.handleAddToFavorites;
const favoritesList = globalState.favoritesList;
console.log(recipeDetailsData.recipe);

onMounted(() => {
  async function getRecipeDetails() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
    );
    const data = await response.json();
    console.log(data);
    if (data?.data) {
      recipeDetailsData.value = data?.data;
    }
  }

  getRecipeDetails();
});

console.log(favoritesList.value);
</script>

<style lang="scss" scoped></style>
