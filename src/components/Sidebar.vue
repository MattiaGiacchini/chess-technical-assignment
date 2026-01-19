<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

const props = defineProps<{
  clickedSquares?: string[]
}>()

const emit = defineEmits(['resetClickedSquares'])

const scrollContainer = ref<HTMLElement | null>(null)

watch(() => props.clickedSquares?.length, async () => {
  await nextTick()
  scrollContainer.value?.scrollTo({
    top: scrollContainer.value.scrollHeight,
    behavior: 'smooth'
  })
})
</script>

<template>
  <div class="history-card sidebar-card card">
    <div class="history-card__header">
      <h2 class="history-card__title">Click History</h2>
      <button class="button" @click="emit('resetClickedSquares')">Reset</button>
    </div>
    <div class="history-card__scrollable" ref="scrollContainer">
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
          <td class="history-table__cell">{{ square }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.history-card {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-lg);
  }

  &__title {
    margin: 0;
    font-size: var(--font-size-xl);
  }

  &__scrollable {
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    border-radius: var(--border-radius-sm);
    scroll-snap-type: y proximity;
  }
}

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

    &:last-child {
      scroll-snap-align: end;
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