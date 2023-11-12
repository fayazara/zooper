<template>
  <div>
    <h2 class="text-sm font-semibold">{{ title }}</h2>
    <p class="text-gray-500 text-sm">
      {{ description }}
    </p>
    <div
      class="mt-2 border dark:border-white/10 rounded-lg shadow-sm overflow-hidden"
    >
      <div class="p-2 flex items-center gap-2 border-b dark:border-white/10">
        <div class="flex items-center w-full">
          <UButton
            @click="showCode = false"
            label="Preview"
            variant="soft"
            color="white"
            size="xs"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            :class="{ 'active-tab': !showCode }"
          />
          <UButton
            @click="showCode = true"
            label="Code"
            variant="soft"
            color="white"
            size="xs"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            :class="{ 'active-tab': showCode }"
          />
        </div>
      </div>
      <div>
        <slot v-if="showCode" name="codebase" />
        <slot v-else name="preview" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
});

const showCode = ref(false);
</script>

<style scoped>
.active-tab {
  @apply after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary-500 after:bottom-[-9px] after:left-0 after:pointer-events-none;
}
</style>
