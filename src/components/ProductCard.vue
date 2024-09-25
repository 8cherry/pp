

<template>
  <div class="product" @click="router.push('/product/'+id)">
    <img class="product--image" :src="imageUrl"  alt=""/>
    <p class="product-name">
      {{name}}
    </p>
    <p class="product--price">
      {{price}} ₽
    </p>
  </div>
</template>


<script setup>
import {useRouter} from "vue-router";

const props = defineProps([
    'name', 'id', 'imageUrl', 'price'
])

const router = useRouter()
</script>
<style scoped>
p {
  margin: 0;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
}

.product--image {
  width: 100%;
  max-width: 250px;
  max-height: 295px;
  object-fit: cover;
}
.product-name {

}
.product--price {
  font-family: "Jeju";
}
</style>