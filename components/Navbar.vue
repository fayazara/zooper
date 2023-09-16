<template>
  <div ref="headerRef" :style="styles" class="fixed top-0 w-full z-50">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
      <ul
        class="flex items-center px-3 text-sm font-medium text-zinc-800 rounded-b-md shadow-lg bg-white/90 shadow-zinc-800/5 ring-1 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/20 ring-zinc-900/5"
      >
        <li v-for="item in items" :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400 navlink"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <Icon :name="item.icon" class="w-5 h-5 z-10" />
              <span
                v-if="$route.path === item.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
              ></span>
              <span
                v-if="$route.path === item.path"
                class="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></span>
            </ULink>
          </UTooltip>
        </li>
        <span class="flex-1"></span>
        <ThemeToggle />
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useFixedHeader } from "vue-use-fixed-header";
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);

const items = [
  { name: "Home", path: "/", icon: "solar:home-smile-outline" },
  {
    name: "Projects",
    path: "/projects",
    icon: "solar:folder-with-files-outline",
  },
  {
    name: "Blog",
    path: "/blog",
    icon: "solar:document-add-outline",
  },
  { name: "Lab", path: "/lab", icon: "solar:programming-outline" },
  {
    name: "What's in my bag?",
    path: "/uses",
    icon: "solar:backpack-outline",
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: "solar:bookmark-linear",
  },
];
</script>
