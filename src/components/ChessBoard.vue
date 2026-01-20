<script setup lang="ts">
import BoardSquare from '@/components/BoardSquare.vue'
import ChessBoardLabels from '@/components/ChessBoardLabels.vue'
import { type SquareCoordinates } from '@/types/chess'
import { squareToString } from '@/utils/chessUtils'
import { SQUARES } from '@/constants/chessboard.ts'

const props = defineProps<{
  lastClickedSquare?: SquareCoordinates | null
}>()

const emit = defineEmits<{
  'square-click': [coordinates: SquareCoordinates]
}>()
const isSquareHighlighted = (coordinates: SquareCoordinates): boolean => {
  if (!props.lastClickedSquare) return false
  return coordinates.file === props.lastClickedSquare.file &&
    coordinates.rank === props.lastClickedSquare.rank
}
</script>

<template>
  <div class="chessboard card">
    <ChessBoardLabels type="ranks" />

    <div class="chessboard__grid">
      <BoardSquare
        v-for="square in SQUARES"
        :key="squareToString(square.coordinates)"
        :coordinates="square.coordinates"
        :class="square.colorClass"
        :is-highlighted="isSquareHighlighted(square.coordinates)"
        @click="emit('square-click', square.coordinates)"
      ></BoardSquare>
    </div>

    <div class="empty-corner"></div>

    <ChessBoardLabels type="files" />
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