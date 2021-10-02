<template>
  <div class="vCatalogItem">
    <img src="" alt="" />
    <p class="vCatalogItemName">{{product_data.name}}</p>
    <p class="vCatalogItemPrice">{{product_data.price}}</p>
    <button class="vCatalogItemAddToCartBtn btn">Add to Cart</button>
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
};
</script>
<style>

.vCatalogItem {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
}
</style>
