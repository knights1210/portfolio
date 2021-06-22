<template>
  <div class="container">
    <div class="flex-items">
      <div class="flex-item">
        <h3 class="flex-h3">ご案内</h3>
        <p>
          新幹線でお越しの場合<br />
          東京から◯時間<br />
          ◯◯駅よりお車で◯分・徒歩で◯分
        </p>
        <p>
          お車でお越しの場合<br />
          ◯◯ICから◯◯ICまで◯時間<br />
          ◯◯ICから当旅館まで◯分
        </p>
      </div>
      <div class="flex-item">
        <p>2</p>
      </div>
      <div class="flex-item">
        <p>3</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  color: white;
  text-shadow: #fc0 1px 0 5px;
  max-width: 1100px;
  margin: 0 auto;
  & .flex-items {
    display: flex;
    justify-content: space-between;
    & .flex-item {
      font-size: 0.9rem;
      padding: 1rem;
    }
    & .flex-item:not(:last-child) {
      border-right: 1px solid white;
      & .flex-h3 {
        text-align: center;
        margin-bottom: 0.5rem;
      }
    }
  }
}

@media (max-width: 600px) {
  .container {
    & .flex-items {
      flex-direction: column;
      & .flex-item:not(:last-child) {
        border-bottom: 1px solid white;
        border-right: unset;
      }
    }
  }
}
</style>
