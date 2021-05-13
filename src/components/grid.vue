<template>
  <div>
    <h2 class="sub-title1">Grid Items</h2>
    <div class="container">
      <div class="grid-items">
        <swiper class="swiper" :options="swiperOption">
          <template v-for="(item, i) in gridItems">
            <swiper-slide :key="i">
              <div class="grid-item">
                <a
                  :href="
                    require('@/assets/img/grid_item/grid-sample' +
                      (i + 1) +
                      '.jpg')
                  "
                  data-lightbox="group"
                >
                  <img
                    class="image"
                    :src="
                      require('@/assets/img/grid_item/grid-sample' +
                        (i + 1) +
                        '.jpg')
                    "
                    :alt="item.name"
                  />
                </a>
              </div>
            </swiper-slide>
          </template>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px 0px -100px",
      threshold: 0,
    };
    const images = document.querySelectorAll(".image");
    images.forEach((target) => this.onIntersect(target, options));
  },
  methods: {
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.addClass, options);
      observer.observe(target);
    },
    addClass(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      }
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 10,
          },
        },
      },
      gridItems: [
        { name: "neko1" },
        { name: "neko2" },
        { name: "neko3" },
        { name: "hana1" },
        { name: "hana2" },
        { name: "hana3" },
        { name: "hana4" },
        { name: "neko5" },
        { name: "neko6" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 430px;
  margin-left: auto;
  margin-right: auto;
  border-left: 1px solid black;
  border-top: 1px solid black;
  box-shadow: 5px 5px 5px black;

  .swiper-slide {
    height: 200px;
    width: 200px;
  }
}

.sub-title1 {
  background-color: rgb(32, 197, 148);
  padding: 10px;
  text-align: center;
  font-family: "Itim", cursive;
  text-shadow: 1px 1px 0 white;
  transform: translateX(500px);
  opacity: 0;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  .grid-items {
    margin-top: 6%;
    margin-bottom: 6%;
    // background-color: yellowgreen;
    .grid-item {
      width: 200px;
      margin: 4% auto;
      align-items: center;
      & .image {
        border-radius: 50%;
        height: 200px;
        transition: all 1s ease;
        transform: translateY(40px);
        opacity: 0;
        &.show {
          transform: translateY(0);
          opacity: 1;
        }

        &:hover {
          border-radius: 5px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .swiper {
      height: 250px;
    }
  }
}
</style>
