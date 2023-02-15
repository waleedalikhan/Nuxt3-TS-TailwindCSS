<script setup lang="ts">
import { ref } from "vue";
defineProps<{ msg?: string }>();
const count = ref(0);
</script>

<template>
  <ui-nav-bar class="bg-gray-800" />
</template>
