import { ref, type Ref } from 'vue'
import type { SquareCoordinates } from '@/types/chess'

/**
 * Manages the history of clicked squares on the chessboard.
 * @returns Object containing:
 * @returns clickedSquares - Array of all clicked square coordinates
 * @returns lastClickedSquare - Most recently clicked square or null
 * @returns addClickedSquare - Function to add a square to the history
 * @returns resetClickHistory - Function to clear all history
 */
export function useClickHistory() {
  const clickedSquares: Ref<SquareCoordinates[]> = ref<SquareCoordinates[]>([])
  const lastClickedSquare: Ref<SquareCoordinates | null> = ref<SquareCoordinates | null>(null)

  function addClickedSquare(coordinates: SquareCoordinates) {
    clickedSquares.value.push(coordinates)
    lastClickedSquare.value = coordinates
  }

  function resetClickHistory() {
    clickedSquares.value = []
    lastClickedSquare.value = null
  }

  return {
    clickedSquares,
    lastClickedSquare,
    addClickedSquare,
    resetClickHistory
  }
}