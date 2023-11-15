<template>
  <div
    class="font-extrabold text-lg [text-wrap:balance] text-gray-700 dark:text-gray-200"
  >
    We design and develop the best
    <span
      class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"
    >
      <ul class="block text-left leading-tight [&_li]:block animate-text-slide">
        <li class="text-indigo-500">Mobile apps</li>
        <li class="text-rose-500">Websites</li>
        <li class="text-yellow-500">Admin dashboards</li>
        <li class="text-teal-500">Landing pages</li>
        <li class="text-pink-500">Illustrations</li>
        <li class="text-sky-500">Icons</li>
      </ul>
    </span>
  </div>
</template>

<style>
.animate-text-slide {
  animation: text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
}

@keyframes text-slide {
  0%,
  15% {
    transform: translateY(0%);
  }

  17%,
  32% {
    transform: translateY(-16.66%);
  }

  34%,
  49% {
    transform: translateY(-33.33%);
  }

  51%,
  66% {
    transform: translateY(-50%);
  }

  68%,
  83% {
    transform: translateY(-66.66%);
  }

  85%,
  100% {
    transform: translateY(-83.33%);
  }
}
</style>
