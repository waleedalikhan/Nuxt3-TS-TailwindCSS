<script setup lang="ts">
import { ref } from "vue";
import { uiType } from "./ui";

const { title, variant } = defineProps<{
  title: string;
  variant?: string;
}>();

const buttonType = ref(uiType(variant));

const defaultClasses =
  " px-4 py-2 transition duration-100 ease-in-out focus:ring-2 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed";

const classes = [
  // Default
  "text-white bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-blue-500",
  // Secondary
  "text-black bg-gray-100 border border-transparent rounded shadow-sm hover:bg-white focus:border-blue-500 focus:ring-blue-500",
  // Error
  "text-white bg-red-600 border border-transparent rounded shadow-sm hover:bg-red-600 focus:border-red-500 focus:ring-red-500",
];
</script>

<template>
  <button :class="[defaultClasses, classes[buttonType]]">
    {{ title }}
  </button>
</template>
