
<template>
  <header>
    <div class="header--container container" >
      <div class="logo">
        <img src="/logo.svg" alt="" width="159" height="56">
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/">Главная</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/catalog'}">
              Каталог
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              Контакты
            </router-link>

          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div class="cart">
        <img width="25" @click="router.push('/cart')" height="25" src="/cart.svg" alt="">
      </div>
    </div>
  </header>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<style scoped>
header {

  width: 100%;
  border-bottom: 1px solid #67825B;
  padding: 5px 20px;
}

.header--container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}


nav {
  margin-right: auto;
  //background: black;
}

ul {
  display: flex;
  flex-direction: row;
  width: 100%;
  list-style: none;
  column-gap: 10px;
}


</style>