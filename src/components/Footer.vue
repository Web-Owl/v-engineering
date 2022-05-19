<script>
import {mapGetters} from 'vuex';
export default {
    
  name: 'footer-item',
  computed: {
    ...mapGetters(
        {
            phoneHref: "projects/phoneHref",
            mailTo: "projects/mailTo"
        }
    )
}
};
</script>
<template>
    <footer class="footer grid">
    <div>
        <p class="text">ООО «Видео-инжиниринг»</p>
        <p class="text">{{$store.state.projects.address}}</p>
            
    </div>
    <div style="text-align: right">
        <p class="text">
             Есть вопросы? Звоните:<br>

<a :href="phoneHref">{{$store.state.projects.phoneNumber}}</a><br>
<a :href="mailTo">{{$store.state.projects.email}}</a><br>
 </p>
    </div>
</footer>
</template>