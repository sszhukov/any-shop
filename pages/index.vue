<template>
  <div :class="$style.container">
    <LeftSidebar :class="$style.sidebar" :categories="categories || []" />
    <NuxtChild :class="$style.mainContent" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const categoriesData = await $axios.$get('https://frontend-test.idaproject.com/api/product-category')
    return { categoriesData }
  },
  data () {
    return {
      cat: ['/', '/messengerBag', '/businessBag']
    }
  },
  computed: {
    categories () {
      return this.categoriesData.map((category) => {
        return {
          ...category,
          alias: this.cat[category.id - 1]
        }
      })
    }
  }
}
</script>

<style lang="scss" module>
  .container {
    display: flex;
    margin: 0 auto;
    margin-top: 66px;
    max-width: 1440px;
    padding: 32px 88px 66px 88px;

    .sidebar {
      position: fixed;
    }
    .mainContent {
      margin-left: $width-sidebar;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      padding: 16px 10px 66px 10px;
    }
  }
</style>
