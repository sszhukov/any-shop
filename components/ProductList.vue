<template>
  <div :class="$style.content">
    <div :class="$style.sort">
      Сортировать по:&nbsp;
      <div :class="$style.select">
        <select :class="$style.select">
          <option>По цене</option>
          <option>По популярности</option>
        </select>
      </div>
    </div>
    <div :class="$style.productList">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productsData: Array
  },
  computed: {
    products () {
      return this.productsData || []
    }
  }
}
</script>

<style lang="scss" module>
  .content {
    display: flex;
    flex-direction: column;

    .sort {
      display: flex;
      justify-content: flex-end;
      line-height: 42px;

      @media screen and (max-width: 600px) {
        justify-content: center;
      }

      select {
        appearance: none;
        background-color: transparent;
        border: none;
        margin: 0;
        outline: none;
      }
    }

    .productList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 16px;
    }
  }

  .content {
    flex-grow: 1;
  }
</style>
