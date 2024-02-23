<template>
  <div id="wrapper">
    <div class="body">
      <div class="box1" @click="accountManagement">
        계정 관리
      </div>
      <div class="box1" @click="rankingCheck">
        랭킹 확인
      </div>
      <div class="box1">
        현재 예측
      </div>
      <div class="box1">
        지난 예측
      </div>
      <div class="box1">
        공지 관리
      </div>
      <div class="box1">
        서버 관리
      </div>
      <div class="box1">
        신고 관리
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../router'
export default {

  methods:{
    accountManagement() {
      router.push({ path:"accountMana" })
    },
    rankingCheck(){
      router.push({ path:"Ranking" })
    }
  }

}
</script>

<style scoped>
.box1{
  float: left;
  position: relative;
  line-height: 100px;
  background: silver;
  height: 100px; width: 100px;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  margin: 8px;
  box-shadow: 0px 1px 1.5px;
  background:#86B6F6 ;
}
.body{
  position: absolute;
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>