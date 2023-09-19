<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <UCommandPalette
    v-model="selected"
    nullable
    :groups="[{ key: 'people', commands: people }]"
    :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
  />
  </main>
</template>

<script setup>
const bookmarks = [

]
const description =
  "Awesome things I've found on the internet. One neat thing about this page is, I just need to send a telegram message to a bot and it adds it here in the list.";
useSeoMeta({
  title: "Lab | Fayaz Ahmed",
  description,
});

const people = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
  { id: 7, label: 'Caroline Schultz' },
  { id: 8, label: 'Mason Heaney' },
  { id: 9, label: 'Claudie Smitham' },
  { id: 10, label: 'Emil Schaefer' }
]
const selected = ref([people[1]])

// bookmark types

// 1. plain text
// 2. image
// 3. youtube video
// 4. color code
// 5. link
</script>
