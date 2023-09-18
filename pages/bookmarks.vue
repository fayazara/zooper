<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Bookmarks" :description="description" />
  </main>
</template>

<script setup>
const description =
  "Awesome links I find on the internet. One neat thing about this page is, I just need to send a telegram message to a bot and it adds it here in the list.";
useSeoMeta({
  title: "Lab | Fayaz Ahmed",
  description,
});
</script>
