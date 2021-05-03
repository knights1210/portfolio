<template>
  <footer>
    <small>&copy;footer.com</small>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: gray;
  text-align: center;
  padding: 20px 0px;
}
@media (max-width: 600px) {
  footer {
    margin-bottom: 56px;
  }
}
</style>
