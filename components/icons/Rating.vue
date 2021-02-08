<template>
  <div :class="$style.rating">
    <img src="@/assets/rating-star.svg" alt="" :class="$style.ratingImage">
    <div :class="$style.points">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" module>
  .rating {
    display: flex;
    align-items: center;
    width: 14px;

    .points {
      margin-left: 20%;
      font-size: 70%;
      font-weight: 700;
      color: #F2C94C;
    }
  }
</style>
