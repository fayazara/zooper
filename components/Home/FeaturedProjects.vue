<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      FEATURED PROEJCTS
    </h2>
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
          <h3 class="text-sm font-medium group-hover:text-primary-600">
            {{ project.name }}
          </h3>
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
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Projects &rarr;"
        to="/projects"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects-home", () =>
  queryContent("/projects").limit(3).find()
);
</script>
