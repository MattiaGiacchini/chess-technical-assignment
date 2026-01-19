<script setup lang="ts">
import Board from '@/components/Board.vue'
import { ref, type Ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'

const clickedSquares: Ref<string[]> = ref([])
const lastClickedSquare = ref<string | null>(null)

function addClickedSquare(coordinates: string) {
  clickedSquares.value.push(coordinates)
  lastClickedSquare.value = coordinates
}

function resetClickedSquares() {
  clickedSquares.value = []
  lastClickedSquare.value = null
}
</script>

<template>
  <div class="main-layout">
    <div class="main-layout__header">
      <h1 class="main-layout__title">Chessboard Click Tracker</h1>
      <p class="main-layout__description">Click on top of any square to start</p>
    </div>
    <div class="chess-layout">
      <div class="chess-layout__board">
        <Board :last-clicked-square="lastClickedSquare" @square-click="addClickedSquare"></Board>
      </div>
      <Sidebar class="chess-layout__sidebar" :clickedSquares="clickedSquares" @reset-clicked-squares="resetClickedSquares"></Sidebar>
    </div>
  </div>
</template>

<style scoped lang="scss">

.main-layout {
  background-color: var(--background-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--text-color);
  padding: var(--spacing-lg);
  gap: var(--spacing-lg);

  &__header {
    line-height: 1;
    font-weight: var(--font-weight-light);
  }

  &__title {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xxl);
    letter-spacing: -1px;
  }

  &__description {
    font-size: var(--font-size-base);
    color: var(--text-color-light);
  }
}


.chess-layout {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: var(--spacing-lg);
  font-size: var(--font-size-base-lg);
  font-weight: var(--font-weight-semibold);
  overflow: hidden;
  justify-content: center;

  &__board {
    flex: 0 0 auto;
    min-height: 0;
    display: flex;
    justify-content: center;
    container-type: size;
    aspect-ratio: 1/1;
    max-width: 70%;
  }

  &__sidebar {
    width: 25%;
    min-width: 250px;
    overflow: auto;
  }

  @media (max-width: 920px) {
    &__board {
      max-width: 60%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);

    &__board {
      width: 100%;
      max-width: 100%;
      max-height: 60vh;
    }

    &__sidebar {
      flex: 1;
      width: 60vh;
      max-width: 100%;
      min-width: 0;
      min-height: 0;
      margin: 0 auto;
    }
  }
}
</style>