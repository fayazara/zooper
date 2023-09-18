<template>
  <main class="min-h-screen">
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Blog | Fayaz Ahmed",
  description:
    "I'm Fayaz, your friendly neighborhood software, product engineer and designer from Bengaluru, India. I specialize in building web applications and sites using Javascript, React, Vue & Node.",
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/blog").find()
);
</script>
