<template>
  <div class="vCart">
      <h1>Корзина</h1>
      <vCartItem
        v-for="item in cart_data"
        :key="item.article"
        :cart_item_data="item"
      />
  </div>
</template>
<script>
import vCartItem from './vCartItem.vue'


export default {
    name: 'vCart',
    components: {
        vCartItem,
        
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return [];
            }
        }
    }
}
</script>
<style scoped></style>
