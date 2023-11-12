<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Lab" :description="description" />
    <div class="space-y-24">
      <ContentList path="/lab" v-slot="{ list }">
        <ContentQuery
          v-for="item in list"
          :key="item._path"
          :path="item._path"
          find="one"
          v-slot="{ data }"
        >
          <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </ContentQuery>
      </ContentList>
    </div>
  </main>
</template>

<script setup>
const description = "Some random experiments with UI I do in my free time.";
useSeoMeta({
  title: "Lab | Fayaz Ahmed",
  description,
});
</script>
