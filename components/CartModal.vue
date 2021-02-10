<template>
  <div>
    <transition name="dissolution">
      <div v-show="showCart" :class="$style.overlay" @click="hideCart" />
    </transition>
    <transition name="slide-right">
      <div v-show="showCart" :class="$style.cart">
        <h1 :class="$style.title">
          Корзина
        </h1>
        <div v-if="cartData.length" :class="$style.cartData">
          <div :class="$style.cartItemsData">
            <div :class="$style.messageInfo">
              Товры в корзине
            </div>
            <CartItem v-for="cartItem in cartData" :key="cartItem.id" :cart-item="cartItem" />
          </div>
          <div :class="$style.order">
            <div :class="$style.messageInfo">
              Оформить заказ
            </div>
            <OrderForm @submit="submit" />
          </div>
        </div>
        <div v-else-if="orderingSuccess" :class="$style.success">
          <img src="@/assets/emoji-ok.png" alt="">
          <div :class="$style.messageSuccess">
            Заявка успешно отправлена
            <p>
              Вскоре наш менеджер свяжется с Вами
            </p>
          </div>
        </div>
        <div v-else>
          <p :class="$style.messageEmpty">
            Вы пока ничего не добавили в корзину
          </p>
          <button :class="$style.button" @click="hideCart">
            Перейти к выбору
          </button>
        </div>
        <div :class="$style.closeIcon" @click="hideCart" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      orderingSuccess: false
    }
  },
  computed: {
    ...mapGetters({ cartData: 'cart/getCart' }),

    showCart () {
      return this.$store.state.cart.showCart
    }
  },
  methods: {
    ...mapMutations({ clearCart: 'cart/clearCart', hideCartModal: 'cart/hideCartModal' }),
    ...mapActions({ createOrder: 'cart/createOrder' }),

    hideCart () {
      this.hideCartModal()
      this.orderingSuccess = false
    },
    submit (formData) {
      this.createOrder(formData)
        .then(() => {
          this.clearCart()
          this.orderingSuccess = true
        })
    }
  }
}
</script>

<style lang="scss" module>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(240, 240, 240, 0.5);
    overflow: hidden;
  }

  .cart {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    width: 460px;
    padding: 48px;
    height: 100vh;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    overflow: auto;
    z-index: 3;

    @media screen and (max-width: 600px) {
      width: 100vw;
      padding: 10px 10px 75px 10px;
      text-align: center;
    }

    h1.title, .cartItemsData, .order, .success, .messageEmpty {
      margin-bottom: 24px;

      @media screen and (max-width: 600px) {
        margin-bottom: 14px;
      }
    }

    .cartData {

      .messageInfo {
        font-size: 18px;
        margin-bottom: 0.5em;
      }
    }

    .success {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    .messageSuccess {
      font-size: 24px;
      font-weight: 700;
      color: #000000;
      text-align: center;

      p {
        font-size: 16px;
        font-weight: 400;
        color: #59606D;
      }
    }

    .messageEmpty {
      font-size: 22px;
    }

    .button {
      @include buttonInCart;
    }

    .messageCartInfo {
      font-size: 18px;
    }

    .closeIcon {
      display: none;

      @media screen and (max-width: 600px) {
        display: block;
        position: fixed;
        top: 10px;
        right: 10px;
        height: 50px;
        width: 50px;
        mask-image: url('../assets/close-icon.svg');
        mask-repeat: no-repeat;
        background-color: $basic-black;
      }
    }
  }
</style>
