<template>
  <div class="reservation">
    <div class="register">
      予約内容
      <input type="text" class="reg_button" placeholder="予約No：11223344">
    </div>
    <div class="date">
      <div class="link">
        <input type="text" class="inputField" placeholder="2023/08/20 (水)     12:00 〜">
        <router-link to="/overlaypage">変更する</router-link>
      </div>
      <div class="report">
        <p> 糖尿病代謝内科</p>
        <p> 門前 一郎</p>
      </div>
    </div>
    <div class="data_input">
      <div class="form_side">
        <div class="time_slot">
          時間/枠数
          <input type="text" class="formData" v-model="time" placeholder="17:30終了時間厳守">
        </div>

        <div class="time_slot">
          初診/再診
          <input type="text" class="formData" v-model="time" placeholder="初診は11:30枠までに予約">
        </div>

        <div class="time_slot">
          専門/症状
          <input type="text" class="formData" v-model="time" placeholder="風邪症状NG">
        </div>
      </div>
      <div class="form_side">
        <div class="time_slot">
          対応年齢
          <input type="text" class="formData" v-model="time" placeholder="高校生以上">
        </div>

        <div class="time_slot">
          言語
          <input type="text" class="formData" v-model="time" placeholder="英語">
        </div>

        <div class="time_slot">
          WEB
          <input type="text" class="formData" v-model="time" placeholder="土PM15時PM①">
        </div>
      </div>
    </div>
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
    <div class="list">
      <div class="firstList">予防接種</div>
      <div class="services">
        ｴｲﾑｹﾞﾝ
        <input type="text" class="text" placeholder="備考詳細備考詳細"/>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  data(){
    return{
      time:''
    }
  }
}
</script>
<style>
.reservation{
  display: flex;
  flex-direction: column;
}
.register{
  display: flex;
  font-size: 28px;
  padding: 11px;
  gap: 5%;
  align-items: center;
}
.reg_button{
  width: 24%;
  background-color: white;
  border: none;
  font-size: 20px;
}
.date{
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.link{
  display: flex;
  gap: 10%;
  font-size: 20px;
  color: black;
  align-items: center;
}
.report{
  display: flex;
  gap: 10%;
  font-size: 20px;
  color: black;
  align-items: center;
}
.inputField{
  width: 40%;
  height: 34px;
  font-size: 23px;
  color: black;
  border: none;
}
.data_input{
  background-color: #a7d3f7;
  height: 170px;
  display: flex;
  gap: 100px;
  align-items: center;
}
.form_side{
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding:2%;
}
.time_slot{
  display: flex;
  gap:3%;
  font-size: 20px;
}
.formData{
  background-color: #a7d3f7;
  height: 29px;
  font-size: 17px;
  width: 50%;
  border: none;
}
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
  padding-left: 165px;
}
.btn{
  width: 26%;
  border-radius: 6px;
  background-color: #378df7;
  color: white;
  height: 37px;
  border: none;
  font-size: 19px;
}
.info{
  padding-left: 165px;
}
.input-text{
  height: 100px;
  border: 2px solid #747474;
  border-radius: 13px;
  width: 80%;
  color: black;
  font-size: 20px;
}
.list{
  display: flex;
  gap: 100px;
  padding: 30px;
  align-items: center;
}
.services{
  background-color: #f2d692;
  width: 82%;
  height: 65px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.text{
  height: 34px;
  width: 70%;
  border-radius: 5px;
  border:2px solid grey;
}
</style>