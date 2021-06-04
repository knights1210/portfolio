<template>
  <div class="container">
    <h2 class="onsen-h2">Onsen</h2>
    <h3 class="onsen-h3">温泉</h3>
    <p class="onsen-p">当旅館の温泉をご紹介いたします。</p>
    <p class="onsen-p underline">当旅館の温泉の効能<br>
    疲労回復・神経痛・筋肉痛・肩こり・腰痛・ストレス解消・便秘・神経マヒ・リウマチ性疾患・健康増進・美肌効果</p>
    <div class="onsen-item">
      <img src="@/assets/img/sample2/onsen/onsen1.jpg" alt="">
      <p class="onsen-item-p">大自然を感じながら楽しむ露天風呂。<br>
      四季を感じながらゆっくり出来ます。<br>
      春には桜、夏には豊かな緑、秋には紅葉、冬には雪...。<br>
      </p>
    </div>
    <div class="onsen-item">
      <img src="@/assets/img/sample2/onsen/onsen2.jpg" alt="">
      <p class="onsen-item-p"></p>
    </div>
    <div class="onsen-item">
      <img src="@/assets/img/sample2/onsen/onsen3.jpg" alt="">
      <p class="onsen-item-p"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.underline {
  text-decoration: underline;
}
.container {
  color: white;
  text-shadow: #fc0 1px 0 5px;
  max-width: 1100px;
  margin: 0 auto;
  & .onsen-h2 {
    text-align: center;
    text-decoration: underline;
  }
  & .onsen-h3 {
    text-align: center;
    margin-bottom: 10px;
  }
  & .onsen-p {
    text-align: center;
  }

  & .onsen-item {
    display: flex;
    padding: 20px;
    margin-bottom: 10px;
    & img {
      width: 50%;
    }
    & .onsen-item-p {
      font-size: 0.9rem;
      padding: 10px;
    }
  }
}

@media (max-width: 600px) {
  .container {

  .onsen-item {
    flex-direction: column;
    & img {
      width: 100%;
    }
  }
  }
}
</style>
