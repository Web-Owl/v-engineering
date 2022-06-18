<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "header-item",
  computed: {
    ...mapGetters({
      dealer: "dealer/getInfo",
    }),
    ...mapGetters(["users/getUserInfo"]),
  },
  methods: {
    ...mapActions(["dealer/getDealerInfo", "moduleCommon/toggleModal"]),
    ...mapActions("users", ["getUsers", "addUser", "updateLocalUser"]),
    
  },
  mounted() {
    this["dealer/getDealerInfo"]();
    this.getUsers();
  },
};
</script>
<template>
  <header class="main-header">
    <div class="container grid">
      <div class="item">
        <a href=""
          ><img
            src="@/assets/img/icons/logoza-ru-hd.png"
            alt=""
            class="logo img-responsive"
        /></a>
      </div>
      <div class="item grid item-header-a">
        <div class="grid header-a">
          <img src="@/assets/img/header/human.png" alt="" />
          <a @click="this['moduleCommon/toggleModal']()">
            <span>Вызвать</span><br /><span>специалиста</span>
          </a>
        </div>
        <div class="grid header-a">
          <img src="@/assets/img/header/phone.png" alt="" />
          <a @click="this['moduleCommon/toggleModal']()">
            <span>Заказать</span><br /><span>звонок</span>
          </a>
        </div>
      </div>
      <div class="item telefon-block">
        <h4>Есть вопросы? Звоните:</h4>

        <a
          class="phone"
          :href="'tel:' + `${dealer.phone}`.replace(/\s|\)|\(|-/g, '')"
          >{{ dealer.phone }}</a
        >
        <p>
          Без выходных с 09:00-21:00<br /><a
            class="email"
            :href="`mailto:${dealer.email}`"
            >{{ dealer.email }}</a
          >
        </p>
      </div>
      <div class="item">
        <a
          href="#"
          data-modal=".callback-2"
          class="mobile_b"
          style="
            display: none;
            float: right;
            margin-right: 20px;
            margin-top: 8px;
          "
        >
          <button class="button" style="display: block">Заказать звонок</button>
        </a>
      </div>
    </div>
    <div class="container grid header-hone">
      <div class="item">
        <h1>
          <span>Видеонаблюдение</span><br /><span>с пожизненной</span
          ><br /><span>гарантией</span>
        </h1>
        <p>
          В Москве
          <br />и МО за
          <span>48 часов</span>
        </p>
        <a href="#s8" hidden>
          <button class="button" style="display: block">
            Как работают наши камеры онлайн
          </button>
        </a>
      </div>
      <div class="item">
        <div role="form" class="wpcf7" id="wpcf7-f93-o1" lang="ru-RU" dir="ltr">
          <div class="screen-reader-response">
            <ul></ul>
          </div>
          <form
            @submit.prevent="
              $store.dispatch('users/addUser', this['users/getUserInfo'])
              "
              id="mainForm"
            
            class="wpcf7-form init form2"
          >
            <div class="in-form-2">
              <h2>
                Получите предложение
                <span>конкретно для Вашего помещения за 9 минут</span>
              </h2>
              <p class="text one" data-number="1">
                Оставьте свой номер телефона, и наш специалист свяжется с Вами в
                течение 9 минут для консультации
              </p>
              <span class="wpcf7-form-control-wrap tel-384">
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  name="phone"
                  pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                  required
                  :value="['users/getUserInfo'].phone"
                  @input="
                    this.updateLocalUser({
                      field: 'phone',
                      value: $event.target.value,
                    })
                  "
                  oninput="this.setCustomValidity('');"
                  oninvalid="this.setCustomValidity('Обязательное поле')"
                  size="40"
                  class="
                    wpcf7-form-control
                    wpcf7-text
                    wpcf7-tel
                    wpcf7-validates-as-required
                    wpcf7-validates-as-tel
                    tel
                  "
                  id="modalphone"
                />
              </span>
              <button type="submit" id="button_form" class="button button_form">
                Получить это предложение
                <br />
                БЕСПЛАТНО
              </button>
              <p class="text two" data-number="2">
                БЕСПЛАТНО после консультации получаете 3 варианта сметы с
                зафиксированной СКИДКОЙ
              </p>
              <p class="text three" data-number="3">
                Получаете ПОЖИЗНЕННУЮ гарантию при подписании договора на
                обслуживание системы
              </p>
            </div>
            <div class="wpcf7-response-output" aria-hidden="true"></div>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>