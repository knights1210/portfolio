<template>
  <div class="container">
    <h2 class="container-h2">お部屋のご案内</h2>
    <h3 class="container-h3">当旅館のお部屋</h3>
    <p class="container-p">当旅館のお部屋の一部をご紹介</p>
    <p class="container-p">
      <small
        >※当館は全室、空調設備完備・光触媒コーティングによる抗菌にて
        感染症対策を行っております。</small
      >
    </p>

    <div class="room-item wa">
      <div class="bgimg-opc">
        <h3 class="room-title">和室の間</h3>
        <div class="room-imgs">
          <img
            @click="showLightbox(0)"
            class="room-img"
            src="@/assets/img/sample2/room/room-wa1.jpg"
            alt="和室１"
          />
          <img
            @click="showLightbox(1)"
            class="room-img"
            src="@/assets/img/sample2/room/room-wa2.jpg"
            alt="和室２"
          />
          <img
            @click="showLightbox(2)"
            class="room-img"
            src="@/assets/img/sample2/room/room-wa3.jpg"
            alt="和室３"
          />
        </div>
          <LightBox
            ref="lightbox"
            :media="images"
            :showLightBox="false"
          ></LightBox>
        <p class="room-item-p">
          和室の間では、実家のようにくつろげる空間をご提供。<br />
          和室の良さを現代の技術を組合わせて快適に過ごしていただけるお部屋になっております。<br />
          冬には嬉しいコタツも利用可能です。
        </p>
        <p class="room-item-p">
          定員<br />
          ２～４名様
        </p>
        <p class="room-item-p">
          設備等<br />
          テレビ／冷蔵庫／冷暖房／床暖房／空気清浄機／お風呂／洗面台／トイレ
        </p>
      </div>
    </div>

    <div class="room-item yo">
      <div class="bgimg-opc">
        <h3 class="room-title">洋室の間</h3>
        <div class="room-imgs-y">
          <img
            @click="showLightbox(3)"
            class="room-img-y"
            src="@/assets/img/sample2/room/room-y1.jpg"
            alt="洋室１"
          />
          <img
            @click="showLightbox(4)"
            class="room-img-y"
            src="@/assets/img/sample2/room/room-y2.jpg"
            alt="洋室２"
          />
        </div>
        <p class="room-item-p">
          洋室の間では、雰囲気がガラリと変わってホテルのようなお部屋になっております。<br />
          ツインベッドルーム・ダブルベッドルームをご用意しております。<br />こちらのお部屋も外の景色は大自然満載です。
        </p>
        <p class="room-item-p">定員<br />2名様を想定</p>
        <p class="room-item-p">
          設備等<br />
          テレビ／冷蔵庫／冷暖房／床暖房／空気清浄機／お風呂／洗面台／トイレ
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LightBox from "vue-image-lightbox";
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");
export default {
  components: {
    LightBox,
  },
  data() {
    return {
      images: [
        {
          thumb: require("@/assets/img/sample2/room/room-wa1.jpg"),
          src: require("@/assets/img/sample2/room/room-wa1.jpg"),
          caption: 'caption1'
        },
        {
          thumb: require("@/assets/img/sample2/room/room-wa2.jpg"),
          src: require("@/assets/img/sample2/room/room-wa2.jpg"),
        },
        {
          thumb: require("@/assets/img/sample2/room/room-wa3.jpg"),
          src: require("@/assets/img/sample2/room/room-wa3.jpg"),
        },
        {
          thumb: require("@/assets/img/sample2/room/room-y1.jpg"),
          src: require("@/assets/img/sample2/room/room-y1.jpg"),
        },
        {
          thumb: require("@/assets/img/sample2/room/room-y2.jpg"),
          src: require("@/assets/img/sample2/room/room-y2.jpg"),
          
        },
      ],
      imagesY: [
      ],
    };
  },
  methods: {
    showLightbox(index) {
      this.$refs.lightbox.showImage(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: white;
  text-shadow: #fc0 1px 0 5px;
  max-width: 1100px;
  margin: 0 auto;
  & .container-h2 {
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
  }
  & .container-h3 {
    text-align: center;
    font-weight: normal;
    margin-bottom: 10px;
  }
  & .container-p {
    text-align: center;
    & small {
      text-shadow: black 1px 0 5px;
      color: lightgray;
      text-decoration: underline red 2px;
    }
  }
  & .room-item {
    margin: 20px;
    // border-bottom: 1px solid white;
    &.wa {
      background: url("/room-wa2.jpg") center center / cover no-repeat;
      & .bgimg-opc {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
    &.yo {
      background: url("/room-y1.jpg") center center / cover no-repeat;
      & .bgimg-opc {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
    & .room-title {
      padding-top: 10px;
      text-decoration: underline 2px;
      text-align: center;
      font-weight: normal;
    }
    & .room-imgs {
      display: flex;
      justify-content: space-between;
      margin: 20px;
      & .room-img {
        width: 30%;
      }
    }
    & .room-imgs-y {
      display: flex;
      justify-content: space-evenly;
      margin: 20px;
      & .room-img-y {
        width: 40%;
      }
    }
    & .room-item-p {
      padding: 10px;
      font-size: 14px;
      margin: 0;
    }
  }
}

@media (max-width: 600px) {
  .container {
    .room-item {
      .room-imgs,
      .room-imgs-y {
        flex-direction: column;
        margin: 0;
        & .room-img,
        .room-img-y {
          width: 100%;
        }
      }
    }
  }
}
</style>
