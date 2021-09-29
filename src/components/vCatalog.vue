<template>
  <div class="vCatalog">
    <h1>Catalog</h1>
    <vCatalogItem></vCatalogItem>
  </div>
</template>
<script>
import vCatalogItem from "./vCatalogItem";

export default {
  name: "vCatalog",
  components: {
    vCatalogItem,
  },
};
</script>
<style scoped></style>
