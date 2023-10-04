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
        <reservation/>
      </div>
      <div class="content_two">hello</div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import reservation from './reservationPage.vue';
export default {
  components: {
    reservation
  }
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
.content_two{
  background-color: white;
  width: 36%;
  height: 700px;
}



</style>