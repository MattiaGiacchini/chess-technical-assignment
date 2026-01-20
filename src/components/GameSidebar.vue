<script setup lang="ts">
import HistoryTable from '@/components/HistoryTable.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useAutoScroll } from '@/composables/useAutoScroll'
import type { SquareCoordinates } from '@/types/chess'

const props = defineProps<{
  clickedSquares: SquareCoordinates[]
}>()

const emit = defineEmits(['resetClickedSquares'])

const { scrollContainer } = useAutoScroll(() => props.clickedSquares)
</script>

<template>
  <BaseCard class="sidebar-card" title="Click History">
    <template #headerAction>
      <BaseButton @click="emit('resetClickedSquares')">Reset</BaseButton>
    </template>
    <div class="history-card__scrollable" ref="scrollContainer">
      <HistoryTable :clicked-squares="clickedSquares" />
    </div>
  </BaseCard>
</template>

<style scoped lang="scss">
.history-card {
  &__scrollable {
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    border-radius: var(--border-radius-sm);
  }
}
</style>