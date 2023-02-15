<template>
  <div
    v-if="alertOpen"
    class="text-gray-500 px-6 py-2 border-2 rounded relative mb-4"
    :class="[bgColor, borderColor]"
  >
    <span v-if="showIcon" class="text-xl inline-block mr-5 align-middle">
      <InformationCircleIcon
        v-if="mode == 'primary'"
        class="h-12 w-12 text-blue-700"
      />
      <XIcon v-if="mode == 'danger'" class="h-12 w-12 text-red-700" />
      <CheckCircleIcon
        v-if="mode == 'success'"
        class="h-12 w-12 text-green-700"
      />
      <ExclamationIcon
        v-if="mode == 'warning'"
        class="h-12 w-12 text-yellow-500"
      />
    </span>
    <span class="inline-block align-middle mr-8">
      <b class="capitalize" v-if="wow">{{ wow }}</b> {{ msg }}
    </span>

    <button
      class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-5 mr-6 outline-none focus:outline-none"
      v-on:click="closeAlert()"
    >
      <span>×</span>
    </button>
  </div>
</template>

<script>
import {
  InformationCircleIcon,
  XIcon,
  CheckCircleIcon,
  ExclamationIcon,
} from "@heroicons/vue/solid";
import { AlertTypes } from "@/lib/Types";

export default {
  components: {
    InformationCircleIcon,
    XIcon,
    CheckCircleIcon,
    ExclamationIcon,
  },
  name: "Alert",

  props: {
    mode: {
      type: String,
      default: "primary",
    },
    on: Boolean,
    title: String,
    msg: String,
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      alertOpen: true,
      iconName: AlertTypes[this.mode].icon,
      bgColor: AlertTypes[this.mode].bg,
      borderColor: AlertTypes[this.mode].border,
      iconColor: AlertTypes[this.mode].iconColor,
      wow: AlertTypes[this.mode].wow,
    };
  },

  created() {},
  methods: {
    closeAlert: function () {
      this.alertOpen = false;
    },
  },
};
</script>

<style></style>
