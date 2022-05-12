<script>
export default {
  name: 'benefits-item',
};
</script>
<template>
    <footer class="footer grid">
    <div>
        <p class="text">
            ООО «Видео-инжиниринг» </p>
    </div>
    <div style="text-align: right">
        <p class="text">
             Есть вопросы? Звоните:<br>
<a :href="$store.getters.phoneHref">{{$store.state.phoneNumber}}</a><br>
<a :href="$store.getters.mailTo">{{$store.state.email}}</a><br>        </p>
    </div>
</footer>
</template>