<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);

setTimeout(() => {
  count.value = 5000;
}, 5000);
onBeforeMount(() => {
  console.log("On Before Mount");
});
onMounted(() => {
  console.log("On Mounted");
});
onUnmounted(() => {
  console.log("On Unmounted");
});
onBeforeUpdate(() => {
  console.log("On Before Update");
});
onUpdated(() => {
  console.log("On Updated");
});
</script>

<template>
  <div class="m-4 p-6">
    <h1 class="mb-6">Vue Composition API Life Cycle hooks</h1>
    <h2 class="mb-6">for <b class="text-red-600">script setup</b></h2>

    <pre>
&lt;script setup lang="ts">

import { ref } from "vue";
const count = ref(0);

onBeforeMount(() => {
  console.log("On Before Mount");
});

onMounted(() => {
  console.log("On Mounted");
});

onUnmounted(() => {
  console.log("On Unmounted");
});

onBeforeUpdate(() => {
  console.log("On Before Update");
});

onUpdated(() => {
  console.log("On Updated");
});
&lt;/script>
    </pre>

    <ul>
      <li class="mb-4 mt-4 bg-red-200">
        <b>beforeCreated</b> and <b>created</b> – are replaced with
        <b>setup</b>
      </li>
      <li class="mb-4 bg-slate-200">
        1- <b>onBeforeMount</b> – called before mounting begins
      </li>
      <li class="mb-4 bg-slate-200">
        2- <b>onBeforeUnmount</b> – called before the Vue instance is destroyed
      </li>

      <li class="mb-4">
        3- <b>onMounted</b> – called when component is mounted
      </li>
      <li class="mb-4">
        4- <b>onUnmounted</b> – called after the instance is destroyed
      </li>
      <li class="mb-4 bg-slate-200">
        5- <b>onBeforeUpdate</b> – called when reactive data changes and before
        re-render
      </li>

      <li class="mb-4 bg-slate-200">
        6- <b>onUpdated</b> – called after re-render
      </li>

      <li class="mb-4">
        7- <b>onActivated</b> – called when a kept-alive component is activated
      </li>
      <li class="mb-4">
        8- <b>onDeactivated</b> – called when a kept-alive component is
        deactivated
      </li>
      <li class="mb-4 bg-slate-200">
        9- <b>onErrorCaptured</b> – called when an error is captured from a
        child component
      </li>
    </ul>

    <h2>{{ count }}</h2>
    <img class="w-full" src="@/assets/img/vuel-ife.png" />
  </div>
</template>
