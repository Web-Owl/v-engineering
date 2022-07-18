<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'footer-item',
  methods: mapActions(['dealer/getDealerInfo']),
  computed: mapGetters({
      dealer: 'dealer/getInfo',
    }),
  mounted() {
    this['dealer/getDealerInfo']();
  },
  data() {
    return {
      offer: false
    }
  }
};
</script>
<template>
  <footer class="footer grid">
    <div>
      <p class="text">ИП Сочненков</p>
      <p class="text">ООО «Видео-инжиниринг»</p>
      <p class="text">{{ dealer.address }}</p>
    </div>
    <div style="text-align: right">
      <p class="text">
        Есть вопросы? Звоните:<br />

        <a :href="'tel:' + `${dealer.phone}`.replace(/\s|\)|\(|-/g, '')">{{ dealer.phone }}</a
        ><br />
        <a :href="`mailto:${dealer.email}`">{{ dealer.email }}</a
        ><br />
      </p>
    </div>
    <div class="flex justify-center col-span-2">
      <p @click="offer = !offer" class="cursor-pointer">Подробные условия акции</p>
    </div>
    <div v-show="offer">
      <p >*Максимальная выгода на покупку автомобиля рассчитывается путем суммирования выгод:</p>
      <ol>
        <li>по кредитной программе «Семейный автомобиль»;</li>
        <li>по программе TRADE-IN (при сдаче автомобиля марки Chery);</li>
        <li>прямой скидки от салона;</li>
        <li>выгоды на покупку стандартного набора дополнительного оборудования для автомобиля. </li>
      </ol>
      <p>Максимальная выгода на каждый конкретный автомобиль из наличия рассчитывается индивидуально с клиентом в нашем салоне и может отличаться от указанной выгоды в предложении.</p>
      <div class="legals-footnote">
        <p>Не является публичной офертой. Подробности узнавайте в отделе продаж Chery Кунцево и EXEED Кунцево.</p>
      </div>
    </div>
  </footer>
</template>