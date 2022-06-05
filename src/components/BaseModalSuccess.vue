<script>
import {mapActions} from 'vuex'
export default {
  name: "base-modal-success",
  methods: {
    ...mapActions(["moduleCommon/closeModal"]),
  },
}
</script>

<template>
  <div class="modal">
    <div class="layout" data-btn-type="close"></div>
    <div class="callback thanks">
      <div class="colse" data-btn-type="close" @click="this['moduleCommon/closeModal']()"></div>
      <h3 class="form-heading">
        Заявка отправлена!
        <span> В течение 9 минут с Вами свяжется специалист. </span>
      </h3>
    </div>
  </div>
</template>