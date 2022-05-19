<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { mapState } from 'vuex'

export default {
    computed: mapState({
     projects: state => state.projects.all
  }),
  created () {
    this.$store.dispatch('projects/getAllProjects')
  },
    name: 'projects-item',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],
      };
    },
};
</script>
<template>
<section id="s7" class="slider s7" style="background: url(https://video.taksecure.ru/wp-content/uploads/2022/02/slider-bg.png) center; -webkit-background-size: cover; background-size: cover;">
    <div class="container">
        <div class="slider-h">
            <h2>РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
        </div>
        <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide v-for="project in projects" :key="project.id">
        <div class="main grid" >
            <div class="div">
                <img src="https://video.taksecure.ru/wp-content/uploads/2022/02/acb42a1083518e13ca8a3d219c5cc3c61.jpg" alt="" class="img-responsive">
            </div>
            <div class="task">
                <h2 class="h21">Объект:</h2>
                <p>{{project.object}}</p>
                <h2 class="h22">Задача</h2>
                <p v-for="item in project.description" :key="item">
                    {{item}}
                </p>
                <h2 class="h23">Решение:</h2>
                <p>{{project.solution}}</p>
                <h2 class="h24">Результат:</h2>
                <p>{{project.result}}</p>
                <h2 class="h25">Стоимость в других компаниях:</h2>
                <p>{{project.another_price}} рублей</p>
                <h2 class="h26">Стоимость у нас:</h2>
                <p>{{project.our_price}} рублей <span v-show="project.tax">с НДС</span></p>
            </div>
        </div>
        </swiper-slide>

    </swiper>
   </div>
</section>

    <!-- <section id="s7" class="slider s7" style="background: url(https://video.taksecure.ru/wp-content/uploads/2022/02/slider-bg.png) center; -webkit-background-size: cover; background-size: cover;">
    <div class="container">
        <div class="slider-h">
            <h2>РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
        </div>
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>
                <div class="main grid" >
                    
                    <div class="task">
                        <h2 class="h21">Объект:</h2>
                        <p>{{item.object}}</p>
                        <h2 class="h22">Задача</h2>
                        <p>Наблюдение за работой сотрудников, кассовой зоной и входом в сервис. Пресечение махинаций со стороны сотрудников и клиентов.</p>
                        <h2 class="h23">Решение:</h2>
                        <p>4 FullHD видеокамеры, видеоархив с возможностью хранения записей за 14 дней, просмотр с любого устройства - компьютер, телефон, планшет.</p>
                        <h2 class="h24">Результат:</h2>
                        <p>Повышение дисциплины сотрудников. Быстрое решение спорных ситуаций с клиентами. Контроль пробития чеков - значительное увеличение выручки. Система окупилась за 1.5 месяца!</p>
                        <h2 class="h25">Стоимость в других компаниях:</h2>
                        <p>36000 рублей.</p>
                        <h2 class="h26">Стоимость у нас:</h2>
                        <p>34700 рублей с НДС</p>
                        <button data-form="У нас похожая задача:Cеть сервисных центров по ремонту телефонов FastFix." class="button" data-modal=".callback-4">У нас похожая задача</button>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper>
        <div class="s7-slider">
                            <div class="slide">
                    <div class="main grid">
                        <div class="div">
                            <img src="https://video.taksecure.ru/wp-content/uploads/2022/02/acb42a1083518e13ca8a3d219c5cc3c61.jpg" alt="" class="img-responsive">
                        </div>
                        <div class="task">
                                                            <h2 class="h21">Объект:</h2>
                                <p>Cеть сервисных центров по ремонту телефонов FastFix.</p>
                                                            <h2 class="h22">Задача</h2>
                                <p>Наблюдение за работой сотрудников, кассовой зоной и входом в сервис. Пресечение махинаций со стороны сотрудников и клиентов.</p>
                                                            <h2 class="h23">Решение:</h2>
                                <p>4 FullHD видеокамеры, видеоархив с возможностью хранения записей за 14 дней, просмотр с любого устройства - компьютер, телефон, планшет.</p>
                                                            <h2 class="h24">Результат:</h2>
                                <p>Повышение дисциплины сотрудников. Быстрое решение спорных ситуаций с клиентами. Контроль пробития чеков - значительное увеличение выручки. Система окупилась за 1.5 месяца!</p>
                                                            <h2 class="h25">Стоимость в других компаниях:</h2>
                                <p>36000 рублей.</p>
                                                            <h2 class="h26">Стоимость у нас:</h2>
                                <p>34700 рублей с НДС</p>
                                                        <button data-form="У нас похожая задача:Cеть сервисных центров по ремонту телефонов FastFix." class="button" data-modal=".callback-4">У нас похожая задача</button>
                        </div>
                    </div>
                </div>
                            <div class="slide">
                    <div class="main grid">
                        <div class="div">
                            <img src="https://video.taksecure.ru/wp-content/uploads/2022/02/16269519051.jpg" alt="" class="img-responsive">
                        </div>
                        <div class="task">
                                                            <h2 class="h21">Объект:</h2>
                                <p>Ресторан быстрого обслуживания</p>
                                                            <h2 class="h22">Задача</h2>
                                <p>Пресечение махинаций сотрудниками ресторана на кассе, в кухне и в баре, осуществление контроля за персоналом ресторана Пресечение противоправных действий.</p>
                                                            <h2 class="h23">Решение:</h2>
                                <p>8 FullHD камер со звуком в клиентском зале и на кухне. Удаленный доступ и вывод на монитор на кассе.</p>
                                                            <h2 class="h24">Результат:</h2>
                                <p>Прекратились недостачи в кассе значительно повысилась дисциплина и качество работы персонала за счет снижения издержек. Система видеонаблюдения окупила себя менее чем за месяц.</p>
                                                            <h2 class="h25">Стоимость в других компаниях:</h2>
                                <p>66000 рублей.</p>
                                                            <h2 class="h26">Стоимость у нас:</h2>
                                <p>62125 рублей.</p>
                                                        <button data-form="У нас похожая задача:Ресторан быстрого обслуживания" class="button" data-modal=".callback-4">У нас похожая задача</button>
                        </div>
                    </div>
                </div>
                            <div class="slide">
                    <div class="main grid">
                        <div class="div">
                            <img src="https://video.taksecure.ru/wp-content/uploads/2022/02/16269540981.jpg" alt="" class="img-responsive">
                        </div>
                        <div class="task">
                                                            <h2 class="h21">Объект:</h2>
                                <p>Склад напольных покрытий.</p>
                                                            <h2 class="h22">Задача</h2>
                                <p>Предотвращение краж. Разрешение спорных ситуаций при отгрузке. Контроль за качеством работы сотрудников.</p>
                                                            <h2 class="h23">Решение:</h2>
                                <p>Были установлены 7 4Mpix камер высокого разрешения в зонах разгрузки-погрузки. Хранение видеоархива в течение 14 дней и возможность доступа к записям с любых устройств.</p>
                                                            <h2 class="h24">Результат:</h2>
                                <p>В первый же месяц были выявлены сотрудники виновные в кражах и порче имущества. Практически до нуля уменьшилось количество спорных ситуаций при отгрузках. Резко повысилась трудовая дисциплина. За счет сокращения издержек система видеонаблюдения окупила себя уже в первые 2 месяца использования.</p>
                                                            <h2 class="h25">Стоимость в других компаниях:</h2>
                                <p>92000 рублей.</p>
                                                            <h2 class="h26">Стоимость у нас:</h2>
                                <p>88842 рубля с НДС.</p>
                                                        <button data-form="У нас похожая задача:Склад напольных покрытий." class="button" data-modal=".callback-4">У нас похожая задача</button>
                        </div>
                    </div>
                </div>
                            <div class="slide">
                    <div class="main grid">
                        <div class="div">
                            <img src="https://video.taksecure.ru/wp-content/uploads/2022/02/16269563561.jpg" alt="" class="img-responsive">
                        </div>
                        <div class="task">
                                                            <h2 class="h21">Объект:</h2>
                                <p>Стройка загородного дома</p>
                                                            <h2 class="h22">Задача</h2>
                                <p>Контроль за ходом строительства загородного дома. Контроль расхода материала и наличия строителей на объекте. Предотвращение краж.</p>
                                                            <h2 class="h23">Решение:</h2>
                                <p>Были установлены четыре 4Mpix камеры. Видеорегистратор с возможностью online доступа с мобильных устройств. Связь обеспечена через 4G модем. Cистема хранения записей не менее двух недель.</p>
                                                            <h2 class="h24">Результат:</h2>
                                <p>Были пресечены попытки выноса стройматериалов с участка. Общая скорость строительства, за счёт улучшения дисциплины, значительно возросла после установки системы видеонаблюдения. Первоначальные сметы строителей были скорректированы в сторону уменьшения в соответствии с реальными объемами.</p>
                                                            <h2 class="h25">Стоимость в других компаниях:</h2>
                                <p>61000 рублей.</p>
                                                            <h2 class="h26">Стоимость у нас:</h2>
                                <p>56620 рублей.</p>
                                                        <button data-form="У нас похожая задача:Стройка загородного дома" class="button" data-modal=".callback-4">У нас похожая задача</button>
                        </div>
                    </div>
                </div>
                            <div class="slide">
                    <div class="main grid">
                        <div class="div">
                            <img src="https://video.taksecure.ru/wp-content/uploads/2022/02/16269617741.jpg" alt="" class="img-responsive">
                        </div>
                        <div class="task">
                                                            <h2 class="h21">Объект:</h2>
                                <p>Загородный дом.</p>
                                                            <h2 class="h22">Задача</h2>
                                <p>Бюджетная система для видеоконтроля периметра участка и территории окружающей дом. Возможность доступа с мобильных устройств.  Запись звука.</p>
                                                            <h2 class="h23">Решение:</h2>
                                <p>4 FullHD камеры со звуком. Запись на видеорегистратор. Хранение записей 14 дней.</p>
                                                            <h2 class="h24">Результат:</h2>
                                <p>Налажен полный круглосуточный контроль за территорией заказчика. Решена проблема "буйных" соседей.></p>
                                                            <h2 class="h25">Стоимость в других компаниях:</h2>
                                <p>48000 рублей.</p>
                                                            <h2 class="h26">Стоимость у нас:</h2>
                                <p>41582 рубля.</p>
                                                        <button data-form="У нас похожая задача:Загородный дом." class="button" data-modal=".callback-4">У нас похожая задача</button>
                        </div>
                    </div>
                </div>
                            <div class="slide">
                    <div class="main grid">
                        <div class="div">
                            <img src="https://video.taksecure.ru/wp-content/uploads/2022/02/16269627371.jpg" alt="" class="img-responsive">
                        </div>
                        <div class="task">
                                                            <h2 class="h21">Объект:</h2>
                                <p>Система видеонаблюдения перед входом в квартиру</p>
                                                            <h2 class="h22">Задача</h2>
                                <p>Контроль всего пространства этажа перед входом в квартиру. Отсутствие мертвых зон. Запись звука.  Возможность контроля квартиры во время отпуска с планшета или телефона.</p>
                                                            <h2 class="h23">Решение:</h2>
                                <p>Антивандальные купольные FullHD камеры c возможностью доступа с любого устройства и записью звука.</p>
                                                            <h2 class="h24">Результат:</h2>
                                <p>Обеспечена безопасность входа, выхода из квартиры. Пойман "безобразничающий сосед", видеодоказательства переданы в полицию. На этаже перестали проводить время маргинальные личности.</p>
                                                            <h2 class="h25">Стоимость в других компаниях:</h2>
                                <p>39000 рублей.</p>
                                                            <h2 class="h26">Стоимость у нас:</h2>
                                <p>36331 рублей.</p>
                                                        <button data-form="У нас похожая задача:Система видеонаблюдения перед входом в квартиру" class="button" data-modal=".callback-4">У нас похожая задача</button>
                        </div>
                    </div>
                </div>
                    </div>
    </div>
</section> -->
</template>