<template>
  <label for="first-name" class="block text-sm font-medium text-gray-700">{{
    title
  }}</label>
</template>

<script>
export default {
  name: "Label",
  props: {
    for: String,
    title: String,
  },
};
</script>

<style></style>
