<script>
import Inputmask from "inputmask";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "base-modal-item",
  methods: {
    ...mapActions(["moduleCommon/toggleModal", "moduleCommon/closeModal"]),
    ...mapActions("users", ["getUsers", "addUser", "updateLocalUser"]),
  },
  computed: {
    ...mapGetters(["users/getUserInfo"]),
  },
  mounted() {
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(this.$refs.input);
    this.getUsers();
  },
};
</script>
<template>
  <div class="modal">
    <div class="layout" data-btn-type="close"></div>
    <div class="callback callback-4">
      <div
        class="colse"
        data-btn-type="close"
        @click="this['moduleCommon/closeModal']()"
      ></div>
      <div role="form" class="wpcf7" id="wpcf7-f245-o8" lang="ru-RU" dir="ltr">
        <div class="screen-reader-response">
          <p role="status" aria-live="polite" aria-atomic="true"></p>
          <ul></ul>
        </div>
        <form
          @submit.prevent="
            $store.dispatch('users/addUser', this['users/getUserInfo'])
          "
          class="wpcf7-form init"
          id="modalForm"
        >
          <h3 class="form-heading">
            Бесплатная консультация
            <span>
              Введите номер телефона и в течение<br />
              9 минут с Вами свяжется специалист
            </span>
          </h3>
          <span class="wpcf7-form-control-wrap tel-80">
            <input
              type="tel"
              ref="input"
              name="phone"
              pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
              placeholder="+7 (___) ___-__-__"
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
                input
              "
            />
          </span>
          <button type="submit" class="button button_form">Получить консультацию</button>
          <div class="wpcf7-response-output" aria-hidden="true"></div>
        </form>
      </div>
    </div>
  </div>
</template>
