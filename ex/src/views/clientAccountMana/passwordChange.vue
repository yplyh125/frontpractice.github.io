<template>
    <div class="addAdmin" style="width: 500px;">
      <h2 style="text-align: center;">관리자 계정 추가</h2>
      <div style="margin: 10px;">
        <span>기존 비밀번호</span>
        <el-input v-model="input" size="large" type="password" placeholder="비밀번호 입력" show-password clearable />
      </div>
      <div style="margin: 10px;">
        <span>새 비밀번호</span>
        <el-input v-model="input" size="large" type="password" placeholder="새 비밀번호 입력" show-password clearable />
      </div>
      <div style="margin: 10px;">
        <span>새 비밀번호 확인</span>
        <el-input v-model="input" size="large" type="password" placeholder="새 비밀번호 재입력" show-password clearable />
      </div>
      <div style="margin: 10px;">
      <el-button class="mt-4" type="primary" style="width: 100%; height: 50px;" @click="onAddItem">비밀번호 변경</el-button>
    </div>
  
      <div style="text-align: center;">
        <el-button type="text" style="color: #3774e3; font-weight: bold;" @click="home">HOME</el-button>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import router from '../../router/index'
  const home = () => {
          router.push({path:'home'})
      }
  
  
  </script>
  
  <style>
    .addAdmin{
      position: absolute;
      width: 900px;
      height: 750px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  </style>