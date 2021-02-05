<template>
  <div :class="$style.header">
    <div :class="$style.content">
      <div :class="$style.logo">
        TestList
      </div>
      <CartIcon :class="$style.cartIcon" :count="cartData.length" @click.native="showCart" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ cartData: 'cart/getCart' })
  },
  methods: {
    ...mapMutations({ showCart: 'cart/showCartModal' })
  }
}
</script>

<style lang="scss" module>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 66px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  z-index: 1;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @include baseContentSize;

    @media screen and (max-width: 600px) {
      padding: 0 15%
    }

    .logo {
      font-size: 22px;
      font-weight: 700;
      color: #59606D;
    }

    .cartIcon {
      width: 27px;
      height: 27px;
    }
  }
}
</style>
