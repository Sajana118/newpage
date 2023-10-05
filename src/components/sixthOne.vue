<template>
  <div class="side_Div">
    <div class="head">
      <p>患者情報</p>
    </div>
    <div class="reportNumber">
      <p class="customer">カルテID</p>
      <input type="text" class="numberField" v-model="message" placeholder="12345678">
    </div>
    <div class="reportNumber">
      <p class="customer">生年月日</p>
      <input type="date" class="dateField" v-model="date" placeholder="1980/07/13">
    </div>
    <div class="fields">
      <div class="reportNumber">
        <p class="customer">フリガナ</p>
        <input type="text" class="numberField" v-model="message" placeholder="スズキ タロウ">
      </div>
      <div class="reportNumber">
        <p class="customer">氏名</p>
        <input type="text" class="numberField" v-model="message" placeholder="鈴木 太郎">
      </div>
    </div>
    <div class="fields">
      <div class="reportNumber">
        <p class="customer">自宅</p>
        <input type="text" class="numberField" v-model="message" >
      </div>
      <div class="reportNumber">
        <p class="customer">携帯</p>
        <input type="text" class="numberField" v-model="message" placeholder="080 1111 2222">
      </div>
    </div>
    <div class="note">
      <input type="text" class="noteText" placeholder="女医希望
要２枠 (話が長め)
少しあたりが強い

丁寧に接すること"/>
    </div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      message:'',
      date:''
    }
  }
}
</script>
<style>

.head{
  padding-left: 21px;
  font-size: 25px;
}
.reportNumber{
  padding-left: 25px;
}
.reportNumber p{
  color: grey;
  font-size: 20px;
}
.numberField{
  height: 31px;
  border: 1px solid grey;
  border-radius: 6px;
  font-size: 1rem;
}
.fields{
  display: flex;
}
.note{
  padding: 40px;
}
.noteText{
  background-color: #8bb0ee;
  border:none;
  height: 150px;
  width: 80%;
}
.dateField{
  width: 34%;
  height: 31px;
  border: 1px solid grey;
  border-radius: 6px;
  font-size: 1rem;
}

</style>
