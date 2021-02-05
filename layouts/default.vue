<template>
  <div :class="[$style.loyaut, showCart ? $style.loyautOverlay : '']">
    <CartModal />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    showCart () {
      return this.$store.state.cart.showCart
    }
  },
  mounted () {
    this.setCart()
  },
  methods: {
    ...mapMutations({ setCart: 'cart/setCart' })
  }
}
</script>

<style lang="scss" module>
  html {
    font-family: PT Sans;
    font-style: normal;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  .loyaut {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
  }
  .loyautOverlay {
    overflow: hidden;
  }
</style>
