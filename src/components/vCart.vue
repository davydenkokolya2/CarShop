<template>
  <div class="vCart">
    <router-link :to="{ name: 'catalog' }">
      <div class="vCatalog__link_to_cart">Back to catalog</div>
    </router-link>
    <h1>Корзина</h1>
    <p v-if="!CART.length">В корзине ничего нет</p>
    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
    <div class="vCart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }}</p>
    </div>
  </div>
</template>
<script>
import vCartItem from "./vCartItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "vCart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        
      }
      return result;
    },
  },
};
</script>
<style lang="scss">
.vCart {
  margin-bottom: 163px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px * 3;
    display: flex;
    justify-content: center;
    background: #26ae68;
    color: #ffffff;
    font-size: 20px;
  }
  .total__name {
    margin-right: 16px * 2;
  }
}
</style>
