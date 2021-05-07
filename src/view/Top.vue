<template>
  <div class="top">
    <h2>学んできたもの</h2>
    <div class="items">
      <template v-for="(learn, i) in learns">
        <v-hover :key="i">
          <template v-slot:default="{ hover }">
            <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
              <div class="learn">
                <img :src="learn.src" :alt="learn.name" />
                <p>{{ learn.name }}</p>
                <p>{{ learn.coments }}</p>
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
        { name: "Vue", src: "Vue.png", coments: "Udemyから学習しました" },
        {
          name: "CSS 3",
          src: "CSS3.png",
          coments:
            "本・Youtube・Udemy ドットインストール・Progate CODEPREPから学習しました",
        },
        {
          name: "HTML 5",
          src: "HTML5.png",
          coments:
            "本・Youtube・Udemyドットインストール・Progate CODEPREPから学習しました",
        },
        {
          name: "Javascript",
          src: "Javascript.png",
          coments:
            "Youtube・Udemy ドットインストール・Progate CODEPREPから学習しました",
        },
        {
          name: "PHP",
          src: "PHP.png",
          coments:
            "本・Udemy ドットインストール・Progate CODEPREPから学習しました",
        },
        {
          name: "React",
          src: "React.png",
          coments: "Udemy Progate CODEPREPから学習しました",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.top {
  background-size: cover;
  min-height: 100vh;
  height: auto;
  padding: 70px 20px;
  & h2 {
    text-align: center;
    background-color: white;
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
