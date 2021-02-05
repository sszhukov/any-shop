export const actions = {
  async loadProducts (context, { categoryId, amount }) {
    let productsData = await this.$axios.$get(`${process.env.baseApiUrl}/api/product?category=${categoryId}`)
    productsData = productsData.slice(0, amount)
    productsData = productsData.map(product => ({
      ...product,
      photo: process.env.baseApiUrl + product.photo
    }))
    return productsData
  }
}
