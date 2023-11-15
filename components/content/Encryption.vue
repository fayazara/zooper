<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 relative h-40 text-sm overflow-hidden"
    @mousemove="handleOnMove"
    @touchmove="handleOnMove"
    ref="card"
  >
    <div
      ref="letters"
      class="absolute left-0 top-0 [--x:0] [--y:0] h-full w-full text-center text-gray-700 dark:text-gray-300"
      style="word-wrap: break-word"
    >
      <p
        class="absolute top-1/2 left-1/2 text-gray-500 text-xs -translate-x-1/2 -translate-y-1/2"
      >
        Hover/Touch
      </p>
    </div>
  </div>
</template>

<script setup>
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charsLength = chars.length;
const randomChar = () => chars[Math.floor(Math.random() * charsLength)];
const randomString = (length) => Array.from({ length }, randomChar).join("");

const card = ref(null);
const letters = ref(null);

const updateLetters = (x, y) => {
  requestAnimationFrame(() => {
    letters.value.style.setProperty("--x", `${x}px`);
    letters.value.style.setProperty("--y", `${y}px`);
    letters.value.innerText = randomString(600);
  });
};

const handleOnMove = (e) => {
  const rect = card.value.getBoundingClientRect();
  updateLetters(e.clientX - rect.left, e.clientY - rect.top);
};
</script>
