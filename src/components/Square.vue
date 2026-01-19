<script setup lang="ts">
import type { SquareCoordinates } from '@/types/chess'

const emit = defineEmits(['square-click'])

defineProps<{
  coordinates: SquareCoordinates
  isHighlighted?: boolean
}>()

</script>

<template>
  <div class="square" :class="{ 'square--highlighted': isHighlighted }"></div>
</template>

<style scoped lang="scss">
.square {
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.square--light {
  background-color: var(--square-light);
  &:hover {
    transition: var(--square-transition);
    background-color: var(--square-light-hover);
  }
}

.square--dark {
  background-color: var(--square-dark);
  &:hover {
    transition: var(--square-transition);
    background-color: var(--square-dark-hover);
  }
}

.square--highlighted {
  background-color: var(--square-highlighted);
  transition: var(--square-transition);
  &:hover {
    background-color: var(--square-highlighted-hover);
  }
}
</style>