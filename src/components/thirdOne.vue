<template>
  <div class="medicalTest">
    <div class="medical">検査/診療</div>
    <div class="testBtn">
      <button class="chooseBtn"> 採血 </button>
      <button class="chooseBtn"> 採尿 </button>
      <button class="chooseBtn"> エコー </button>
      <button class="chooseBtn"> 心電図 </button>
      <button class="chooseBtn"> 診察 </button>
      <button class="chooseBtn"> クスリ </button>
      <button class="chooseBtn"> C-T </button>
      <button class="chooseBtn"> X-P </button>
      <button class="chooseBtn"> 内視鏡 </button>
    </div>
  </div>
  <div class="details">
    <div class="date_slot">
      <button class="btn">8/23 10:00 内視鏡</button>
      <button class="btn">8/23 11:00 糖尿病代謝</button>
    </div>
    <div class="info">
      <input type="text" class="input-text" placeholder="メモや共有事項などを記載"/>
    </div>
  </div>
</template>
<script>
</script>
<style>
.medicalTest{
  font-size: 20px;
  display: flex;
  gap:68px;
  padding:10px;
  height: 74px;
  align-items: center;
}
.chooseBtn{
  background-color: white;
  border:2px solid #8bb0ee;
  height: 40px;
  border-radius: 5px  ;
  color: #8bb0ee;
  font-size: 15px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.25);
}
.testBtn{
  width: 90%;
  display: flex;
  gap: 20px;
}
.medical{
  width: 10%;
}
.details{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.date_slot{
  display: flex;
  gap: 10px;
  padding-left: 20%;
}
.btn{
  width: 30%;
  border-radius: 6px;
  background-color: #1157ce;
  color: white;
  height: 37px;
  border: none;
  font-size: 19px;
}
.info{
  padding-left: 20%;
}
.input-text{
  height: 100px;
  border: 2px solid #747474;
  border-radius: 13px;
  width: 80%;
  color: black;
  font-size: 20px;
}
</style>
