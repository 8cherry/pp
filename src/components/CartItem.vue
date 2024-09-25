<script setup>
import {ref} from "vue";
import {useCart} from "@/store/cart";

const props = defineProps(['imageUrl', 'size', 'name', 'q', 'id']);

const state = useCart()
</script>

<template>
  <div class="cart--item">
    <img :src="imageUrl" alt="">
    <div class="cart--item-content">
      <div>
        {{ name }}

      </div>
      <div>
        Размер: {{ size }}
      </div>
      <div>
        <Button @click="state.decrementProduct(id)">-</Button>
        {{ q }}
        <Button @click="state.incrementProduct(id)">+</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart--item {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
}

img {
  max-width: 200px;
}

.cart--item-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}
</style>