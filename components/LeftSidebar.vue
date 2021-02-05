<template>
  <div :class="$style.sidebar">
    <h1 :class="$style.title">
      Каталог
    </h1>
    <ul :class="$style.menu">
      <li v-for="category in categories" :key="category.id" :class="$style.item">
        <NuxtLink exact :active-class="$style.active" :class="$style.url" :to="category.alias">
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  }
}
</script>

<style lang="scss" module>
  .sidebar {
    width: 160px;
    flex-grow: 0;
    flex-shrink: 0;
    align-self: flex-start;
    justify-content: flex-start;
    text-align: left;

    @media screen and (max-width: 600px) {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }

    .title {
      margin-bottom: 24px;
    }

    .menu {
      padding: 0;

      .item {
        list-style: none;
        margin-bottom: 16px;

        .url {
          color: #959DAD;
          font-weight: 400;
          text-decoration: none;

          &:hover {
            @media screen and (min-width: 600px) {
              color: #1F1F1F;
            }
          }
        }

        .active {
          color: #1F1F1F;
          text-decoration: underline;
        }

      }
    }
  }
</style>
