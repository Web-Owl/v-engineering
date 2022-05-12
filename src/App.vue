<template>
  <Nav/>
  <Header/>
  <Offer/>
  <Solve/>
  <Calculator/>
  <Price/>
  <Benefits/>
  <Projects/>
  <GetIt/>
  <Questions/>
  <Footer/>
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
    Footer
  }
}
</script>

<style>

</style>
