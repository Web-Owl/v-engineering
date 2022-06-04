<script>
export default {
  name: "questions-item",
};
</script>
<template>
  <section id="s10" class="section-map s10">
    <div id="map">
      <div style="position: relative; overflow: hidden">
        <a
          href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >Москва</a
        ><a
          href="https://yandex.ru/maps/213/moscow/?ll=37.622504%2C55.753215&utm_medium=mapframe&utm_source=maps&z=10"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >Яндекс Карты — транспорт, навигация, поиск мест</a
        ><iframe
          src="https://yandex.ru/map-widget/v1/-/CGW1A~q"
          width="100%"
          height="650px"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
    </div>
    <div class="form grid">
      <div role="form" class="wpcf7" id="wpcf7-f214-o4" lang="ru-RU" dir="ltr">
        <div class="screen-reader-response">
          <p role="status" aria-live="polite" aria-atomic="true"></p>
          <ul></ul>
        </div>
        <form
          action="/#wpcf7-f214-o4"
          method="post"
          class="wpcf7-form init"
          novalidate="novalidate"
          data-status="init"
        >
          <div style="display: none">
            <input type="hidden" name="_wpcf7" value="214" />
            <input type="hidden" name="_wpcf7_version" value="5.5.6" />
            <input type="hidden" name="_wpcf7_locale" value="ru_RU" />
            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f214-o4" />
            <input type="hidden" name="_wpcf7_container_post" value="0" />
            <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
            <input type="hidden" name="_wpcf7cf_hidden_group_fields" value="" />
            <input type="hidden" name="_wpcf7cf_hidden_groups" value="" />
            <input type="hidden" name="_wpcf7cf_visible_groups" value="" />
            <input type="hidden" name="_wpcf7cf_repeaters" value="[]" />
            <input type="hidden" name="_wpcf7cf_steps" value="{}" />
            <input
              type="hidden"
              name="_wpcf7cf_options"
              value='{"form_id":214,"conditions":[],"settings":{"animation":"yes","animation_intime":200,"animation_outtime":200,"notice_dismissed":false,"regex_numeric":"^[0-9]+$","regex_alphabetic":"^[a-zA-Z]+$","regex_alphanumeric":"^[a-zA-Z0-9]+$","regex_date":"^(0?[1-9]|1[012])[- .](0?[1-9]|[12][0-9]|3[01])[- \/.](19|20)?[0-9]{2}$","regex_email":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$","regex_numeric_label":"numeric","regex_alphabetic_label":"alphabetic","regex_alphanumeric_label":"alphanumeric","regex_date_label":"date","regex_email_label":"email","regex_custom_1":"","regex_custom_2":"","regex_custom_3":"","regex_custom_4":"","regex_custom_5":"","regex_custom_1_label":"custom 1","regex_custom_2_label":"custom 2","regex_custom_3_label":"custom 3","regex_custom_4_label":"custom 4","regex_custom_5_label":"custom 5"}}'
            />
            <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
          </div>
          <h2>Остались вопросы?</h2>
          <p>
            Введите свой вопрос и в течение 9 минут Вам ответит наш специалист
          </p>
          <span class="wpcf7-form-control-wrap textarea-520">
            <textarea
              name="textarea-520"
              cols="40"
              rows="10"
              class="wpcf7-form-control wpcf7-textarea inp ta"
              aria-invalid="false"
              placeholder="Сколько камер нужно для ресторана"
            ></textarea>
          </span>
          <span class="wpcf7-form-control-wrap tel-297"
            ><input
              type="tel"
              name="tel-297"
              value=""
              size="40"
              class="
                wpcf7-form-control
                wpcf7-text
                wpcf7-tel
                wpcf7-validates-as-required
                wpcf7-validates-as-tel
                inp
              "
              aria-required="true"
              aria-invalid="false"
              placeholder="Ваш телефон"
          /></span>
          <button class="button button_form">Задать вопрос</button>
          <h3>Или позвоните по телефону</h3>
          <a :href="phoneHref">{{ $store.state.projects.phoneNumber }}</a>
          <div class="wpcf7-response-output" aria-hidden="true"></div>
        </form>
      </div>
    </div>
  </section>
</template>