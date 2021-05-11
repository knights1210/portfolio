<template>
  <div>
    <h2 class="sub-title">Grid Items</h2>
    <div class="container">
      <div class="grid-items">
        <template v-for="(item, i) in gridItems">
          
          <div class="grid-item" :key="i">
            <a :href="require('@/assets/img/grid_item/grid-sample' + (i + 1) + '.jpg')" data-lightbox="group">
            <img
              class="image"
              :src="
                require('@/assets/img/grid_item/grid-sample' + (i + 1) + '.jpg')
              "
              :alt="item.name"
              width="300"
            />
            </a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px 0px -100px",
      threshold: 0,
    };
    const images = document.querySelectorAll(".image");
    images.forEach((target) => this.onIntersect(target, options));

    // const subTitle = document.querySelectorAll('.sub-title');
    // subTitle.forEach((target) => this.onIntersect(target,options));
  },
  methods: {
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.addClass, options);
      observer.observe(target);
    },
    addClass(entries) {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("show");
        }
      }
    },
  },
  data() {
    return {
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
h2 {
  background-color: rgb(32, 197, 148);
  padding: 10px;
  text-align: center;
  font-family: "Itim", cursive;
  text-shadow: 1px 1px 0 white;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translateX(200px);
  &.show {
    opacity: 1;
    transform: translateX(0);
  }
}
.container {
  // box-sizing: border-box;
  max-width: 1100px;
  margin: 0 auto;
  // padding: 0 4%;
  .grid-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    margin-top: 6%;
    margin-bottom: 50px;
    .grid-item {
      margin: 0 auto;
      & .image {
        border-radius: 50%;
        width: 250px;
        transition: all 0.5s ease;
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
}
</style>
