export default defineAppConfig({
  ui: {
    primary: "teal",
    gray: "neutral",
    formGroup: {
      help: "text-xs mt-1 text-gray-500 dark:text-gray-400",
      error: "text-xs mt-1 text-red-500 dark:text-red-400",
      label: {
        base: "text-sm block font-medium text-gray-500 dark:text-gray-200",
      },
    },
    button: {
      rounded:
        "rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]",
    },
    modal: {
      overlay: {
        background: "bg-[rgba(0,8,47,.275)] saturate-50",
      },
      padding: "p-0",
      rounded: "rounded-t-2xl sm:rounded-xl",
      transition: {
        enterFrom: "opacity-0 translate-y-full sm:translate-y-0 sm:scale-x-95",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-x-100",
      },
    },
    container: {
      constrained: "max-w-2xl",
    },
  },
});
