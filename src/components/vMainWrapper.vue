<template>
  <div class="vMainWrapper">
    <p>{{ title }}</p>
    <vCatalog></vCatalog>
    <vCart 
        v-if="CART.length" 
        :cart_data="CART"
    />
  </div>
</template>

<script>
import vCatalog from "./vCatalog";
import vCart from "./vCart";
import { mapGetters } from "vuex";

export default {
  name: "vMainWrapper",
  components: {
    vCatalog,
    vCart,
  },
  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello");
  },
};
</script>

<style>
.vMainWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
