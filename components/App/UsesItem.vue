<template>
  <li>
    <p class="text-base font-semibold text-gray-700 dark:text-gray-300">
      {{ item.name }}
    </p>
    <p class="text-sm text-gray-500">{{ item.description }}</p>
  </li>
</template>

<script setup>
defineProps({
  item: Object,
  required: true,
});
</script>
