<template>
  <div>
    <h1>Catalog</h1>
    <div class="vCatalog">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @sendArticle="showChildArticlesConsole"
      >
      </vCatalogItem>
    </div>
  </div>
</template>
<script>
import vCatalogItem from "./vCatalogItem";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "vCatalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showChildArticlesConsole(data){
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log('Data arived');
      }
    })
  }
};
</script>
<style>
.vCatalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
