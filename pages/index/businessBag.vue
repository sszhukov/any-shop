<template>
  <ProductList :products-data="productsData" />
</template>

<script>
export default {
  async asyncData ({ store }) {
    const productsData = await store.dispatch('products/loadProducts', { categoryId: 3, amount: 12 })
    return { productsData }
  }
}
</script>
