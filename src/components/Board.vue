<script setup lang="ts">
import Square from '@/components/Square.vue'
import ChessboardLabels from '@/components/ChessboardLabels.vue'
import { RANKS, FILES } from '@/types/chess'
import type { SquareBackground, SquareCoordinates } from '@/types/chess'

const props = defineProps<{
  lastClickedSquare?: string | null
}>()

const emit = defineEmits(['square-click'])

const getSquareColor = (rowIndex: number, columnIndex: number): SquareBackground => {
  return (rowIndex + columnIndex) % 2 === 0 ? 'square--light' : 'square--dark'
}

const isSquareHighlighted = (coordinates: SquareCoordinates): boolean => {
  const coordinatesNotation = `${coordinates.file}${coordinates.rank}`
  return props.lastClickedSquare === coordinatesNotation
}

const squares: Array<{
  coordinates: SquareCoordinates;
  colorClass: SquareBackground;
}> = RANKS.flatMap((rank, rankIndex) =>
  FILES.map((file, fileIndex) => ({
    coordinates: {file: file, rank: rank},
    colorClass: getSquareColor(rankIndex, fileIndex)
  }))
)
</script>

<template>
  <div class="chessboard card">
    <ChessboardLabels type="ranks" />

    <div class="chessboard__grid">
      <Square
        v-for="square in squares"
        :key="`${square.coordinates.file}${square.coordinates.rank}`"
        :coordinates="square.coordinates"
        :class="square.colorClass"
        :is-highlighted="isSquareHighlighted(square.coordinates)"
        @click="emit('square-click', `${square.coordinates.file}${square.coordinates.rank}`)"
      ></Square>
    </div>

    <div class="empty-corner"></div>

    <ChessboardLabels type="files" />
  </div>
</template>

<style scoped lang="scss">
.chessboard {
  display: grid;
  grid-template-columns: 38px 1fr;
  grid-template-rows: 1fr 38px;
  width: min(100%, 100cqh);
  height: min(100%, 100cqw);
  aspect-ratio: 1/1;

  @media (max-width: 768px) {
    grid-template-columns: 24px 1fr;
    grid-template-rows: 1fr 24px;
  }

  &__grid {
    grid-area: 1 / 2;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);

    border-radius: var(--border-radius-sm);
    overflow: hidden;
  }
}

.empty-corner {
  grid-area: 2 / 1;
}
</style>