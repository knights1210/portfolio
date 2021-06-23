<template>
  <div class="container">
    <div class="footer-flex-items">
      <div class="footer-flex-item">
        <h3 class="flex-h3">ご案内</h3>
        <p>
          新幹線でお越しの場合<br />
          東京から◯時間<br />
          ◯◯駅よりお車で◯分・徒歩で◯分

          <br />
          <br />
          お車でお越しの場合<br />
          ◯◯ICから◯◯ICまで◯時間<br />
          ◯◯ICから当旅館まで◯分
        </p>
      </div>
      <div class="footer-flex-item">
        <h3 class="flex-h3">住所</h3>
        <p>〒000-0000 <br>
        〇〇県〇〇市◯◯区◯◯0-0-0 <br>
        <br>
        TEL: 000-000-0000 <br>
        FAX: 000-000-0000 <br>
        E-mail: example@mail.com <br>
        <br>
        </p>
      </div>
      <div class="footer-flex-item">
        <h3 class="flex-h3">MAP</h3>
        <img src="@/assets/img/sample2/map.png" alt="" />
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
  & .footer-flex-items {
    display: flex;
    & .footer-flex-item {
      font-size: 0.9rem;
      padding: 1rem;
      width: 100%;
      text-align: center;
      & p {
        display: inline-block;
        text-align: left;
      }
    }
    & .footer-flex-item:not(:last-child) {
      border-right: 1px solid white;
      & .flex-h3 {
        text-align: center;
        margin-bottom: 0.5rem;
      }
    }
  }
}
li {
  & a {
    color: white;
  }
}

@media (max-width: 600px) {
  .container {
    & .footer-flex-items {
      flex-direction: column;
      & .footer-flex-item:not(:last-child) {
        border-bottom: 1px solid white;
        border-right: unset;
      }
    }
  }
}
</style>
