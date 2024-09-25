<template>
  <div>
    <div>
      <h2>
        Каталог
      </h2>
    </div>
    <div class="filtrs">
      <MultiSelect v-model="filters" option-value="value" placeholder="Фильтры" filter :option-label="'name'" :options="productTypes">
      </MultiSelect>
    </div>

    <div class="catalog--list">
      <product-card v-for="(item,index) in products"
                    :key="index"
                    :id="item.id"
                    :name="item.name"
                    :price="item.price"
                    :imageUrl="item.imageUrl">

      </product-card>
    </div>
  </div>

</template>

<script setup>
import {computed, ref} from "vue";
import {productTypes,useProducts} from "@/store/products";
import ProductCard from "@/components/ProductCard.vue";
// import {productTypes} from "../store/products.js";

const op = ref();
const store = useProducts();

const products = computed(() => {
  let  products = store.products;

  if (filters.value.length) {
    products = products.filter((item,index) => {
      return filters.value.includes(item.type);
    });
  }

  return products;
});

const toggle = (event) => {
  op.value.toggle(event);
}

const filters = ref([]);


</script>

<style scoped>
.catalog--list {
  display: flex;
  flex-direction: row;
  //column-gap: 55px;
  justify-content: space-between;
  row-gap: 40px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
}
.filtrs{
  text-align: right;
  margin-bottom: 30px;
}

</style>