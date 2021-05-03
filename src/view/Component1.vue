<template>
  <div class="component1">
    <div>
      <v-carousel
        cycle
        height="400"
        hide-delimiters
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>

    <main>
      <div class="main-content">
        <div class="card">
          <div class="sub-title">SAMPLE1</div>
          <p>説明文1</p>
        </div>
        <div class="card">
          <div class="sub-title">SAMPLE2</div>
          <p>
            説明文2説明文2説明文2説明文2説明文2説明文2説明文2説明文2説明文2説明文2
          </p>
        </div>
        <div class="card">
          <div class="sub-title">SAMPLE3</div>
          <p>説明文3</p>
        </div>
        <div class="card">
          <div class="sub-title">SAMPLE4</div>
          <p>説明文4</p>
        </div>
        <div class="card">
          <div class="sub-title">SAMPLE5</div>
          <p>説明文5</p>
        </div>
        <div class="card">
          <div class="sub-title">SAMPLE6</div>
          <p>説明文6</p>
        </div>
        <div class="card">
          <div class="sub-title">SAMPLE7</div>
          <p>説明文7</p>
        </div>
        <div class="card">
          <div class="sub-title">SAMPLE8</div>
          <p>説明文8</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  name: "Component1",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "~hooper/dist/hooper.css";

.component1 {
  max-width: 1100px;
  margin: 58px auto;
  & h2 {
    text-align: center;
  }
  & main {
    & .main-content {
      display: flex;
      padding: 10px;
      flex-wrap: wrap;
      & .card {
        background-color: white;
        border: 1px solid rgb(32, 197, 148);
        width: 200px;
        height: 300px;
        margin: 5px auto;
        transition: all 0.5s 0s ease;
        &:hover {
          border: 1px solid rgb(59, 86, 136);
        }
        &:hover {
          .sub-title {
            background-color: rgb(59, 86, 136);
          }
        }
        .sub-title {
          background-color: rgb(32, 197, 148);
          color: white;
          height: auto;
          text-align: center;
          padding: 5px;
          transition: all 0.5s 0s ease;
        }
        p {
          padding: 10px;
          letter-spacing: 1px;
          text-align: center;
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
}
</style>
