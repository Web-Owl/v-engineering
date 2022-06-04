<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "projects-item",
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters({
      projects: 'projects/getAll'
    }),
  },
  methods: {
    ...mapActions(['projects/getAllProjects'])
  },
  mounted() {
    this['projects/getAllProjects']()
  },
  
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  }
};
</script>
<template>
  <section id="s7" class="slider s7">
    <div class="container">
      <div class="slider-h">
        <h2>РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :loop="true"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="project in projects" :key="project.id">
          <div class="main grid">
            <div class="div">
              <img
                :src="require('@/assets/img/projects/' + project.img)"
                alt=""
                class="img-responsive"
              />
            </div>
            <div class="task">
              <h2 class="h21">Объект:</h2>
              <p>{{ project.object }}</p>
              <h2 class="h22">Задача</h2>
              <p v-for="item in project.description" :key="item">
                {{ item }}
              </p>
              <h2 class="h23">Решение:</h2>
              <p>{{ project.solution }}</p>
              <h2 class="h24">Результат:</h2>
              <p>{{ project.result }}</p>
              <h2 class="h25">Стоимость в других компаниях:</h2>
              <p>{{ project.another_price }} рублей</p>
              <h2 class="h26">Стоимость у нас:</h2>
              <p>
                {{ project.our_price }} рублей
                <span v-show="project.tax">с НДС</span>
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>