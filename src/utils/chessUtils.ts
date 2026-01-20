import { type SquareCoordinates, SquareBackground } from '@/types/chess'

/**
 * Converts square coordinates to chess algebraic notation.
 * @param coordinates - Square coordinates (file + rank)
 * @returns Algebraic notation string (e.g., "e4", "a1")
 */
export function squareToString(coordinates: SquareCoordinates): string {
  return `${coordinates.file}${coordinates.rank}`
}

/**
 * Determines the color of a chess square based on its position.
 * @param rowIndex - Zero-based row index
 * @param columnIndex - Zero-based column index
 * @returns CSS class name for the square color
 */
export function getSquareColor(rowIndex: number, columnIndex: number): SquareBackground {
  return (rowIndex + columnIndex) % 2 === 0
    ? SquareBackground.Light
    : SquareBackground.Dark
}