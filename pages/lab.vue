<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Lab" :description="description" />
    <ul>
      <li>
        <div class="mb-4">
          <h2 class="text-sm font-semibold">Text Rotator</h2>
          <p class="text-gray-500 text-sm">Rotating text with just tailwindcss and vue. Here's the code</p>
        </div>
        <LabTextRotator />
      </li>
    </ul>
  </main>
</template>

<script setup>
const description = "Some random experiments I do with UI, Design and Code. This page is still a work in progress. Need to setup each experiment with a preview, code, title and description.";
useSeoMeta({
  title: "Lab | Fayaz Ahmed",
  description,
});
</script>

