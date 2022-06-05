<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "questions-item",
  methods: mapActions(["dealer/getDealerInfo"]),
  computed: mapGetters({
    dealer: "dealer/getInfo",
  }),
  mounted() {
    this["dealer/getDealerInfo"]();
  },
  created: function () {
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.671294, 37.490584],
        zoom: 15,
        controls: [],
        
      });

      myMap.geoObjects.add(
        new ymaps.Placemark(
          [55.670818, 37.512434],
          {
            balloonContent:
            "Москва, Ул. Удальцова, д. 3к1",
            iconCaption: "Видео-инжиниринг",
          },
          {
            preset: "islands#blueDotIcon",
          }
        )
      );
    }
  },
};
</script>
<template>
  <section id="s10" class="section-map s10">
    <div id="map">
      <div id="map" style="width: 100%; height: 6500px"></div>
      <!-- <div style="position: relative; overflow: hidden"><iframe
          src="https://yandex.ru/map-widget/v1/-/CGW1A~q"
          width="100%"
          height="650px"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div> -->
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
          <a :href="'tel:' + `${dealer.phone}`.replace(/\s|\)|\(|-/g, '')">{{
            dealer.phone
          }}</a>
          <div class="wpcf7-response-output" aria-hidden="true"></div>
        </form>
      </div>
    </div>
  </section>
</template>