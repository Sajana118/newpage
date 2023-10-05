<template>
  <div class="medicalReport">
    <div class="navbar">
      <div class="navbar_content">診療予約</div>
      <div class="closeButton">
        <span @click="closePage" class="material-symbols-outlined">close</span>
      </div>
    </div>
    <div class="components">
      <div class="contentOne">
        <div class="reservation">
          <firstOne/>
          <secondOne/>
          <thirdOne/>
          <fourthOne/>
          <fifthOne/>
      </div>
      </div>
      <div class="content_two">
        <div class="firstSide">  <sixthOne/></div>
        <div class="secondSide"><seventhOne/></div>

      </div>

    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import firstOne from "./firstOne.vue"
import secondOne from "./secondOne.vue"
import thirdOne from "./thirdOne.vue"
import fourthOne from "./fourthOne.vue";
import fifthOne from "./fifthOne.vue";
import SixthOne from "./sixthOne.vue";
import seventhOne from "./seventhOne.vue";
export default {
  components: {
    SixthOne,
    firstOne,
    secondOne,
    thirdOne,
    fourthOne,
    fifthOne,
    seventhOne
  },
  data(){
    return{
    };
  },
  methods: {
  },
}
</script>
<style>
.medicalReport{
  background-color: #b0b0b0;
  height: 175vh;
}
.navbar{
  display: flex;
  justify-content: space-between;
  background-color: white;
  height:65px;
  align-items: center;
  font-size: 35px;
  color: black;
  padding: 15px;
}
.components{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 1300px;
  padding: 30px;

}
.contentOne{
  background-color: white;
  height:1400px ;
  width: 60%;
  padding:20px;
}
.reservation {
  display: flex;
  flex-direction: column;
}
.content_two{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36%;
  height: 1400px;
}
.firstSide{
  background-color: #ffffff;
  height: 680px;

}
.secondSide{
  background-color: #ffffff;
  height: 700px;
}
</style>