<template>
  <Nav :phoneHref='phoneHref' :mailTo='mailTo' @open-modal="isOpened"/>
  <Header :phoneHref='phoneHref' :mailTo='mailTo' @open-modal="isOpened"/>
  <Offer/>
  <Solve/>
  <Calculator/>
  <Price/>
  <Benefits/>
  <Projects/>
  <GetIt/>
  <Questions :phoneHref='phoneHref'/>
  <Footer :phoneHref='phoneHref' :mailTo='mailTo'/>
  <BaseModal v-if="showModal" @close-modal="showModal = false"/> 
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Offer from './components/Offer.vue'
import Solve from './components/Solve.vue'
import Calculator from './components/Calculator.vue'
import Price from './components/Price.vue'
import Benefits from './components/Benefits.vue'
import Projects from './components/Projects.vue'
import GetIt from './components/GetIt.vue'
import Questions from './components/Questions.vue'
import Footer from './components/Footer.vue'
import {mapGetters} from 'vuex'
import jQuery from "jquery";
window.jQuery = window.$ = jQuery
import Inputmask from "inputmask";
import { $ } from 'dom7'
import BaseModal from './components/BaseModal.vue';


export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Offer,
    Solve,
    Calculator,
    Price,
    Benefits,
    Projects,
    GetIt,
    Questions,
    Footer,
    BaseModal
  },
  computed: {
    ...mapGetters(
        {
            phoneHref: "projects/phoneHref",
            mailTo: "projects/mailTo"
        }
    )
},
methods: {
   isOpened() {
      this.showModal = true
    }
},
 mounted(){
    $('input[type=tel]').each(function(){
      var im = new Inputmask("+7 (999) 999-99-99");
      im.mask(this);
    });
  },
  data() {
    return{
      showModal: false,
    }
  }
}
</script>

<style>

</style>
