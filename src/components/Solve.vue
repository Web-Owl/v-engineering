<script>
import { mapActions } from "vuex";

export default {
  name: "solve-item",
  methods: {
    ...mapActions(["moduleCommon/displayModal"]),
  },
};
</script>
<template>
  <section class="section-projects s3" id="s3">
    <div class="container grid">
      <div class="projects_item">
        <h2>
          Мы проектируем, монтируем и обслуживаем
          <span>СИСТЕМЫ ВИДЕОНАБЛЮДЕНИЯ ДЛЯ:</span>
        </h2>
      </div>
      <div class="projects_item projects_item-2 grid">
        <div class="item grid">
          <div>
            <img
              src="@/assets/img/solve/7fcf5160b62c05d8b6bc50a48d3ff0f01.png"
              alt=""
            />
          </div>
          <h2>Складов</h2>
          <h3>От 20 900 рублей</h3>
          <button class="button" @click="this['moduleCommon/displayModal']()">
            Рассчитать точную стоимость
          </button>
        </div>
        <div class="item grid">
          <div>
            <img
              src="@/assets/img/solve/4f80f5f039612d41b6fc28ad895cebd91.png"
              alt=""
            />
          </div>
          <h2>Ресторанов, баров кафе</h2>
          <h3>От 19 700 рублей</h3>
          <button
            data-form="Рассчитать стоимость Ресторанов, баров кафе"
            class="button"
            data-modal=".callback-3"
          >
            Рассчитать точную стоимость
          </button>
        </div>
        <div class="item grid">
          <div>
            <img
              src="@/assets/img/solve/a8673971e031dfacc45497aaea5a6e351.jpg"
              alt=""
            />
          </div>
          <h2>Производственных помещений</h2>
          <h3>От 21 260 рублей</h3>
          <button
            data-form="Рассчитать стоимость Производственных помещений"
            class="button"
            data-modal=".callback-3"
          >
            Рассчитать точную стоимость
          </button>
        </div>
        <div class="item grid">
          <div>
            <img
              src="@/assets/img/solve/430949506f526e94359088f9ce8e357f1.png"
              alt=""
            />
          </div>
          <h2>Магазинов</h2>
          <h3>От 19 700 рублей</h3>
          <button
            data-form="Рассчитать стоимость Магазинов"
            class="button"
            data-modal=".callback-3"
          >
            Рассчитать точную стоимость
          </button>
        </div>
        <div class="item grid">
          <div>
            <img
              src="@/assets/img/solve/018dd613fda93ad853bc4b5fec1f7ea31.png"
              alt=""
            />
          </div>
          <h2>Автостоянок</h2>
          <h3>От 25 680 рублей</h3>
          <button
            data-form="Рассчитать стоимость Автостоянок"
            class="button"
            data-modal=".callback-3"
          >
            Рассчитать точную стоимость
          </button>
        </div>
        <div class="item grid">
          <div>
            <img
              src="@/assets/img/solve/c5a2534c748a2cc4a7f8c4745b9064f21.png"
              alt=""
            />
          </div>
          <h2>Загородных домов Коттеджей</h2>
          <h3>От 24 700 рублей</h3>
          <button
            data-form="Рассчитать стоимость Загородных домов Коттеджей"
            class="button"
            data-modal=".callback-3"
          >
            Рассчитать точную стоимость
          </button>
        </div>
        <div class="item grid">
          <div>
            <img
              src="@/assets/img/solve/6dce8e899308cf771aa4543f05b816af1.png"
              alt=""
            />
          </div>
          <h2>Квартир</h2>
          <h3>От 8 990 рублей</h3>
          <button
            data-form="Рассчитать стоимость Квартир"
            class="button"
            data-modal=".callback-3"
          >
            Рассчитать точную стоимость
          </button>
        </div>
        <div class="item grid">
          <div>
            <img
              src="@/assets/img/solve/c7cc4661fe9ee8c41fc505604bac39451.png"
              alt=""
            />
          </div>
          <h2>Любых других объектов</h2>
          <h3>От 12 000 рублей</h3>
          <button
            data-form="Рассчитать стоимость Любых других объектов"
            class="button"
            data-modal=".callback-3"
          >
            Рассчитать точную стоимость
          </button>
        </div>
      </div>
      <div class="projects_item">
        <span
          >*Стоимость зависит от количества камер, <br />качества видеосъемки и
          сложности монтажа</span
        >
      </div>
    </div>
  </section>
</template>