<script>
export default {
  name: 'nav-item'
}
</script>
<template>
    <nav class="nav" style="display: none">
            <ul data-type="navbar" class="sf-menu">
                <li>
                    <a class="nav-link" href="#s3">С кем работаем</a>
                </li>
                <li>
                    <a class="nav-link" href="#s4">Калькулятор</a>
                </li>
                <li>
                    <a class="nav-link" href="#s6">Ваши выгоды</a>
                </li>
                <li>
                    <a class="nav-link" href="#s7">Реализованные проекты</a>
                </li>
                <li>
                    <a class="nav-link" href="#s10">Как нас найти</a>
                </li>
                <li>
                    <a class="nav-link" href="#s8">Камера Онлайн</a>
                </li>
                <li class="lasts">
                    <a :href="$store.getters.phoneHref">{{$store.state.phoneNumber}}</a>
                </li>
            </ul>
        </nav>
        <nav id="navbar" class="navbar">
            <div class="container grid nav-menu-bar">

                <div class="menu grid">
                    <img src="https://video.taksecure.ru/wp-content/uploads/2022/03/logo-alt.png" alt="" class="logo img-responsive">
                    <a class="nav-link" href="#s3">С кем работаем</a>
                    <a class="nav-link" href="#s4">Калькулятор</a>
                    <a class="nav-link" href="#s6">Ваши выгоды</a>
                    <a class="nav-link" href="#s7">Реализованные проекты</a>
                    <a class="nav-link" href="#s10">Как нас найти</a>
                    <a class="nav-link" href="#s8">Камера Онлайн</a>
                </div>
                <div class="contacts">
                    <a :href="$store.getters.phoneHref">
                        <span>Получить консультацию</span>
                        {{$store.state.phoneNumber}}
                    </a>
                </div>
            </div>
        </nav>
</template>