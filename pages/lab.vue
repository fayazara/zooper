<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Lab" :description="description" />
  </main>
</template>

<script setup>
const description = "Some random experiments I do with UI, Design and Code. This page is still in progress";
useSeoMeta({
  title: "Lab | Fayaz Ahmed",
  description,
});
</script>
