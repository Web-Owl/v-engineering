<script>
export default {
  name: "offer-item",
};
</script>
<template>
  <section class="section-problem">
    <div class="container grid">
      <div class="problem_item">
        <h2>
          Вы здесь, потому что хотите <span>решить одну из этих проблем:</span>
        </h2>
      </div>
      <div class="problem_item problem_item-2 grid">
        <img src="@/assets/img/offer/sp1.png" class="img-responsive" alt="" />
        <img src="@/assets/img/offer/sp2.png" class="img-responsive" alt="" />
        <img src="@/assets/img/offer/sp3.png" class="img-responsive" alt="" />
        <h2>
          Повысить уровень <br />
          безопасности
        </h2>
        <h2>
          Контролировать происходящее <br />
          на охраняемом объекте
        </h2>
        <h2 class="h2">
          Предотвратить инцидент или <br />
          помочь в его расследовании.<span>(Кража, недостача и пр.)</span>
        </h2>
      </div>
      <div class="problem_item">
        <h2>И мы решаем эти проблемы!</h2>
      </div>
    </div>
    <button class="scroll-btn">
      <img src="@/assets/img/icons/scroll-btn.png" alt="pic" />
    </button>
  </section>
</template>