<template>
  <footer>
    <div class="footer--container">
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
        <img width="25"  height="25" src="/images/inst.png" alt="">
      </div>
    </div>
  </footer>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<style scoped>
footer {

  width: 100%;
  border-top: 1px solid #67825B;
  padding: 5px 20px;
}

.footer--container {
  max-width: 1200px;
  margin: auto;
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