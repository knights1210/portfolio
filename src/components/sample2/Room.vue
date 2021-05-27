<template>
  <div class="container">
    <h2 class="container-h2">お部屋のご案内</h2>
    <h3 class="container-h3">当旅館のお部屋</h3>
    <p class="container-p">当旅館のお部屋の一部をご紹介</p>
    <p class="container-p"><small>※当館は全室、空調設備完備・光触媒コーティングによる抗菌にて
    感染症対策を行っております。</small></p>

    <div class="room-item">
      <h3 class="room-title">和室の間</h3>
      <div class="room-imgs">
        <img
          class="room-img"
          src="@/assets/img/sample2/room/room-wa1.jpg"
          alt="和室１"
        />
        <img
          class="room-img"
          src="@/assets/img/sample2/room/room-wa2.jpg"
          alt="和室２"
        />
        <img
          class="room-img"
          src="@/assets/img/sample2/room/room-wa3.jpg"
          alt="和室３"
        />
      </div>
      <p class="room-item-p">和室の間では、実家のようにくつろげる空間をご提供。<br>
      和室の良さを現代の技術を組合わせて快適に過ごしていただけるお部屋になっております。
      </p>
      <p class="room-item-p">定員<br>
      ２～４名様</p>
      <p class="room-item-p">設備等<br>
      テレビ／冷蔵庫／冷暖房／床暖房／空気清浄機／お風呂／洗面台／トイレ</p>
    </div>


    <div class="room-item">
      <h3 class="room-title">洋室の間</h3>
      <div class="room-imgs-y">
        <img
          class="room-img-y"
          src="@/assets/img/sample2/room/room-y1.jpg"
          alt="洋室１"
        />
        <img
          class="room-img-y"
          src="@/assets/img/sample2/room/room-y2.jpg"
          alt="洋室２"
        />
      </div>
      <p class="room-item-p">洋室の間</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
  & .container-h2 {
    text-align: center;
  }
  & .container-h3 {
    text-align: center;
    background-color: black;
    color: white;
    font-weight: normal;
    margin-bottom: 10px;
  }
  & .container-p {
    text-align: center;
  }
  & .room-item {
    margin: 20px;
    border: 1px solid black;
    & .room-title {
      text-align: center;
      background-color: black;
      color: white;
      font-weight: normal;
    }
    & .room-imgs {
      display: flex;
      justify-content: space-between;
      margin: 20px;
      & .room-img {
        width: 30%;
      }
    }
    & .room-imgs-y {
      display: flex;
      justify-content: space-evenly;
      margin: 20px;
      & .room-img-y {
        width: 40%;
      }
    }
    & .room-item-p {
      margin: 20px;
    }
  }
}
</style>
