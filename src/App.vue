<template>
  <GlobalStateProvider>
    <div class=" min-h-screen p-6 bg-white text-gray-600 text-lg">
      <NavbarComponent />
      <RouterView />
    </div>
  </GlobalStateProvider>
</template>

<script setup>
import NavbarComponent from "./components/navbar/NavbarComponent.vue";
import GlobalStateProvider from "./components/globalStateProvide/GlobalStateProvider.vue"

</script>

<style lang="scss" scoped></style>
