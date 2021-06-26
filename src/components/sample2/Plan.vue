<template>
  <div class="container">
    <h2 class="plan-h2 txt-center">Plan</h2>
    <h3 class="plan-h3 txt-center">プランのご案内</h3>
    <p class="plan-p txt-center">
      シンプルなプランからお得なオプションなどご用意しております。
    </p>
    <div class="big-bg">
      <div class="bgimg-opc pd-10">
        <h3 class="plan-h3 txt-center pd-10">基本プランの一覧</h3>
        <table>
          <tr>
            <th></th>
            <th>料金</th>
            <th>お食事</th>
            <th>お部屋</th>
          </tr>
          <tr>
            <th>基本プラン１</th>
            <td>1名様:16,000円より</td>
            <td>2食付き(夕食・朝食)</td>
            <td>1～2名様／和室</td>
          </tr>
          <tr>
            <th>基本プラン２</th>
            <td>1名様:20,000円より</td>
            <td>2食付き(夕食・朝食)</td>
            <td>1～2名様／洋室</td>
          </tr>
          <tr>
            <th>基本プラン３</th>
            <td>1名様:16,000円より</td>
            <td>2食付き(夕食・朝食)</td>
            <td>2～4名様／和室</td>
          </tr>
        </table>

        <h3 class="plan-h3 txt-center">お得なオプション一覧</h3>
        <table>
          <tr>
            <th></th>
            <th>割引</th>
            <th>追加</th>
          </tr>
          <tr>
            <th>オプション１</th>
            <td>2名様ご予約で◯%OFF</td>
            <td>+1名様毎に◯%OFF</td>
          </tr>
          <tr>
            <th>オプション２</th>
            <td>2日～宿泊ご予約で◯%OFF</td>
            <td>+1日毎に◯%OFF</td>
          </tr>
          <tr>
            <th>オプション３</th>
            <td>早期ご予約で◯%OFF</td>
            <td>◯◯前で最大◯%OFF</td>
          </tr>
        </table>
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
      threshold: 0.3,
    };
    splitText(".plan-h2");
    ScrollObserver(".char, .flex-item", options);
  },
};
</script>

<style lang="scss" scoped>
.pd-10 {
  padding: 10px;
}
table {
  margin: 1rem auto;
  border-collapse: collapse;
}
th,
td {
  background: rgba(0, 0, 0, 0.788);
  padding: 0.5rem;
  border: 1px solid white;
  font-size: 0.9rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  color: white;
  text-shadow: #fc0 1px 0 5px;
  & .plan-h2 {
    & ::v-deep .char {
      display: inline-block;
      opacity: 0;
      &.inview {
        animation: drop 2s ease forwards;
        @for $i from 1 through 5 {
          &.inview:nth-child(#{$i}) {
            animation-delay: $i * 0.08s;
          }
        }
      }
    }
  }
  & .plan-h3 {
    margin-bottom: 0.8rem;
  }
  & .plan-p {
    font-size: 0.9rem;
  }
  & .big-bg {
    // background: url("/Plan-bg.jpg") center center / cover no-repeat;
    animation: bganime 20s ease infinite;
    & .bgimg-opc {
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(1.5px);
    }
  }
}
@keyframes bganime {
  0%, 100% {
    background: url("/bgimg1.jpg") center center / cover no-repeat;
  }
  25% {
    background: url("/bgimg2.jpg") center center / cover no-repeat;
  }
  50% {
    background: url("/bgimg3.jpg") center center / cover no-repeat;
  }
  75% {
    background: url("/bgimg4.jpg") center center/ cover no-repeat;
  }
}

@keyframes drop {
  0% {
    transform: translateY(-30px);
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
