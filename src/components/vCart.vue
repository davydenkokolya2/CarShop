<template>
  <div class="vCart">
      <h1>Корзина</h1>
      <vCartItem/>
  </div>
</template>
<script>
import vCartItem from './vCartItem.vue'


export default {
    name: 'vCart',
    components: {
        vCartItem,
        
    }
}
</script>
<style scoped></style>
