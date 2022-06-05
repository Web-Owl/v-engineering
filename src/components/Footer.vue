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
  </footer>
</template>