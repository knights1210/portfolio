<template>
  <div class="container">
    <h2>Grid Items</h2>
    <div class="grid-items">
      <template v-for="(item, i) in gridItems">
        <div class="grid-item" :key="i">
          <img
            :src="
              require('@/assets/img/grid_item/grid-sample' + (i + 1) + '.jpg')
            "
            :alt="item.name"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
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
.container {
  box-sizing: border-box;
  max-width: 1100px;
  margin: 0 auto;
  // padding: 0 4%;
  & h2 {
    background-color: rgb(32, 197, 148);
    padding: 10px;
    font-family: 'Itim', cursive;
    text-shadow: 1px 1px 0 white;
  }
  .grid-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    margin-top: 6%;
    margin-bottom: 50px;
    .grid-item {
      margin: 0 auto;
      img {
        border-radius: 50%;
        width: 250px;
        transition: all 0.5s ease;
        &:hover {
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
