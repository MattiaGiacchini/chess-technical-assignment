import { describe, it, expect, vi } from 'vitest'
import { useAutoScroll } from '@/composables/useAutoScroll'
import { nextTick, ref } from 'vue'

describe('useAutoScroll', () => {
  it('should scroll to bottom when trigger changes', async () => {
    const trigger = ref(0)
    const { scrollContainer } = useAutoScroll(() => trigger.value)

    const mockElement = {
      scrollHeight: 1000,
      scrollTo: vi.fn()
    }
    scrollContainer.value = mockElement as any

    trigger.value++
    await nextTick()
    await nextTick()

    expect(mockElement.scrollTo).toHaveBeenCalledWith({
      top: 1000,
      behavior: 'smooth'
    })
  })
})