<template>
  <div class="container">
    <h2 class="container-h2">ABOUT US</h2>
    <hr />
    <div class="about-us">
      <h3 class="about-h3">当館について</h3>
      <p class="about-p">
        当旅館はどこにいても自然を感じられ、<br />都会の喧騒に疲れた方や、リラックスしたい方、ワーケーションなどにもおすすめです
      </p>
        <div class="flex-item">
          <img
            class="flex-img"
            src="@/assets/img/sample2/sample2-1.jpg"
            alt=""
          />
          <div class="flex-ps">
            <h3 class="flex-title">露天風呂</h3>
            <p class="flex-p">露天風呂からは四季折々の景色、迫力のある滝を見ながらゆっくりと入浴が出来ます。泉質は鬼怒川温泉や、道後温泉と同じ単純温泉で、<br>[疲労回復・神経痛・筋肉痛・肩こり・腰痛・ストレス解消・便秘・神経マヒ・リウマチ性疾患・健康増進・美肌効果]など様々な効能があります。</p>
          </div>
        </div>

        <div class="flex-item">
          <img
            class="flex-img"
            src="@/assets/img/sample2/sample2-2.jpg"
            alt="露天風呂"
          />
          <div class="flex-ps">
            <h3 class="flex-title">自然あふれる景色</h3>
            <p class="flex-p">お部屋から見える景色は自然あふれる木々<br>春には桜が咲き、夏は涼しく、秋には紅葉や虫の鳴き声でリラックス出来ます。</p>
          </div>
        </div>

        <div class="flex-item">
          <img
            class="flex-img"
            src="@/assets/img/sample2/sample2-3.jpg"
            alt="お部屋からの景色"
          />
          <div class="flex-ps">
            <h3 class="flex-title">地産地消・新鮮な魚介を使った料理</h3>
            <p class="flex-p">地元で取れたお野菜や、魚介を使用しているので、<br>
            すべてが採れたて新鮮!ここでしか採れない貴重な食材を使ったコースもご用意しております。
            <br><br>
            <span class="marker">※事前にご予約が必要です。</span></p>
          </div>
        </div>

        <div class="flex-item">
          <img
            class="flex-img"
            src="@/assets/img/sample2/sample2-4.jpg"
            alt=""
          />
          <div class="flex-ps">
            <h3 class="flex-title">洋室もご用意しております</h3>
            <p class="flex-p">海外からのお客様や、布団では寝られないお客様に合わせて洋室もご用意しております。</p>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
.marker {
  background: linear-gradient(transparent 70%, #ee9e9e 90%);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
  & .container-h2 {
    text-align: center;
  }
  & hr {
    margin: 10px auto;
  }
  & .about-us {
    & .about-h3 {
      text-align: center;
      background-color: black;
      color: white;
    }
    & .about-p {
      text-align: center;
      padding: 10px;
    }
    & .flex-item {
      display: flex;
      margin: 20px;
      border: 1px solid black;
      &:nth-child(2n) {
        flex-direction: row-reverse;
      }
      & .flex-img {
        width: 50%;
      }
      & .flex-ps {
        width: 100vw;
        & .flex-title {
          
          text-align: center;
          background-color: black;
          color: white;
          font-weight: normal;
        }
        & .flex-p {
          padding: 20px;
        }
      }
    }
  }
}
</style>
