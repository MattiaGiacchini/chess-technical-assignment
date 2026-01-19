<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import HistoryTable from '@/components/HistoryTable.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'

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
  <Card class="sidebar-card" title="Click History">
    <template #headerAction>
      <Button @click="emit('resetClickedSquares')">Reset</Button>
    </template>
    <div class="history-card__scrollable" ref="scrollContainer">
      <HistoryTable :clicked-squares="clickedSquares" />
    </div>
  </Card>
</template>

<style scoped lang="scss">
.history-card {
  &__scrollable {
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    border-radius: var(--border-radius-sm);
    scroll-snap-type: y proximity;
  }
}
</style>