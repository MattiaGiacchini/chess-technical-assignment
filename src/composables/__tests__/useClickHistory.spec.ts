import { describe, it, expect } from 'vitest'
import { useClickHistory } from '@/composables/useClickHistory'

describe('useClickHistory', () => {
  it('should add clicked square to history', () => {
    const { clickedSquares, addClickedSquare } = useClickHistory()

    addClickedSquare({ file: 'a', rank: 1 })

    expect(clickedSquares.value).toHaveLength(1)
    expect(clickedSquares.value[0]).toEqual({ file: 'a', rank: 1 })
  })

  it('should update last clicked square', () => {
    const { lastClickedSquare, addClickedSquare } = useClickHistory()

    addClickedSquare({ file: 'a', rank: 1 })
    addClickedSquare({ file: 'b', rank: 2 })

    expect(lastClickedSquare.value).toEqual({ file: 'b', rank: 2 })
  })

  it('should reset click history', () => {
    const { clickedSquares, lastClickedSquare, addClickedSquare, resetClickHistory } = useClickHistory()

    addClickedSquare({ file: 'a', rank: 1 })
    resetClickHistory()

    expect(clickedSquares.value).toHaveLength(0)
    expect(lastClickedSquare.value).toBeNull()
  })
})