<template>
  <div class="component1">
    <div>
      <v-carousel
        cycle
        width="100%"
        hide-delimiters
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">SAMPLE {{ i + 1 }}</div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>

    <main>
      <h2>PHOTO GALLERY</h2>
      <div class="main-content">
        <template v-for="(content, i) in contents">
          <div class="card" :key="i">
            <div class="item-name">{{ content.name }}</div>
            <div class="img-box">
              <img :src="content.src" :alt="content.name" />
            </div>
            <div class="details">
              <p>
                {{ content.detail }}
              </p>
              <p>{{ content.hanakotoba }}</p>
            </div>
          </div>
        </template>
      </div>
    </main>
    <gridLayout />
  </div>
</template>

<script>
import gridLayout from "../components/grid.vue";
export default {
  
  methods: {
    
  },
  data() {
    return {
      items: [
        { src: require("@/assets/img/slider_item/bayside_place.jpg") },
        { src: require("@/assets/img/slider_item/tower.jpg") },
        { src: require("@/assets/img/slider_item/suisyagoya.jpg") },
        { src: require("@/assets/img/slider_item/miniture.jpg") },
        { src: require("@/assets/img/slider_item/momiji.jpg") },
      ],
      contents: [
        {
          name: "キバナコスモス",
          src: require("@/assets/img/card_item/kibanacosmos.jpg"),
          detail:
            "キバナコスモスは、キク科コスモス属の多年草または一年草[1]。コスモスの名を冠するが、オオハルシャギクとは同属別種にあたり互いを交配する事は出来ない。",
          hanakotoba: "花言葉は「幼い恋心」",
        },
        {
          name: "木苺",
          src: require("@/assets/img/card_item/kiichigo.jpg"),
          detail:
            "キイチゴ（木苺、懸鉤子、Bramble）と総称される。ラズベリー(Raspberry)、ブラックベリー (Blackberry)などの栽培種群に代表される、数十〜数百種（研究者により大きく違う）が属する。",
        },
        {
          name: "ムラサキカタバミ",
          src: require("@/assets/img/card_item/murasakikatabami.jpg"),
          detail:
            "ムラサキカタバミは、カタバミ科カタバミ属の植物。南アメリカ原産であるが、江戸時代末期に観賞用として導入されて以降、日本に広く帰化している。",
          hanakotoba: "花言葉は「輝く心」「心の輝き」「喜び」",
        },
        {
          name: "ランタナ",
          src: require("@/assets/img/card_item/rantana.jpg"),
          detail:
            "ランタナはクマツヅラ科の常緑小低木。中南米が原産。観賞用に栽培される。和名はシチヘンゲ（七変化）。",
          hanakotoba: "花言葉は「心変わり」「合意」「協力」「厳格」",
        },
        {
          name: "ツユクサ",
          src: require("@/assets/img/card_item/tsuyukusa.jpg"),
          detail:
            "ツユクサは、ツユクサ科ツユクサ属の一年生植物。畑の隅や道端で見かけることの多い雑草である。",
          hanakotoba: "花言葉は「尊敬」「なつかしい関係」",
        },
        {
          name: "ヒャクニチソウ",
          src: require("@/assets/img/card_item/hyakunichisou.jpg"),
          detail:
            "ヒャクニチソウはキク科の植物の1つ。花が美しく、また花弁が丈夫で色あせしにくいのが特徴で、花壇に栽培され、また切り花として鑑賞される。",
          hanakotoba: "花言葉は「幸福」",
        },
        {
          name: "バーベナ(ピンク)",
          src: require("@/assets/img/card_item/verbena-pink.jpg"),
          detail:
            "バーベナはクマツヅラ科クマツヅラ属の総称。約250種の一年草および多年草を含む。ヴァーベナと表記されたり、ビジョザクラなどの名でも呼ばれる。",
          hanakotoba: "花言葉は「家族の和合」",
        },
        {
          name: "キクイモ?",
          src: require("@/assets/img/card_item/yellow.jpg"),
          detail:
            "キクイモ（菊芋、学名：Helianthustuberosus）は、キク科ヒマワリ属の多年草。",
          hanakotoba: "花言葉は「美徳」「気取らぬ愛らしさ」「恵み」",
        },
      ],
    };
  },
  name: "Component1",
  components: {
    gridLayout,
  },
};
</script>

<style lang="scss" scoped>
@import "~hooper/dist/hooper.css";
* {
  box-sizing: border-box;
}

.component1 {
  max-width: 1100px;
  margin: 58px auto;
  & h2 {
    text-align: center;
  }
  & main {
    & h2 {
      background-color: rgb(32, 197, 148);
      padding: 10px;
      font-family: "Itim", cursive;
      text-shadow: 1px 1px 0 white;
    }
    & .main-content {
      display: flex;
      padding: 10px;
      flex-wrap: wrap;
      & .card {
        background-color: white;
        border: 1px solid rgb(32, 197, 148);
        width: 200px;
        height: 400px;
        margin: 5px auto;
        transition: all 0.5s 0s ease;

        &:hover {
          border: 1px solid rgb(59, 86, 136);
        }
        &:hover {
          .item-name {
            background-color: rgb(59, 86, 136);
          }
        }
        & .item-name {
          background-color: rgb(32, 197, 148);
          color: white;
          height: auto;
          text-align: center;
          padding: 5px;
          transition: all 0.5s 0s ease;
        }
        & .img-box {
          width: 180px;
          height: 180px;
          margin: 10px auto;
          overflow: hidden;
          & img {
            // width: 100%;
            height: 100%;
            transition: all 0.5s 0s ease;
            &:hover {
              transform: scale(1.1);
              opacity: 0.7;
            }
          }
        }
        p {
          padding: 5px;
          letter-spacing: 1px;
          text-align: center;
          margin: 0 auto;
          font-size: 12px;
        }
      }
    }
  }
  .hooper-slide {
    background-color: #62caaa;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 2px solid #fff;
    font-size: 30px;
    border-radius: 10px;
  }
  .display-3 {
    text-shadow: 1px 1px 0 #000;
  }
}

@media (max-width: 600px) {
  .component1 {
    margin: 0 auto;
  }
}
</style>
