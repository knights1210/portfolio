<template>
  <div class="component1">
    <h2>Component1</h2>
  </div>
</template>

<script>
export default {
  name: "Component1",
 
};
</script>

<style lang="scss" scoped>
  .component1 {
    margin-top: 58px;
    background-color: lightblue;
    & h2 {
      text-align: center;
    }
  }
</style>
