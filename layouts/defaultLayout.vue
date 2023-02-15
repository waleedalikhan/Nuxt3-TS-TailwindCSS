<script setup lang="ts">
const val = 200;
</script>

<template>
  <div>
    <Header />
    <div class="2xl:container mx-auto min-h-screen bg-white">
      <slot />
    </div>
    <Footer />
  </div>
</template>
