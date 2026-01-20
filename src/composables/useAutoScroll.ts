import { nextTick, ref, watch } from 'vue'

/**
 * Automatically scrolls a container to the bottom when the trigger value changes.
 * Useful for list that should auto-scroll on updates.
 *
 * @param trigger - Getter function that returns the value to watch (e.g., () => items.length)
 * @returns Object containing:
 * @returns scrollContainer - Template ref to bind to the scrollable element via ref="scrollContainer"
 */
export function useAutoScroll<T>(trigger: () => T) {
  const scrollContainer = ref<HTMLElement | null>(null)

  watch(
    trigger,
    async () => {
      await nextTick()
      scrollContainer.value?.scrollTo({
        top: scrollContainer.value.scrollHeight,
        behavior: 'smooth'
      })
    },
    { deep: true }
  )

  return {
    scrollContainer
  }
}