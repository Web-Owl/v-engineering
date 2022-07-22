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
    <div class="col-span-2" v-show="offer">
      *Стоимость зависит от количества камер, качества видеосъемки и сложности монтажа
    </div>
  </footer>
</template>