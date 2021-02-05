<template>
  <div :class="$style.trash" />
</template>

<style lang="scss" module>
  .trash {
    @include icon-mask;
    mask-image: url('~assets/trash-icon.svg');
    background-color: #959DAD;

    &:hover {
      background-color: #1F1F1F;
    }
  }
</style>
