<template>
  <h2>
    Контакты
  </h2>
  <p>Мы ответим на все интересующие вас вопросы!</p>
  <h2>8(800) 531 30 82</h2>
  <p>Не получилось связаться в рабочее время? Не проблема!<br>
  Напишите нам письмо help@lemonic.ru или заполните пожалуйста форму обратной связи.<br>
  Здесь Вы также можете оставить свои отзывы и предложения.</p>
  <form class="forma" @submit.passive="myFunction1">
    <input type="text" name="name" placeholder="Ваше имя" id="name" required>
    <input type="email" name="mail" placeholder="Ваш E-mail" id="email" required>
    <input type="tel" name="phone" placeholder="Номер телефона" id="number" maxlength="11" required>
    <textarea name="comment" placeholder="Текст сообщения" id="message"></textarea>
    <Button class="forma-button"  type="submit">
      Отправить
    </Button>
  </form>

</template>

<script setup>
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
const toast = useToast();

const myFunction1 = () => {
  toast.add({ severity: 'success', summary: 'Спасибо за ваше сообщение!', detail: 'Message Content', life: 3000 });
};
</script>

<style scoped>
.forma{
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
}
input,textarea{
  padding: 10px;
  text-color: var(--color-green);
  border: 1px solid var(--color-greeni);
  border-radius: 10px;
  color: var(--color-greeni);
  width: 400px;
}
input:active,textarea:active,input:focus,textarea:focus {
  outline: none;
}

.forma-button{
  margin-top: 5px;
  padding: 6px 12px;
  background: transparent;
  border-color: var(--color-greeni);
  border-radius: 12px;
  color: var(--color-green);
  margin-bottom: 15px;
}
button:active, button:hover  {
  background-color: var(--color-greeni)!important;
}

</style>