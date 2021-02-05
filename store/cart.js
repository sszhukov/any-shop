export const state = () => ({
  cartData: [],
  showCart: false
})

export const mutations = {
  clearCart (state) {
    state.cartData = []
    this.dispatch('cart/saveCart')
  },
  setCart (state) {
    const cartData = localStorage.getItem('cart')
    if (cartData) {
      state.cartData = JSON.parse(cartData)
    }
  },
  addProduct (state, product) {
    const cartItem = state.cartData.find(item => item.product.id === product.id)
    if (cartItem) {
      cartItem.count += 1
    } else {
      state.cartData.push({
        product,
        count: 1
      })
    }
    this.dispatch('cart/saveCart')
  },
  deleteProduct (state, productId) {
    state.cartData = state.cartData.filter(cartItem => cartItem.product.id !== productId)
    this.dispatch('cart/saveCart')
  },
  showCartModal (state) {
    state.showCart = true
  },
  hideCartModal (state) {
    state.showCart = false
  }
}

export const actions = {
  saveCart (context) {
    if (process.browser) {
      const cart = context.state.cartData
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  },
  createOrder (context, orderData) {
    // Create order (context.state.cartData AND orderData) anything in DB
    return Promise.resolve()
  }
}

export const getters = {
  getCart: state => state.cartData
}
