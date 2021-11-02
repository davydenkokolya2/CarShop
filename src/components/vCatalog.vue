<template>
  <div>
    <div class="vCatalog__link_to_cart">Cart: 0</div>
    <h1>Catalog</h1>
    <div class="vCatalog__list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @sendArticle="showChildArticlesConsole"
        @addToCart="addToCart"
      >
      </vCatalogItem>
    </div>
  </div>
</template>
<script>
import vCatalogItem from "./vCatalogItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "vCatalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arived");
      }
    });
  },
};
</script>
<style>
.vCatalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
