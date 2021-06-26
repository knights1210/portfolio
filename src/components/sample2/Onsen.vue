<template>
  <div class="container">
    <h2 class="onsen-h2 txt-center">Onsen</h2>
    <h3 class="onsen-h3 txt-center">温泉</h3>
    <p class="onsen-p txt-center">当旅館の温泉をご紹介いたします。</p>
    <p class="onsen-p txt-center">
      当旅館の温泉の効能<br />
      <span class="marker"
        >疲労回復・神経痛・筋肉痛・肩こり・腰痛・ストレス解消・便秘・神経マヒ・リウマチ性疾患・健康増進・美肌効果</span
      >
    </p>
    <div class="onsen-item">
      <img src="@/assets/img/sample2/onsen/onsen1.jpg" alt="" />
      <div class="onsen-item-ps">
        <h3 class="onsen-item-title underline txt-center">露天風呂</h3>
        <p class="onsen-item-p">
          大自然を感じながら楽しむ露天風呂。<br />
          春には桜、夏には豊かな緑、秋には紅葉、冬には雪化粧された山々...。<br />
          四季を感じながらゆっくり出来ます。<br />
        </p>
      </div>
    </div>
    <div class="onsen-item">
      <img src="@/assets/img/sample2/onsen/onsen2.jpg" alt="" />
      <div class="onsen-item-ps">
        <h3 class="onsen-item-title underline txt-center">
          各お部屋設置の露天風呂
        </h3>
        <p class="onsen-item-p">
          各お部屋にもある露天風呂。<br />
          源泉から引いたもので、お部屋から出ずに<br />
          檜風呂で温泉を楽しむことも出来ます。<br />
          こちらも大自然を感じながら入浴できます。
        </p>
      </div>
    </div>
    <div class="onsen-item">
      <img src="@/assets/img/sample2/onsen/onsen3.jpg" alt="" />
      <div class="onsen-item-ps">
        <h3 class="onsen-item-title underline txt-center">足湯</h3>
        <p class="onsen-item-p">
          足湯もご用意しております。<br />
          疲れた足を癒すことが出来ます。<br />
          春にはご覧の通り花見をしながら足湯を楽しめます。
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
    const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
    splitText(".onsen-h2");
    ScrollObserver(".onsen-item, .marker, .char", options);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.marker {
  font-size: 0.8rem;
  background: linear-gradient(transparent 90%, #fc0 10%);
  background-repeat: no-repeat;
  background-size: 0;
  background-position: bottom left;
  transition: all 1.7s ease;
  &.inview {
    background-size: 100%;
  }
}

.underline {
  text-decoration: underline;
}

.container {
  color: white;
  text-shadow: #fc0 1px 0 5px;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;

  & .onsen-h2 {
    
    & ::v-deep .char {
      display: inline-block;
      opacity: 0;
      &.inview {
        animation: drop 2s ease forwards;
      }
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: $i * 0.08s;
        }
      }
    }
  }

  & .onsen-h3 {
     margin-bottom: 0.8rem;
  }
  & .onsen-p {
    font-size: 0.9rem;
  }

  & .onsen-item {
    display: flex;
    padding: 20px;
    margin-bottom: 10px;
    opacity: 0;
    transition: all 0.7s ease-in-out;
    transform: translateX(50px);
    &.inview {
      opacity: 1;
      transform: translateX(0px);
    }
    & img {
      width: 50%;
    }
    & .onsen-item-ps {
      width: 100%;
      & .onsen-item-title {
        border-bottom: 1px solid white;
        margin: 0 auto;
        width: 80%;
        padding: 0.5rem;
      }
      & .onsen-item-p {
        width: 80%;
        margin: 0 auto;
        font-size: 0.9rem;
        padding: 10px;
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
