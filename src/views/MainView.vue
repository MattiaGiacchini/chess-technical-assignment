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
</script>

<template>
  <div class="chess-layout">
    <div class="chess-layout__board">
      <Board  @square-click="addClickedSquare" :last-clicked-square="lastClickedSquare"></Board>
    </div>
    <Sidebar class="chess-layout__sidebar" :clickedSquares="clickedSquares"></Sidebar>
  </div>
</template>

<style scoped lang="scss">

.chess-layout {
  height: 100vh;
  display: flex;
  flex-direction: row;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  justify-content: center;
  margin: auto;
  box-sizing: border-box;
  font-size: var(--font-size-base-lg);
  font-weight: var(--font-weight-semibold);

  background-color: var(--background-color);
  color: var(--text-color);

  &__board {
    flex:1;
    max-width: 100cqh;
    max-height: 100cqw;
    min-height: 0;
    display: flex;
    justify-content: center;
    container-type: size;
  }

  &__sidebar {
    width: 30%;
  }


  @media (max-width: 768px) {
    flex-direction: column;
    padding: var(--spacing-md);
    gap: var(--spacing-md);

    &__board {
      flex: 0 0 auto;
      width: 100%;
      max-width: 100%;
      max-height: none;
      aspect-ratio: 1/1;
    }

    &__sidebar {
      flex: 1;
      width: 100%;
      min-height: 0;
      overflow: hidden;
    }
  }
}



</style>