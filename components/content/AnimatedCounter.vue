<template>
  <span
    class="flex tabular-nums text-slate-900 dark:text-white text-5xl font-extrabold mb-2 [counter-set:_num_var(--num)] before:content-[counter(num)] animate-counter"
  >
    <span class="sr-only">{{ targetNumber }}</span
    >+
  </span>
  <UButton color="white" @click="startCounter" class="mt-4" size="xs">
    Start Counter
  </UButton>
  <p class="text-xs mt-2 text-gray-500">
    or start the counter when this component is in the viewport
  </p>
</template>

<script setup>
const props = defineProps({
  targetNumber: {
    type: Number,
    required: true,
    default: 1234,
  },
});

const startCounter = () => {
  const counter = document.querySelector(".animate-counter");
  counter.animate([{ "--num": 0 }, { "--num": props.targetNumber }], {
    duration: 1000,
    easing: "ease-out",
    fill: "forwards",
  });
};
</script>

<style scoped>
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

@keyframes counter {
  from {
    --num: 0;
  }
  to {
    --num: v-bind(props.targetNumber);
  }
}
</style>
