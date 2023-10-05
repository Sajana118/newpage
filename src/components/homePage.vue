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
      </div>
      </div>
      <div class="content_two"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import firstOne from "./firstOne.vue"
import secondOne from "./secondOne.vue"
import thirdOne from "./thirdOne.vue"
import fourthOne from "./fourthOne.vue";
export default {
  components: {
    firstOne,
    secondOne,
    thirdOne,
    fourthOne
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
  padding: 36px;

}
.contentOne{
  background-color: white;
  height:1000px ;
  width: 61%;
  padding:20px;
}
.reservation {
  display: flex;
  flex-direction: column;
}
.content_two{
  background-color: white;
  width: 36%;
  height: 700px;
}

</style>