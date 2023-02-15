// composables/useCounter.js
export default () => {
  //Reactive value
  const value = ref(0);

  //Computed value
  const doubleValue = computed(() => value.value * 2);

  //Events
  const increment = () => value.value++;
  const decrement = () => value.value--;
  return {
    value,
    doubleValue,
    increment,
    decrement,
  };
};
