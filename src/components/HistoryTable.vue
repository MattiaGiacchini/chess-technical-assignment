<script setup lang="ts">
import { squareToString } from '@/utils/chessUtils'
import type { SquareCoordinates } from '@/types/chess'

defineProps<{
  clickedSquares: SquareCoordinates[]
}>()
</script>

<template>
  <table class="history-table">
    <thead class="history-table__header">
    <tr>
      <th class="history-table__header-cell history-table__header-cell--number">#</th>
      <th class="history-table__header-cell">Coordinates</th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(square, index) in clickedSquares"
      :key="`move-${index}`"
      class="history-table__row"
    >
      <td class="history-table__cell history-table__cell--number">{{ index + 1 }}</td>
      <td class="history-table__cell">{{ squareToString(square) }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.history-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-base);

  &__header {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--table-header-bg);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: var(--table-border-color);
    }
  }

  &__header-cell {
    padding: var(--spacing-sm) var(--spacing-md);
    text-align: left;
    font-weight: var(--font-weight-semibold);
    color: var(--table-text-secondary);

    &--number {
      text-align: center;
      width: 70px;
    }
  }

  &__row {
    &:nth-child(odd) {
      background-color: var(--table-row-odd-bg);
    }

    &:nth-child(even) {
      background-color: var(--table-row-even-bg);
    }

    &:hover {
      background-color: var(--table-row-hover-bg);
    }

  }

  &__cell {
    padding: var(--spacing-sm) var(--spacing-md);

    &--number {
      color: var(--table-text-secondary);
      font-weight: var(--font-weight-medium);
      width: 70px;
      text-align: center;
    }
  }
}
</style>