<template>
  <div class="top">
    <h2>学んできたもの</h2>
    <div class="items">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
            <div class="learn">
              <img src="CSS3.png" alt="CSS3" />
              <p>CSS 3</p>
              <p>
                本・Youtube・Udemy<br />ドットインストール・Progate
                CODEPREPから学習しました
              </p>
            </div>
          </v-card>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
            <div class="learn">
              <img src="HTML5.png" alt="HTML5" />
              <p>HTML 5</p>
              <p>
                本・Youtube・Udemy<br />ドットインストール・Progate
                CODEPREPから学習しました
              </p>
            </div>
          </v-card>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
            <div class="learn">
              <img src="Javascript.png" alt="Javascript" />
              <p>Javascript</p>
              <p>
                Youtube・Udemy<br />ドットインストール・Progate
                CODEPREPから学習しました
              </p>
            </div>
          </v-card>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
            <div class="learn">
              <img src="PHP.png" alt="PHP" />
              <p>PHP</p>
              <p>
                本・Udemy<br />ドットインストール・Progate
                CODEPREPから学習しました
              </p>
            </div>
          </v-card>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
            <div class="learn">
              <img src="React.png" alt="React" />
              <p>React</p>
              <p>Udemy<br />Progate CODEPREPから学習しました</p>
            </div>
          </v-card>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card :elevation="hover ? 24 : 6" class="mx-auto pa-2">
            <div class="learn">
              <img src="Vue.png" alt="Vue" />
              <p>Vue</p>
              <p>Udemyから学習しました</p>
            </div>
          </v-card>
        </template>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPage",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.top {
  // background-image: url("~@/assets/cim0302.jpg");
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
          // transform: translateX(10px);
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
