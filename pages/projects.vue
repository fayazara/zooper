<template>
  <main class="min-h-screen">
    <div class="mb-12">
      <h1
        class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
      >
        Projects
      </h1>
      <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
        I’ve worked on tons of little projects over the years but these are the
        ones that I’m most proud of. Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved.
      </p>
    </div>
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Projects | Fayaz Ahmed",
  description:
    "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
