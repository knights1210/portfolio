<template>
  <div class="container">
    <ol>
      <li>2020/10頃 学習スタート</li>
      <ul>
        <li>
          CODEPREPやドットインストール、Progateで基礎を勉強
        </li>
      </ul>
      <li>書籍を購入しHTML・CSSを勉強開始</li>
      <ul>
        <li>シンプルなwebページをコーディング</li>
        <li>XAMPPを使ってWordPressのブログを作成</li>
        <li>WordPressで仕様するPHPを勉強開始</li>
      </ul>
      <li>DOM制御のためにJavascriptを勉強開始</li>
      <ul>
        <li>Udemyで学習開始</li>
        <li>ReactやVueを知り、勉強開始</li>
      </ul>
    </ol>
    <h2 class="learn-section"><span>学習中の言語</span></h2>
    <div class="items">
      <template v-for="(learn, i) in learns">
        <v-hover :key="i">
          <template v-slot:default="{ hover }">
            <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
              <div class="learn">
                <img :src="learn.src" :alt="learn.name" />
                <p>{{ learn.name }}</p>
                <p>{{ learn.comments }}</p>
              </div>
            </v-card>
          </template>
        </v-hover>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPage",
  data() {
    return {
      learns: [
        {
          name: "Vue",
          src: "Vue.png",
          comments: "Udemyから学習しました。ProtfolioもVueで作成しています。",
        },
        {
          name: "CSS 3",
          src: "CSS3.png",
          comments:
            "書籍・Youtube・Udemy ドットインストール・Progate CODEPREPから学習しました",
        },
        {
          name: "HTML 5",
          src: "HTML5.png",
          comments:
            "書籍・Youtube・Udemyドットインストール・Progate CODEPREPから学習しました",
        },
        {
          name: "Javascript",
          src: "Javascript.png",
          comments:
            "Youtube・Udemy ドットインストール・Progate CODEPREPから学習しました",
        },
        {
          name: "PHP",
          src: "PHP.png",
          comments:
            "書籍・Udemy ドットインストール・Progate CODEPREPから学習しました。DBを使ったシンプルなアプリも作成しました。",
        },
        {
          name: "React",
          src: "React.png",
          comments: "Udemy Progate CODEPREPから学習しました",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  padding: 70px 20px;
  margin: 0 auto;
  text-align: center;
  background: #222;
  & ol {
    text-align: left;
    line-height: 2;
    background: radial-gradient(#888, #444);
    color: white;
    padding: 1em;
    margin: 1em 0;
    list-style: decimal inside;
  }
  & .learn-section {
    font-weight: normal;
    width: 200px;
    height: 30px;
    color: white;
    display: inline-block;
    position: relative;
    padding: 0.5em 1em;
    &::after,
    &::before {
      position: absolute;
      content: "";
      top: -3px;
      right: -3px;
      left: -3px;
      bottom: -3px;
      background: linear-gradient(-25deg, #00ccff, transparent, #1aff22);
      filter: blur(5px);
    }
    & span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: black;
      z-index: 10;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -50%;
        width: 100%;
        height: 100%;
        background: rgba(50, 50, 50, 0.8);
        transform: skew(-25deg);
      }
    }
  }
  & h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    z-index: 10;
    & .v-card {
      margin-bottom: 10px;
      & .learn {
        margin-bottom: 10px;
        text-align: center;
        width: 250px;
        height: 350px;
        & img {
          margin-top: 20px;
          height: 150px;
          background-color: white;
        }
      }
    }
  }
}

@media (max-width: 600px) {
}
</style>
