<script setup lang="ts">
</script>

<template>
  <header class="header">
    <img src="@/assets/images/logo.svg" alt="Logo" class="header__logo">
    <div class="header__text">
      <h1 class="header__title">Chessboard Click Tracker</h1>
      <p class="header__description">Click any square to start tracking</p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background-color: var(--surface-color);
  padding: var(--spacing-md) var(--spacing-lg);
  box-shadow: var(--strong-shadow);

  &__logo {
    height: 44px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      height: 36px;
    }
  }

  &__text {
    line-height: 1;
    font-weight: var(--font-weight-light);
  }

  &__title {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-xxl);
    letter-spacing: -1px;
  }

  &__description {
    font-size: var(--font-size-base);
    color: var(--text-color-light);
  }
}
</style>