<script>

export default {
    props:[
        'phoneHref',
        'mailTo'
    ],
  name: 'footer-item',
  
};
</script>
<template>
    <footer class="footer grid">
    <div>
        <p class="text">ИП Сочненков</p>
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