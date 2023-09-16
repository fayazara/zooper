<template>
  <div
    class="p-4 shadow-lg rounded-lg bg-white/90 shadow-zinc-800/5 ring-1 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/20 ring-zinc-900/5"
  >
    <div class="mb-6 flex items-center gap-3">
      <div class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10">
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        STAY IN TOUCH
      </h2>
    </div>
    <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      Get notified when I publish something new, and unsubscribe at any time.
    </p>
    <div class="flex items-center gap-3 mt-6">
      <UInput
        placeholder="Email Address"
        icon="i-heroicons-envelope"
        class="flex-1"
        size="lg"
      />
      <UButton label="Join &rarr;" size="lg" color="black" />
    </div>
  </div>
</template>
