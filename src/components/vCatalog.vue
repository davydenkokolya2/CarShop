<template>
  <div>
    <h1>Catalog</h1>
    <div class="vCatalog">
      <vCatalogItem
        v-for="product in products"
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

export default {
  name: "vCatalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {
      products: [
        {
          image: "1.jpg",
          name: "T-shirt 1",
          price: 100,
          article: "T1",
          available: true,
          category: "Мужские",
        },
        {
          image: "2.jpg",
          name: "T-shirt 2",
          price: 150,
          article: "T2",
          available: true,
          category: "Женские",
        },
        {
          image: "3.jpg",
          name: "T-shirt 3",
          price: 200,
          article: "T3",
          available: false,
          category: "Женские",
        },
        {
          image: "4.jpg",
          name: "T-shirt 4",
          price: 300,
          article: "T4",
          available: true,
          category: "Мужские",
        },
        {
          image: "5.jpg",
          name: "T-shirt 5",
          price: 500,
          article: "T5",
          available: false,
          category: "Женские",
        },
        {
          image: "6.jpeg",
          name: "T-shirt 6",
          price: 700,
          article: "T6",
          available: true,
          category: "Женские",
        },
      ],
    };
  },
  methods: {
    showChildArticlesConsole(data){
      console.log(data)
    }
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
