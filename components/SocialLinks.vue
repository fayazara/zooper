<template>
  <div>
    <div class="mb-4 flex items-center gap-3">
      <div class="flex-none rounded-full p-1 text-teal-500 bg-teal-500/10">
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">FIND ME ON</h2>
    </div>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <Icon :name="link.icon" class="w-6 h-6"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/fayazara",
    icon: "mdi:twitter",
  },
  {
    name: "GitHub",
    url: "https://github.com/fayazara",
    icon: "mdi:github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/fayaz-aralikatti/",
    icon: "mdi:linkedin",
  },
  {
    name: "Telegram",
    url: "https://t.me/fayazara",
    icon: "mdi:telegram",
  },
];
</script>
