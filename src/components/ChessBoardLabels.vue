<script setup lang="ts">
import { RANKS, FILES } from '@/constants/chessboard'

const props = defineProps<{
  type: 'ranks' | 'files'
}>()

const labels = props.type === 'ranks' ? RANKS : FILES
</script>

<template>
  <div class="chessboard__labels" :class="`chessboard__labels--${type}`">
    <p v-for="label in labels" :key="`${type}-${label}`">{{ label }}</p>
  </div>
</template>

<style scoped lang="scss">
.chessboard__labels {
  font-size: var(--font-size-base);
  display: flex;
  justify-content: space-around;
  text-align: center;

  &--ranks {
    flex-direction: column;
    height: 100%;
    margin: 0 var(--spacing-lg) 0 0;

    @media (max-width: 768px) {
      margin: 0 var(--spacing-sm) 0 0;
    }
  }

  &--files {
    width: 100%;
    margin: var(--spacing-lg) 0 0 0;

    @media (max-width: 768px) {
      margin: var(--spacing-sm) 0 0 0;
    }
  }
}


</style>