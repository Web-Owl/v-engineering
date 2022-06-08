<script>
import HeaderItem from "./components/Header.vue";
import NavItem from "./components/Nav.vue";
import OfferItem from "./components/Offer.vue";
import SolveItem from "./components/Solve.vue";
import CalculatorItem from "./components/Calculator.vue";
import PriceItem from "./components/Price.vue";
import BenefitsItem from "./components/Benefits.vue";
import ProjectsItem from "./components/Projects.vue";
import GetItItem from "./components/GetIt.vue";
import QuestionsItem from "./components/Questions.vue";
import FooterItem from "./components/Footer.vue";
import BaseModalItem from "./components/BaseModal.vue";
import BaseModalSuccess from "./components/BaseModalSuccess.vue";
import { mapGetters } from "vuex";

import jQuery from "jquery";
window.jQuery = window.$ = jQuery;
import Inputmask from "inputmask";
import { $ } from "dom7";

export default {
  name: "App",
  components: {
    HeaderItem,
    NavItem,
    OfferItem,
    SolveItem,
    CalculatorItem,
    PriceItem,
    BenefitsItem,
    ProjectsItem,
    GetItItem,
    QuestionsItem,
    FooterItem,
    BaseModalItem,
    BaseModalSuccess,
  },
  computed: {
   ...mapGetters({
     isActive: 'moduleCommon/modalActive'
    })
  },
  mounted() {
    $("input[type=tel]").each(function () {
      var im = new Inputmask("+7 (999) 999-99-99");
      im.mask(this);
    });
  },
};
</script>
<template>
    <nav-item></nav-item>
    <header-item></header-item>
    <offer-item></offer-item>
    <solve-item></solve-item>
    <calculator-item></calculator-item>
    <price-item></price-item>
    <benefits-item></benefits-item>
    <projects-item></projects-item>
    <get-it-item></get-it-item>
    <questions-item></questions-item>
    <footer-item></footer-item>
    <transition name="modal">
      <base-modal-item v-if="isActive"></base-modal-item>
      <base-modal-success v-else-if="$store.state.moduleCommon.thanks"></base-modal-success>
    </transition>
</template>


<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
