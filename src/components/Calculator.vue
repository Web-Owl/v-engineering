<script>
export default {
  name: 'calculator-item',
};
</script>
<template>
  <div
    id="s4"
    class="section section-calculator s4"
  >
    <div class="container">
      <h2 class="section-calculator-h2">
        Калькулятор стоимости системы видеонаблюдения
      </h2>
      <div class="blue-block grid">
        <div class="item">
          <h2>
            Количество камер от 1 до 4. <br />Если нужно больше, оставьте
            заявку, мы расчитаем систему под Ваши задачи.
          </h2>
          <div class="sub-item grid">
            <div class="spinner-calc">
              <span class="wpcf7-form-control-wrap your-count"
                ><select
                  name="your-count"
                  class="
                    wpcf7-form-control wpcf7-select
                    numba-field numba-field-sel
                  "
                  aria-invalid="false"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select></span
              >
            </div>
          </div>
        </div>
        <div class="item">
          <div class="sub-item grid">
            <h2>Введите свой телефон:<br /><br /><br /></h2>
          </div>
          <div class="sub-item">
            <span class="wpcf7-form-control-wrap tel-853"
              ><input
                type="tel"
                name="tel-853"
                value=""
                size="40"
                class="
                  wpcf7-form-control
                  wpcf7-text
                  wpcf7-tel
                  wpcf7-validates-as-required
                  wpcf7-validates-as-tel
                "
                id="modalphone"
                aria-required="true"
                aria-invalid="false"
                placeholder="8 916 123 45 67"
            /></span> 
          </div>
          <div class="sub-item"></div>
        </div>
      </div>
      <section class="section-price">
        <div class="container grid">
          <div
            data-id="group-1"
            data-orig_data_id="group-1"
            data-class="wpcf7cf_group"
          >
            <div class="blue-block">
              <button class="button button_form">Расчитать стоимость</button>
            </div>
          </div>
        </div>
      </section>
      <div class="big-blue-block">
        <div class="in-big-blue-block">
          <h2>
            Введите количество камер и получите коммерческое предложение с
            зафиксированной скидкой на оборудование в трех вариантах, - 2Mp, 4Mp
            и 8Mp.
          </h2>
          <div class="in-big-blue-block grid">
            <div>
              <div class="quality">
                <h4 class="qfirts"></h4>
                <h4 class="qsecond"></h4>
              </div>
              <a
                href="@/assets/img/calculator/pic.png"
                ><img
                  src="@/assets/img/calculator/pic.png"
                  alt="car"
              /></a>
              <a
                href="@/assets/img/calculator/zoom11.png"
                ><img
                  src="@/assets/img/calculator/zoom11.png"
                  alt="zoom1"
              /></a>
              <a
                href="https://www.youtube.com/watch?v=aXxsNBQzko4"
                rel="prettyPhoto"
                ><span>Посмотреть видеофрагмент 2Mp</span></a
              >
            </div>
            <div>
              <div class="quality">
                <h4 class="qfirts"></h4>
                <h4 class="qsecond"></h4>
              </div>
              <a
                href="@/assets/img/calculator/pic.png"
                ><img
                  src="@/assets/img/calculator/pic.png"
                  alt="car"
              /></a>
              <a
                href="@/assets/img/calculator/zoom21.png"
                ><img
                  src="@/assets/img/calculator/zoom21.png"
                  alt="zoom1"
              /></a>
              <a
                href="https://www.youtube.com/watch?v=v9mWMN4SU-w"
                rel="prettyPhoto"
                ><span>Посмотреть видеофрагмент 4Mp</span></a
              >
            </div>
            <div>
              <div class="quality">
                <h4 class="qfirts"></h4>
                <h4 class="qsecond"></h4>
              </div>
              <a
                href="@/assets/img/calculator/pic.png"
                ><img
                  src="@/assets/img/calculator/pic.png"
                  alt="car"
              /></a>
              <a
                href="@/assets/img/calculator/zoom31.png"
                ><img
                  src="@/assets/img/calculator/zoom31.png"
                  alt="zoom1"
              /></a>
              <a
                href="https://www.youtube.com/watch?v=1Zq60p7WCeM"
                rel="prettyPhoto"
                ><span>Посмотреть видеофрагмент 8Mp</span></a
              >
              <input
                type="hidden"
                name="radio-select"
                value="Аналоговые камеры"
                class="wpcf7-form-control wpcf7-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="section-price">
    <div class="container grid">
      <div class="blue-block"><br /><br /><br /></div>
    </div>
  </section>
</template>