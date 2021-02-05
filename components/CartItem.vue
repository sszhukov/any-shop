<template>
  <div :class="$style.cartItemCard">
    <div :class="$style.image">
      <img :src="cartItem.product.photo" alt="">
    </div>
    <div :class="$style.info">
      <div>
        <div :class="$style.title">
          {{ cartItem.product.name }}
        </div>
        <div :class="$style.price">
          {{ cartItem.product.price | numberFormat }} ₽
        </div>
      </div>
      <div :class="$style.rating">
        <img src="@/assets/rating-star.svg" alt="" :class="$style.ratingImage">
        <div :class="$style.points">
          {{ cartItem.product.rating }}
        </div>
      </div>
    </div>
    <Trash :class="$style.trash" @click.native="deleteProduct(cartItem.product.id)" />
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
    cartItem: Object
  },
  methods: {
    ...mapMutations({ deleteProduct: 'cart/deleteProduct' })
  }
}
</script>

<style lang="scss" module>
  .cartItemCard {
    display: flex;
    padding: 15px;
    width: 364px;
    height: 120px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    @media screen and (max-width: 600px) {
      padding: 10px 5px;
      width: 100%;
      height: 100px;
    }

    .image {
      height: 90px;
      width: 90px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-content: space-between;
      margin-left: 15px;

      .title, .price {
        font-size: 14px;
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
        display: flex;
        align-items: center;
        height: 14px;
        margin-top: auto;

        .points {
          margin-left: 5px;
          font-size: 12px;
          font-weight: 700;
          color: #F2C94C;
        }
      }
    }

    .trash {
      width: 20px;
      height: 22px;
    }
  }
</style>
