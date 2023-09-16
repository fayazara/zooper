<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        CURRENT PROEJCTS
      </h2>
      <UButton
        icon="i-heroicons-arrow-small-right-20-solid"
        :trailing="true"
        label="All"
        class="ml-auto"
        color="white"
        variant="ghost"
        size="2xs"
      />
    </div>
    <div class="space-y-4">
      <NuxtLink
        v-for="(project, id) in projects"
        :key="id"
        class="flex items-end gap-4 group p-2 -m-2 rounded-lg"
        :to="project.url"
        target="_blank"
        external
      >
        <div>
          <h3 class="text-sm font-medium group-hover:text-primary-600">{{ project.name }}</h3>
          <p class="text-gray-400 text-sm">{{ project.description }}</p>
        </div>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <UAvatar
          :src="project.thumbnail"
          :ui="{ rounded: 'rounded' }"
          size="md"
          :alt="project.name"
          class="ring-1 ring-gray-200 dark:ring-white/10"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const projects = [
  {
    name: "Feedbackjar",
    url: "https://feedbackjar.app",
    description: "Open source feedback, roadmaps and changelogs",
    thumbnail: "/projects/feedbackjar.png",
    status: "WIP",
  },
  {
    name: "Formdata",
    url: "https://formdata.cc",
    description: "Relay form data to your email for free",
    thumbnail: "/projects/formdata.png",
    status: "Active",
  },
  {
    name: "Feedful",
    url: "https://feedful.aoo",
    description: "Modern news reader in tweetdeck style",
    thumbnail: "/projects/feedful.png",
    status: "Active",
  },
];
</script>
