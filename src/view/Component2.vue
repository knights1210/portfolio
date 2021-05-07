<template>
  <div class="component2">
    <h2>Component2</h2>
  </div>
</template>

<script>
export default {
  name: "Component2",
};
</script>

<style lang="scss" scoped>
.component2 {
  background-color: lightgreen;
  margin-top: 58px;
  & h2 {
    text-align: center;
  }
}
</style>
