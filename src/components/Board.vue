<script setup lang="ts">
import Square from '@/components/Square.vue'
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

const ranks= [8,7,6,5,4,3,2,1]
const files= ['a','b','c','d','e','f','g','h']

const  squares: Array<{
  coordinates: SquareCoordinates;
  colorClass: SquareBackground;
}> = ranks.flatMap((rank, rankIndex) =>
  files.map((file, fileIndex) => ({
    coordinates: {file: file, rank:rank},
    colorClass: getSquareColor(rankIndex, fileIndex)
  }))
)
</script>

<template>
  <div class="chessboard card">
    <div class="chessboard__labels chessboard__labels--ranks">
      <p v-for="rank in ranks" :key="`rank-${rank}`">{{ rank }}</p>
    </div>

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

    <div class="chessboard__labels chessboard__labels--files">
      <p v-for="file in files" :key="`file-${file}`">{{ file }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chessboard {
  display: grid;
  grid-template-columns: 38px 1fr;
  grid-template-rows: 1fr 38px;
  width: min(100%, 100cqh);
  height: min(100%, 100cqw);
  //width: 100cqh;
  //height: 100cqh;
  aspect-ratio: 1/1;

  &__grid {
    grid-area: 1 / 2;
    display: grid;
    grid-template-columns: repeat(8, 1fr) ;
    grid-template-rows: repeat(8, 1fr);

    border-radius: 4px;
    overflow: hidden;
  }

  &__labels {
    display: flex;
    justify-content: space-around;
    text-align: center;

    &--ranks {
      flex-direction: column;
      height: 100%;
      margin: 0 var(--spacing-lg) 0 0;
    }

    &--files {
      width: 100%;
      margin: var(--spacing-lg) 0 0 0;
    }
  }
}

.empty-corner {
  grid-area: 2 / 1;
}
</style>