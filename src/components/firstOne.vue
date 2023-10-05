<template>
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
</template>
<script>

</script>
<style>
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
</style>