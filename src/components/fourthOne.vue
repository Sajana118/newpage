<template>
  <div class="list">
    <div class="firstList">予防接種</div>
    <div class="yellowBtn">
      <div v-if="showYellowDiv" class="services">
        <p> ｴｲﾑｹﾞﾝ</p>
        <input type="text" class="text" placeholder="備考詳細備考詳細"/>
        <div class="removeBtn">
          <span @click="clickButton" class="material-symbols-outlined">close</span>
        </div>
      </div>

      <div v-if="secondYellowBtn" class="services">
        <p> 破傷風</p>
        <input type="text" class="text" placeholder="備考詳細備考詳細"/>
        <div class="removeBtn">
          <span @click="closeButton" class="material-symbols-outlined">close</span>
        </div>
      </div>

      <div v-if="thirdYellowBtn" class="services">
        <p>ｻｰﾊﾞﾘｯｸｽ</p>
        <input type="text" class="text" placeholder="備考詳細備考詳細"/>
        <div class="removeBtn">
          <span @click="removeButton" class="material-symbols-outlined">close</span>
        </div>
      </div>
    </div>
  </div>
  <div class="addBtn">
    <button class="plusButton">＋ 予防接種追加</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showYellowDiv:true,
      secondYellowBtn:true,
      thirdYellowBtn:true,
    }
  },
  methods:{
    clickButton(){
      this.showYellowDiv=false
    },
    removeButton(){
     this.secondYellowBtn = false
    },
    closeButton(){
     this.thirdYellowBtn = false
    }
  }

}
</script>
<style>

.list{
  display: flex;

  padding: 30px;
}
.services{
  background-color: #f2d692;
  width: 90%;
  height: 65px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  gap: 35px;
  padding-left: 25px;
}
.text{
  height: 34px;
  width: 75%;
  border-radius: 5px;
  border:2px solid grey;
}
.yellowBtn{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.firstList{
  width: 20%;
  font-size: 20px;
}
.addBtn{
  padding-left: 20%;
}
.plusButton{
  background-color: #39a7df;
  color: white;
  border-radius: 8px;
  border: none;
  height: 40px;
  width: 22%;
  font-size: 17px;
}
</style>