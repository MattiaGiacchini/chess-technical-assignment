<script setup lang="ts">
import ChessBoard from '@/components/ChessBoard.vue'
import TheHeader from '@/components/TheHeader.vue'
import GameSidebar from '@/components/GameSidebar.vue'
import { useClickHistory } from '@/composables/useClickHistory'

const { addClickedSquare, resetClickHistory, clickedSquares, lastClickedSquare } = useClickHistory()
</script>

<template>
  <div class="main-layout">
    <TheHeader />
    <div class="chess-layout">
      <div class="chess-layout__board">
        <ChessBoard :last-clicked-square="lastClickedSquare" @square-click="addClickedSquare"></ChessBoard>
      </div>
      <GameSidebar class="chess-layout__sidebar" :clickedSquares="clickedSquares" @reset-clicked-squares="resetClickHistory"></GameSidebar>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  background-color: var(--background-color);
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--text-color);
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
  padding: var(--spacing-lg);

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
      max-height: 60dvh;
    }

    &__sidebar {
      flex: 1;
      width: 60dvh;
      max-width: 100%;
      min-width: 0;
      min-height: 0;
      margin: 0 auto;
    }
  }
}
</style>