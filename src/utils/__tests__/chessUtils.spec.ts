import { describe, it, expect } from 'vitest'
import { getSquareColor, squareToString } from '@/utils/chessUtils'

describe('squareToString', () => {
  it('should convert coordinates to chess notation', () => {
    expect(squareToString({ file: 'a', rank: 1 })).toBe('a1')
    expect(squareToString({ file: 'e', rank: 4 })).toBe('e4')
    expect(squareToString({ file: 'h', rank: 8 })).toBe('h8')
  })

  it('should handle all files correctly', () => {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    files.forEach(file => {
      expect(squareToString({ file, rank: 1 })).toBe(`${file}1`)
    })
  })

  it('should handle all ranks correctly', () => {
    for (let rank = 1; rank <= 8; rank++) {
      expect(squareToString({ file: 'a', rank })).toBe(`a${rank}`)
    }
  })

  it('should concatenate file and rank in correct order', () => {
    expect(squareToString({ file: 'd', rank: 4 })).toBe('d4')
    expect(squareToString({ file: 'd', rank: 4 })).not.toBe('4d')
  })
})

describe('getSquareColor', () => {
  it('should return light for even sum positions', () => {
    expect(getSquareColor(0, 0)).toBe('square--light')
    expect(getSquareColor(1, 1)).toBe('square--light')
  })

  it('should return dark for odd sum positions', () => {
    expect(getSquareColor(0, 1)).toBe('square--dark')
    expect(getSquareColor(1, 0)).toBe('square--dark')
  })
})