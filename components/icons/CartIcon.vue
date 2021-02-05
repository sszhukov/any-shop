<template>
  <div :class="$style.cartIcon" @mouseenter="hover=true" @mouseleave="hover=false">
    <div :class="$style.icon" :style="[backgroundColor, backgroundHoverColor]" />
    <div v-if="countProduct" :class="$style.count">
      {{ countProduct }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    color: String,
    hoverColor: String
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    countProduct () {
      return this.count || 0
    },
    backgroundColor () {
      if (this.color) {
        return { 'background-color': this.color }
      }
      return ''
    },
    // backgroundColor () {
    //   if (this.color) {
    //     return { 'background-color': this.color }
    //   }
    //   return ''
    // },
    backgroundHoverColor () {
      if (this.hover && this.hoverColor) {
        return { 'background-color': this.hoverColor }
      }
      return ''
    }
  }
}
</script>

<style lang="scss" module>
  .cartIcon {
    position: relative;
    cursor: pointer;

    .icon {
      @include icon-mask;
      mask-image: url('~assets/cart-icon.svg');
      background-color: $basic-black;
      width: 100%;
      height: 100%;
    }

    .count {
      position: absolute;
      right: -12%;
      top: -12%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45%;
      height: 45%;
      background: #959DAD;
      font-size: 8px;
      font-weight: bold;
      color: white;
      border-radius: 50%;
    }
  }
</style>
