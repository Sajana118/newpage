<template>
  <div class="fifthTemp">
    <div class="input">
    <div class="content">
      その他メモ
    </div>
      <div class="dataEntry">
        <input type="text" class="input-text" placeholder="メモや共有事項などを記載"/>
      </div>

    </div>
    <div class="line">
    </div>
    <div class="selection">
      <div class="option">
        <div class="column">
          <label>予約方法</label>
        </div>
        <div class="column">
          <input v-model="radioValue" value="来院時" type="radio">
          <label>来院時</label>
        </div>
        <div class="column">
          <input v-model="radioValue" value="電話" type="radio">
          <label>電話</label>
        </div>
        <div class="column">
          <input v-model="radioValue" value="WEB" type="radio">
          <label>WEB</label>
        </div>
      </div>
      <div class="column-side">
        <p>登録者 中村 麻衣 2023/12/15 13:52</p>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      radioValue:''
    }
  }
}
</script>
<style>
.input {
  display: flex;
  gap: 90px;
  margin-bottom: 10px;
  padding: 13px 20px

}
.content{
  font-size: 1rem;
  color: black;
  display: flex;
  align-items: center;
}
.input .input-text {
  height: 100px;
  width: 658px;
  border-radius: 10px;
  border-color: #cbcbbe;
  font-size: 1rem;

}

.line {
  background-color: darkgray;
  height: 2px;
}
.selection {
  display: flex;
  align-items: center;
  padding: 2px;
  font-size: 20px;
}
.option {
  display: flex;
  gap: 20px;
  padding-left: 32px;
  align-items: center;
  width: 80%;
}
.column {
  display: flex;
  gap: 15px;
  width: 100px;
  padding-left: 10px;
}
.column-side{
  width: 45%;
}
.fifthTemp{
  padding: 15px;
}
</style>
