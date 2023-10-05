<template>

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
</template>
<script>

</script>
<style>
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
</style>