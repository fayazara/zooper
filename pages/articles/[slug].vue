<template>
  <main class="min-h-screen">
    <div class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900">
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
  ogImage: `https://fayazahmed.com/articles/${slug}.png`,
  twitterCard: 'summary_large_image',
  articleAuthor: 'Fayaz Ahmed',
})
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
