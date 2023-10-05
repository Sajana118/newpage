<template>
  <div class="contents">
    <div class="head">
      <p>予約済み ( 2 件 )</p>
    </div>
    <div class="box">
      <input type="date" class="dateField" v-model="date" placeholder="1980/07/13">
    </div>
    <div class="notes">糖尿病代謝内科
      予防接種：B型肝炎
      門前 一郎</div>

    <div class="boxTwo"></div>
  </div>


</template>
<script>
export default {
  data(){
    return{
      date:''
    }
  }
}
</script>
<style>
.head{
  padding-left: 21px;
  font-size: 30px;
}
</style>


