<template>
  <div class="container">
    <h2 class="foods-h2 txt-center">Foods</h2>
    <h3 class="foods-h3 txt-center">お食事</h3>
    <p class="foods-p txt-center">
      種類豊富な料理をご用意しております。<br />
      どのお料理を選んでいただいても新鮮な魚介が味わえます。
    </p>

    <div class="flex-item">
      <img
        class="flex-img"
        src="@/assets/img/sample2/foods/foods1.png"
        alt=""
      />
      <div class="flex-ps">
        <h3 class="flex-title txt-center">舟盛り</h3>
        <p class="flex-p">
          近海でとれた鯛をはじめ、伊勢海老・アワビ・ヤリイカの舟盛りとなります。<br />今朝水揚げされたものを使用しているので新鮮な魚介を味わえます。<br />
          さらにワサビや醤油にもこだわっております。
        </p>
      </div>
    </div>

    <hr />

    <div class="flex-item">
      <img
        class="flex-img"
        src="@/assets/img/sample2/foods/foods2.png"
        alt=""
      />
      <div class="flex-ps">
        <h3 class="flex-title txt-center">しゃぶしゃぶ</h3>
        <p class="flex-p">
          甘みの強い国産豚を、昆布だしで頂くしゃぶしゃぶになります。<br />
          他にもお刺身や季節に合わせた炊き込みご飯、副菜をご用意。
        </p>
      </div>
    </div>

    <hr />

    <div class="flex-item">
      <img
        class="flex-img"
        src="@/assets/img/sample2/foods/foods3.jpg"
        alt=""
      />
      <div class="flex-ps">
        <h3 class="flex-title txt-center">A5ランク和牛とお刺身</h3>
        <p class="flex-p">
          ストレスなく育った牛は上質で上品な味わい。<br />
          お好みの焼き加減でお召し上がりください。<br />
          釜で炊いたご飯も絶品です。お刺身やお肉とご一緒に。
        </p>
      </div>
    </div>

    <hr />

    <div class="flex-item">
      <img
        class="flex-img"
        src="@/assets/img/sample2/foods/foods4.jpg"
        alt=""
      />
      <div class="flex-ps">
        <h3 class="flex-title txt-center">海の幸盛り合わせ</h3>
        <p class="flex-p">
          新鮮な魚介を寿司・焼き・天ぷら等色んな味わい方が出来ます。<br />
          当旅館イチオシのお料理です！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import splitText from "../../plugins/textSplit";
import ScrollObserver from "../../plugins/scroll";

export default {
  mounted() {
    splitText(".foods-h2");
    ScrollObserver(".char");
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: white;
  text-shadow: #fc0 1px 0 5px;
  max-width: 1100px;
  margin: 0 auto;
  & .foods-h2 {
    & ::v-deep .char {
      display: inline-block;
      opacity: 0;
      &.inview {
        animation: drop 2s ease forwards;
      }
      @for $i from 1 through 5 {
        &.inview:nth-child(#{$i}) {
          animation-delay: $i * 0.08s;
        }
      }
    }
  }
  & .foods-h3 {
    margin-bottom: 0.8rem;
  }
  & .foods-p {
    font-size: 0.9rem;
  }
  & .flex-item {
    display: flex;
    padding: 20px;
    margin-bottom: 10px;
    & .flex-img {
      width: 50%;
    }
    & .flex-ps {
      width: 50%;

      & .flex-title {
        border-bottom: 1px solid white;
        margin: 0 auto;
        width: 80%;
        padding: 0.5rem;
      }
      & .flex-p {
        font-size: 0.9rem;
        padding: 10px;
        width: 80%;
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: 600px) {
  .container {
    .flex-item {
      flex-direction: column;
      & .flex-img {
        width: 100%;
      }
      & .flex-ps {
        width: 100%;
        & .flex-title,
        & .flex-p {
          width: 100%;
        }
      }
    }
  }
}

@keyframes drop {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  20% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
    text-decoration: underline;
  }
}
</style>
