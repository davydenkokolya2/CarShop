<template>
  <div class="vCatalogItem">
    <img
      class="vCatalogItem__image"
      :src="require('../assets/images/' + product_data.image)"
      alt="img"
    />
    <p class="vCatalogItemName">{{ product_data.name }}</p>
    <p class="vCatalogItemPrice">{{ product_data.price }}</p>
    <button 
    class="vCatalogItemAddToCartBtn btn" 
    @click="sendDataToParent">
      Add to Cart
    </button>
  </div>
</template>
<script>
export default {
  name: "vCatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    sendDataToParent() {
      this.$emit("sendArticle", this.product_data.article);
    },
  },
};
</script>
<style lang="scss">
.vCatalogItem {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
  &__image {
    width: 100px;
  }
}
</style>
