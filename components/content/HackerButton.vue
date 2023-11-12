<template>
  <div
    class="p-4 bg-gray-100 dark:bg-gray-900 overflow-hidden"
  >
    <button
      type="button"
      class="rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950 relative"
      @click="startScrambling"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
const buttonText = ref("Submit Form");
const originalText = "Submit Form";
const charset = "abcdefghijklmnopqrstuvwxyz";

function randomChars(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
}

async function scramble(input) {
  let prefix = "";
  let suffix = randomChars(input.length);
  let iterations = input.length;

  for (let index = 0; index < iterations; index++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    prefix += input.charAt(index);
    suffix = randomChars(input.length - prefix.length);
    buttonText.value = prefix + suffix;
  }

  buttonText.value = input;
}

const startScrambling = () => {
  scramble(originalText);
  setTimeout(() => console.log("Submitted"), originalText.length * 50);
};
</script>
