<template>
  <div class="product-page">
    <img :src="product.imageUrl">
    <form @submit.prevent="addToCart(product.id, product.price)" class="inf">
      <h2>
        {{ product.name }}
      </h2>
      <h6>Арт. 4503412-54</h6>

      <div class="filtrs">
        <Dropdown v-model="size" placeholder="Выберите размер"
                  :options="['42', '44', '46', '48']" required>
        </Dropdown>
      </div>

      <p>Состав: 68% полиэстер, 26% полиамид, 6% шерсть <br>
        Страна-производитель: Китай<br>
        Уход: Ручная стирка в холодной воде, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Сухая чистка
        запрещена</p>

      <Button class="inf-button" :disabled="!size" type="submit">
        Добавить корзину
      </Button>
    </form>
  </div>
  <div class="dop">
    <h2>
      Вам также может понравиться
    </h2>
    <div class="dop--products">
      <product-card class="dop--product" v-for="(product, index) in recommend"
                    :key="index"
                    :name="product.name"
                    :id="product.id"
                    :price="product.price"
                    :image-url="product.imageUrl">
      </product-card>
    </div>

  </div>

</template>
<script setup>
import {useRoute, useRouter} from "vue-router";
import {productTypes, useProducts} from "@/store/products";
import {ref} from "vue";
import ProductCard from "@/components/ProductCard.vue";
import {useCart} from "@/store/cart";
import { useToast } from "primevue/usetoast";


const toast = useToast();

const route = useRoute();
const productId = route.params.id;

const state = useProducts()


const router = useRouter()

const product = state.products.find(productItem => productItem.id == productId);

const size = ref(null);


const recommend = ref(state.products.slice(1, 4));

const addToCart = (id,price) => {
  const state = useCart();
  state.addToCart({id, size: size.value, price: price});


  toast.add({ severity: 'success', summary: 'Добавлено в корзину',
    life: 3000 });
}
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: row;
  margin-top: 35px;
}

.inf {
  text-align: right;
  margin-left: auto;
}

h2 {
  margin: 0;
}

h6 {
  margin-top: -10px;
  font-size: 15px;
  font-weight: normal;
}

.filtrs {
  margin: 40px 0;
}

p {
  width: 600px;
}

.inf-button {
  margin-top: 40px;
  padding: 6px 12px;
  background: transparent;
  border-color: var(--color-greeni);
  border-radius: 12px;
  color: var(--color-green);
}

.dop {
  text-align: left;
  margin-top: 30px;
}

.dop--product {
  //max-width: 200px;
}
.dop--products {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 30px;
  row-gap: 10px;
  //flex-wrap: wrap;
}
</style>