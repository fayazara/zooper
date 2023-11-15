<template>
  <div class="px-4 py-8 flex items-center justify-center">
    <button
      type="button"
      class="rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950 relative font-mono"
      @click="submit"
      @mouseenter="startScrambling"
    >
      {{ displayText }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
});

const displayText = ref(props.label);
const charset = "abcdefghijklmnopqrstuvwxyz";

function randomChars(length) {
  return Array.from(
    { length },
    () => charset[Math.floor(Math.random() * charset.length)]
  ).join("");
}

async function scramble(input) {
  let prefix = "";
  for (let index = 0; index < input.length; index++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    prefix += input.charAt(index);
    displayText.value = prefix + randomChars(input.length - prefix.length);
  }
}

function startScrambling() {
  scramble(props.label);
}

const submit = () => {
  startScrambling();
  setTimeout(() => console.log("Submitted"), props.label.length * 50);
};

watch(
  () => props.label,
  (newValue) => {
    displayText.value = newValue;
  }
);
</script>
