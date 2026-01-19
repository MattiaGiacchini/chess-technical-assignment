<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<template>
  <button
    class="button"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--square-dark);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: var(--square-transition);

  &:hover {
    background-color: var(--square-dark-hover);
  }

  &:active {
    background-color: var(--square-light-hover);
  }
}
</style>