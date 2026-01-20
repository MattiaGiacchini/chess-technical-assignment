<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="card">
    <div v-if="title || $slots.headerAction" class="card__header">
      <h2 v-if="title" class="card__title">{{ title }}</h2>
      <slot name="headerAction" />
    </div>
    <div class="card__body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;

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

  &__body {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
}
</style>