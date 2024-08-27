<template>
    <div class=" flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div class=" h-40 flex justify-center items-center overflow-hidden rounded-xl">
        <img
          :src="props.item?.image_url"
          alt="recipe-item"
          class=" w-full block"
        />
      </div>
      <div>
        <span class=" text-sm text-cyan-700 font-medium">
          {{props.item?.publisher}}
        </span>
        <h3 class=" font-bold text-2xl truncate text-black">
          {{props.item?.title}}
        </h3>
        <router-link
          :to="`/recipe-item/${item?.id}`"
          class=" text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium bg-black text-white inline-block tracking-wider shadow-md hover:bg-lime-300 hover:text-black transition-all duration-300 hover:underline"
        >
          Recipe Details
        </router-link>
      </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props=defineProps({
    item:Array,
})

</script>

