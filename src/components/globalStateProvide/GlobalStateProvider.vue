<template>
    <slot></slot>
</template>

<script setup>
import {provide} from 'vue'
import {useGlobalState} from '/src/context/GlobalState.js'
const state=useGlobalState();
provide('globalState',state)
</script>
