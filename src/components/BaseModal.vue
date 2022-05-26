<template>
<div class="modal">
    <div class="layout" data-btn-type="close">

    </div>
  <div class="callback callback-4">
        <div class="colse" data-btn-type="close"  @click="$store.commit('moduleCommon/displayModal')"></div>
        <div role="form" class="wpcf7" id="wpcf7-f245-o8" lang="ru-RU" dir="ltr">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/#wpcf7-f245-o8" method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">

<h3 class="form-heading">
    Бесплатная консультация
    <span>
        Введите номер телефона и в течение<br>
        9 минут с Вами свяжется специалист
    </span>
</h3>
<span class="wpcf7-form-control-wrap tel-80">
    <input type="tel" ref="input" name="tel-80" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel input" aria-required="true" aria-invalid="false" placeholder="Ваш телефон" />
    </span>
<button class="button button_form">Получить консультацию</button>
<div class="wpcf7-response-output" aria-hidden="true"></div></form>
</div>    </div>

</div>

  
</template>
<script>
import Inputmask from "inputmask";
export default {
    mounted(){
      var im = new Inputmask("+7 (999) 999-99-99");
      im.mask(this.$refs.input);
  }
}
</script>
