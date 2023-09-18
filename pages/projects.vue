<template>
  <main class="min-h-screen">
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
    "I'm Fayaz, your friendly neighborhood software, product engineer and designer from Bengaluru, India. I specialize in building web applications and sites using Javascript, React, Vue & Node.",
});

const { data: projects } = await useAsyncData("projects-home", () =>
  queryContent("/projects").find()
);
</script>
