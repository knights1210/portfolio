<template>
  <div class="container">
    <h2 class="foods-h2 txt-center">Foods</h2>
    <h3 class="foods-h3 txt-center">お食事</h3>
    <p class="foods-p txt-center">種類豊富な料理をご用意しております。</p>
  </div>
</template>

<script>
import splitText from "../../plugins/textSplit";
import ScrollObserver from "../../plugins/scroll";

export default {
  mounted() {
    splitText(".foods-h2");
    ScrollObserver(".char");
  }
  
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
