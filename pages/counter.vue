<script setup lang="ts">
import useCounter from "@/composable/useCounter";
//use as object
// const counter = useCounter();
//or destructure
const { value, doubleValue, increment, decrement } = useCounter();
</script>

<template>
  <NuxtLayout name="default-layout">
    <h1>useCounter and uiButton example</h1>
    <h2>{{ value }}</h2>
    <h2>{{ doubleValue }}</h2>
    <p>
      <UiButton title="Plus" @click="increment" class="mr-6" />
      <UiButton
        title="Minus"
        variant="secondary"
        @click="decrement"
        class="mr-6"
      />
      <UiButton title="Minus" variant="error" @click="decrement" />
    </p>
  </NuxtLayout>
</template>
