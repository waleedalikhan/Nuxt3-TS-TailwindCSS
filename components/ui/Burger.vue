<template>
  <!-- Mobile menu button-->
  <DisclosureButton
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  >
    <span class="sr-only">Open main menu</span>
    <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
    <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
  </DisclosureButton>
</template>

<script lang="ts">
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>
<script setup lang="ts">
import { DisclosureButton } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
</script>

<style></style>
