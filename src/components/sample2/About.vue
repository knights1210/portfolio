<template>
  <div class="container">
    <h2 class="about-h2">ABOUT US</h2>

    <h3 class="about-h3">当館について</h3>
    <p class="about-p">
      当旅館はどこにいても自然を感じられ、<br />都会の喧騒に疲れた方や、リラックスしたい方、ワーケーションなどにもおすすめです
    </p>
    <p class="about-p">
      <small
        >※当館は全室、空調設備完備・光触媒コーティングによる抗菌にて
        感染症対策を行っております。</small
      >
    </p>
    <div class="flex-item slide">
      <img class="flex-img" src="@/assets/img/sample2/sample2-1.jpg" alt="" />
      <div class="flex-ps">
        <h3 class="flex-title">露天風呂</h3>
        <p class="flex-p">
          露天風呂からは四季折々の景色、迫力のある滝を見ながらゆっくりと入浴が出来ます。泉質は鬼怒川温泉や、道後温泉と同じ単純温泉で、<br /><strong
            >[疲労回復・神経痛・筋肉痛・肩こり・腰痛・ストレス解消・便秘・神経マヒ・リウマチ性疾患・健康増進・美肌効果]</strong
          >など様々な効能があります。
        </p>
      </div>
    </div>

    <div class="flex-item slide">
      <img
        class="flex-img"
        src="@/assets/img/sample2/sample2-2.jpg"
        alt="露天風呂"
      />
      <div class="flex-ps">
        <h3 class="flex-title">自然あふれる景色</h3>
        <p class="flex-p">
          お部屋から見える景色は自然あふれる木々<br />春には桜が咲き、夏は涼しく、秋には紅葉や虫の鳴き声でリラックス出来ます。
        </p>
      </div>
    </div>

    <div class="flex-item slide">
      <img
        class="flex-img"
        src="@/assets/img/sample2/sample2-3.jpg"
        alt="お部屋からの景色"
      />
      <div class="flex-ps">
        <h3 class="flex-title">地産地消・新鮮な魚介を使った料理</h3>
        <p class="flex-p">
          地元で取れたお野菜や、魚介を使用しているので、<br />
          すべてが採れたて新鮮!ここでしか採れない貴重な食材を使ったコースもご用意しております。
          <br /><br />
          <span class="marker">※事前にご予約が必要です。</span>
        </p>
      </div>
    </div>

    <div class="flex-item slide">
      <img class="flex-img" src="@/assets/img/sample2/sample2-4.jpg" alt="" />
      <div class="flex-ps">
        <h3 class="flex-title">洋室もご用意しております</h3>
        <p class="flex-p">
          海外からのお客様や、布団では寝られないお客様に合わせて洋室もご用意しております。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {};
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "-100px",
      threshold: 0,
    };

    const flexItems = document.querySelectorAll(".flex-item, small, .marker");
    flexItems.forEach((target) => this.onIntersect(target, options));
  },
  methods: {
    onIntersect(target, options) {
      const observer = new IntersectionObserver(this.addClass, options);
      observer.observe(target);
    },
    addClass(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("inview");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.marker {
  background: linear-gradient(transparent 90%, rgb(255, 130, 130) 10%);
  background-repeat: no-repeat;
  background-size: 0%;
  background-position: bottom left;
  transition: all 1.7s ease;
  transition-delay: 1.1s;
  &.inview {
    background-size: 100%;
  }
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  color: white;
  text-shadow: #fc0 1px 0 5px;
  & .about-h2 {
    text-align: center;
    text-decoration: underline white;
  }
  & hr {
    margin: 10px auto;
  }

  & .about-h3 {
    text-align: center;
    margin-bottom: 10px;
  }
  & .about-p {
    text-align: center;
    & small {
      background: linear-gradient(transparent 90%, #ff0000 10%);
      background-size: 0;
      background-repeat: no-repeat;
      background-position: bottom left;
      transition: all 1.5s ease;
      text-shadow: black 1px 0 5px;
      color: lightgray;
      &.inview {
        background-size: 100%;
      }
    }
  }
  & .flex-item {
    display: flex;
    padding: 20px;
    overflow: hidden;
    opacity: 0;
    &.inview {
      animation-name: flex-show;
      animation-duration: 1.6s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    &.slide {
      position: relative;
      overflow: hidden;
      &::after {
        position: absolute;
        content: "";
        background-color: black;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
      }
      &.inview {
        &::after {
          opacity: 1;
          animation-name: slide;
          animation-duration: 1.6s;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }
      }
    }
    &:nth-child(2n + 1) {
      & .flex-title {
        margin: 1rem;
        text-align: center;
        font-weight: normal;
        border-bottom: 1px solid white;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 15px;
          height: 6px;
          transform: rotate(-40deg);
          border-top: 1px solid white;
          animation: bounce 1s ease infinite;
        }
        &::after {
          content: "";
          position: absolute;
          border-bottom: 1px solid white;
          width: 1rem;
          bottom: -1px;
          left: 0;
          animation: bounce2 1s ease infinite;
        }
      }
    }
    &:nth-child(2n) {
      flex-direction: row-reverse;
      & .flex-title {
        margin: 1rem;
        border-bottom: 1px solid white;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 15px;
          height: 6px;
          transform: rotate(40deg);
          border-top: 1px solid white;
          animation: bounce-l 1s ease infinite;
        }
        &::after {
          content: "";
          position: absolute;
          border-bottom: 1px solid white;
          width: 1rem;
          bottom: -1px;
          right: 0;
          animation: bounce-l2 1s ease infinite;
        }
      }
      &.inview {
        &::after {
          opacity: 1;
          animation-name: slide;
          animation-duration: 1.6s;
          animation-timing-function: ease-in-out;
          animation-direction: reverse;
          animation-fill-mode: forwards;
        }
      }
    }
    & .flex-img {
      width: 50%;
    }
    &.inview .flex-img {
      opacity: 1;
      animation-name: img-show;
      animation-duration: 1.6s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
    & .flex-ps {
      width: 100%;
      & .flex-title {
        text-align: center;
        font-weight: normal;
        border-bottom: 1px solid white;
      }
      & .flex-p {
        font-size: 0.9rem;
        padding: 20px;
      }
    }
  }
}

@keyframes slide {
  0% {
    transform-origin: left;
    transform: scaleX(0);
  }
  50% {
    transform-origin: left;
    transform: scaleX(1);
  }
  50.1% {
    transform-origin: right;
    transform: scaleX(1);
  }
  100% {
    transform-origin: right;
    transform: scaleX(0);
  }
}

@keyframes img-show {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
  }
}
@keyframes flex-show {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(0) rotate(-40deg);
  }
  10% {
    transform: translateX(-10px) rotate(-40deg);
  }
}
@keyframes bounce2 {
  0%,
  100% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-10px);
  }
}
@keyframes bounce-l {
  0%,
  100% {
    transform: translateX(0) rotate(40deg);
  }
  10% {
    transform: translateX(10px) rotate(40deg);
  }
}
@keyframes bounce-l2 {
  0%,
  100% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(10px);
  }
}

@media (max-width: 600px) {
  .container {
    & .flex-item {
      flex-direction: column;
      .flex-img {
        width: 100%;
      }
      &:nth-child(2n) {
        flex-direction: column;
      }
    }
  }
  .flex-title::before,
  .flex-title::after {
    display: none;
  }
}
</style>
