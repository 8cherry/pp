<template>
  <div class="cart">
    <template v-for="(product, index) of products">
      <CartItem class="tovar" :image-url="product.imageUrl" :id="product.id" :q="product.q" :name="product.name"
                :size="product.size"/>
    </template>
  </div>
  <div class="summa">
    К оплате: {{ state.cartTotal }} ₽ <br>
    Количество вещей: {{ state.cartTotalProducts }}
  </div>

  <Button @click="openModal()" class="overlay" id="form1">Оформить заказ</Button>


  <div class="modal" @click="closeModal()">
    <form class="modal--form" @click.stop="" @submit.prevent="sendForm">
      <h1>Введите данные для оформления заказа</h1>
      <input type="text" name="name" placeholder="Ваше имя" id="name" required>
      <input type="email" name="mail" placeholder="Ваш E-mail" id="email" required>
      <input type="tel" name="phone" placeholder="Номер телефона" id="number"  minlength="11" maxlength="11" required>
      <Button type="button">
        Заказать
      </Button>
    </form>
  </div>

</template>

<script setup>

import {useProducts} from "@/store/products";
import CartItem from "@/components/CartItem.vue";
import {useCart} from "@/store/cart";
import {computed, ref} from "vue";
import {useToast} from "primevue/usetoast";

const openModal = () => {
  document.querySelector('.modal').style.display = 'flex';
}

const closeModal = () => {
  document.querySelector('.modal').style.display = 'none';
}

const toast = useToast();

const sendForm = () => {
  closeModal();
  toast.add({ severity: 'success', summary: "Заказ отправлен в обработку", life: 3000 });

}
const state = useCart();

const productsState = useProducts();
let totalPrice = ref(0);
let totalItems = ref(0);

// Функция для обновления суммы и количества товара
function updateCart(price, quantity) {
  totalPrice.value += price * quantity;
  totalItems.value += quantity;
}

function resetCart() {
  totalPrice.value = 0;
  totalItems.value = 0;
}


const products = computed(() => {
  // resetCart();

  return state.products.map(({id: productId, size, q}) => {

    const product = productsState.products.find(product => product.id == productId);

    if (!product)
      return null;

    const priceInt = Number(product.price.replace(' ', '',))

    // updateCart(priceInt, q);

    return Object.assign(product, {size, q});
  }).filter(item => Boolean(item));
})

</script>

<style scoped>
.cart {
  padding-top: 20px;
  row-gap: 20px;
  display: flex;
  flex-direction: column;
}

.summa {
  padding-top: 25px;
  text-align: center;
}

.modal {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  justify-content: center;
  align-items: center;

}

.modal--form {
  width: 50%;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 1rem;
}
</style>