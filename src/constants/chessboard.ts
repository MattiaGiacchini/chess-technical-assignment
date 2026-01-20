import { getSquareColor } from '@/utils/chessUtils'
import type { SquareCoordinates, SquareBackground } from '@/types/chess'

export const RANKS = [8, 7, 6, 5, 4, 3, 2, 1] as const
export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

export const SQUARES: Array<{
  coordinates: SquareCoordinates,
  colorClass: SquareBackground
}> = RANKS.flatMap((rank, rankIndex) =>
  FILES.map((file, fileIndex) => ({
    coordinates: { file, rank },
    colorClass: getSquareColor(rankIndex, fileIndex)
  }))
)