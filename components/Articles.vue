<template>
  <div>
    <div class="mb-8 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        RECENT ARTICLES
      </h2>
      <UButton
        icon="i-heroicons-arrow-small-right-20-solid"
        :trailing="true"
        label="All"
        class="ml-auto"
        color="white"
        variant="ghost"
        size="2xs"
      />
    </div>
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <NuxtLink to="/" class="group">
          <article>
            <time
              class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
              datetime="2022-09-05"
              ><span
                class="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
                ><span
                  class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"
                ></span
              ></span>
              {{ article.date }}
            </time>
            <h2
              class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"
            >
              {{ article.title }}
            </h2>
            <p
              class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400"
            >
              {{ article.excerpt }}
            </p>
          </article>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const articles = [
  {
    title: "Why is Feedbackjar open source?",
    excerpt:
      "I've been researching a bit about open source and I wanted to share my thoughts on why I think it's important to open source Feedbackjar.",
    date: "Aug 21, 2023",
  },
  {
    title: "How to make your webapp look like a native app, will PWA",
    excerpt:
      "I tried building a PWA recently for my project feedful.app and I loved it. Here's how you can make your websites look and behave like they are native mobile applications.",
    date: "July 16, 2023",
  },
  {
    title: "Let's build a dropdown menu with Tailwindcss",
    excerpt:
      "We've all built dropdown menus before, here's how you can build one with Tailwindcss.",
    date: "June 28, 2023",
  },
];
</script>
