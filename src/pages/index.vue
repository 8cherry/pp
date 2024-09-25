<template>
  <div class="home-page">
    <img class="home--banner" srcset="/images/home_banner2x.png 2x"  src="/images/home_banner1.png" />
    <h2>
Новая коллекция
    </h2>
    <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <ProductCard :id="slotProps.data.id"
                     :name="slotProps.data.name"
                     :image-url="slotProps.data.imageUrl"
                     :price="slotProps.data.price"></ProductCard>
      </template>
    </Carousel>
    </div>


  <Carousel class="reclama" :value="[{img: '/images/ban1.png', }, {img: '/images/ban2.png'}]"  :autoplay-interval="10000" :numVisible="1" :numScroll="1">
    <template #item="slotProps">
      <div class="reclama--banner">
        <img :src="slotProps.data.img" width="1200">
        <router-link :to="{ path: '/catalog'}">
          <Button class="reclama--banner-button">
          Перейти в каталог
        </Button>
        </router-link>
      </div>
    </template>
  </Carousel>
  <div class="about">
    <img src="/images/about.png" width="450">
    <div class="about--text">
      <h2>О нас</h2>
    <textblock>
      В интернет-магазине Lemonic представлены лучшие коллекции женской одежды. Мы стремимся сделать стильный шоппинг доступным в каждом уголке России. Увлечённые модницы могут выбрать товары премиум-класса и органично совместить их с базовыми вещами демократичной ценовой категории.
<br>
      В нашем интернет-магазине женской одежды вы можете оформить заказ всего за несколько минут, оплатить его удобным способом и заказать доставку в любой город.  Покупательница может быть уверена, что получит фирменную вещь превосходного качества с гарантией.
    </textblock>
  </div>
  </div>
</template>

<script setup>

import Carousel from 'primevue/carousel';
import {useProducts} from "../store/products";
import {ref} from "vue";
import ProductCard from "@/components/ProductCard.vue";

const store = useProducts();

const products = store.products;

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>


<style scoped>
.home-page {


}
.home--banner {
  width: 100%;
  object-fit: cover;
  //object-position: center;;
  margin-bottom: 80px;
}
.reclama--banner{
  object-fit: cover;
  //object-position: center;;
  margin-top: 80px;
  position: relative;
}

.reclama--banner-button {
  position: absolute;
  z-index: 4;
  top: 60%;
  right: 18%;
  padding: 6px 12px;
  background: transparent;
  border-color: white;
  border-radius: 12px;

}
.about{
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  column-gap: 100px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.about--text{
text-align: right;
  width: 600px;
}



</style>
<style>
  .reclama .p-carousel-next-button,.reclama .p-carousel-prev-button {
    display: none;
  }

</style>