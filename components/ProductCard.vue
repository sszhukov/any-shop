<template>
  <div :class="$style.productCard">
    <div :class="$style.productImage">
      <img :src="product.photo" alt="">
    </div>
    <div :class="$style.title">
      {{ product.name }}
    </div>
    <div :class="$style.price">
      {{ product.price | numberFormat }} ₽
    </div>
    <Rating :class="$style.rating" :value="product.rating" />
    <CartIcon
      :class="$style.cartIcon"
      :color="inCart ? '#1fb2aa' : '#959DAD'"
      :hover-color="'#1F1F1F'"
      @click.native="addToCart"
    />
  </div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat'
import { mapMutations } from 'vuex'

export default {
  filters: {
    numberFormat
  },
  props: {
    product: Object
  },
  computed: {
    inCart () {
      return !!this.$store.state.cart.cartData
        .find(item => item.product.id === this.product.id)
    }
  },
  methods: {
    ...mapMutations({ addProduct: 'cart/addProduct' }),

    addToCart () {
      this.addProduct(this.product)
      this.addedToCart = true
    }
  }
}
</script>

<style lang="scss" module>
  .productCard {
    width: 264px;
    height: 274px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
    position: relative;

    .productImage {
      width: 100%;
      min-height: 100px;
      align-self: end;
      flex-grow: 1;

      img {
        width: 100%;
        max-height: 100%;
        object-fit: contain;
        object-position: center top;
      }
    }

    .title, .price {
      height: 18px;
      font-size: 14px;
      margin-top: 7px;
    }

    .title {
      font-weight: 400;
      color: #59606D;
    }

    .price {
      font-weight: 700;
      color: #1F1F1F;
    }

    .rating {
      position: absolute;
      top: 16px;
      left: 16px;
      height: 14px;
    }

    .cartImage {
      position: absolute;
      top: 16px;
      right: 16px;
      height: 14px;
      cursor: pointer;
    }

    .cartIcon {
      position: absolute;
      top: 16px;
      right: 16px;
      height: 14px;
      width: 14px;
    }
  }
</style>
