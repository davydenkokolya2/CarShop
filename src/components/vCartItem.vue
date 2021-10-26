<template>
  <div class="vCartItem">
    <img
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="img"
      class="vCartItem__Image"
    />
    <div class="vCartItem__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="vCartItem__quantity">

    </div>
    <button>Delete</button>
  </div>
</template>
<script>
export default {
  name: "vCartItem",
  props: {
      cart_item_data: {
          type: Object,
          default() {
            return {}
          }
      }
  },
  mounted() {
    this.cart_item_data.quantity = 1;
  }
};
</script>
<style lang="scss">
.vCartItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
  &__Image{
    max-width: 50px;
  }
}
</style>
