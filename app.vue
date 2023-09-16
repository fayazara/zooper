<template>
  <Navbar />
  <div class="h-24"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-24"></div>
  <Footer />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
