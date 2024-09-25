
<template>
  <div class="wrapper">
    <Header></Header>
    <Main class="main">
      <router-view></router-view>
    </Main>
    <Footer>

    </Footer>
  </div>
  <Toast />

</template>

<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import Toast from "primevue/toast";

</script>


<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
</style>
