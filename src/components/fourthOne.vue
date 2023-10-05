<template>
  <div class="list">
    <div class="firstList">予防接種</div>
    <div class="yellowBtn">
      <div v-if="showYellowDiv" class="services">
        <p> ｴｲﾑｹﾞﾝ</p>
        <input type="text" class="text" placeholder="備考詳細備考詳細"/>
        <div class="removeBtn">
          <span @click="clickBtn" class="material-symbols-outlined">close</span>
        </div>
      </div>

      <div v-if="secondYellowBtn" class="services">
        <p> 破傷風</p>
        <input type="text" class="text" placeholder="備考詳細備考詳細"/>
        <div class="removeBtn">
          <span @click="closeButton" class="material-symbols-outlined">close</span>
        </div>
      </div>

      <div v-if="thirdYellowButton" class="services">
        <p>ｻｰﾊﾞﾘｯｸｽ</p>
        <input type="text" class="text" placeholder="備考詳細備考詳細"/>
        <div class="removeBtn">
          <span @click="removeButton" class="material-symbols-outlined">close</span>
        </div>
      </div>

      <div v-if="fourthYellowBtn" class="services">
        <p>new</p>
        <input type="text" class="text" placeholder="備考詳細備考詳細"/>
        <div class="removeBtn">
          <span @click="hideButton" class="material-symbols-outlined">close</span>
        </div>
      </div>
    </div>
  </div>
  <div class="addBtn">
    <button @click="buttonPlus" class="plusButton">＋ 予防接種追加</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      showYellowDiv:true,
      secondYellowBtn:true,
      thirdYellowButton:true ,
      fourthYellowBtn:false
    }
  },
  methods:{
    clickBtn(){
      this.showYellowDiv=false
    },
    closeButton(){
      this.secondYellowBtn = false
    },
    removeButton(){
     this.thirdYellowButton = false
    },

    hideButton(){
     this.fourthYellowBtn = true
    },
    buttonPlus(){
      this.showYellowDiv = true
      this.fourthYellowBtn = true

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
  gap: 25px;
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
  padding-left: 19%;
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
.services p{
  min-width: 100px;

}
</style>