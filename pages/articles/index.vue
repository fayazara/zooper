<template>
  <main class="min-h-screen">
    <div class="mb-16">
      <h1
        class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
      >
        Articles
      </h1>
      <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
        All of my long-form thoughts on programming, user interfaces, product
        design, and more, collected in chronological order.
      </p>
    </div>
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Articles | Fayaz Ahmed",
  description:
    "All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.",
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").find()
);
</script>
