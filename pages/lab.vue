<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Lab" :description="description" />
    <ul>
      <ContentDoc path="/lab/text-rotator" />
    </ul>
  </main>
</template>

<script setup>
const description = "Some random experiments with UI I do in my free time.";
useSeoMeta({
  title: "Lab | Fayaz Ahmed",
  description,
});
</script>
