<template>
  <div id="wrapper" style="width: 300px; margin: 0 auto; text-align: center;">
    <div style="text-align: center;">
        <h2>회원가입</h2>
        <div>
            <h5 style="margin: 0%;">이름</h5>
            <input type="text">
        </div>
        <div>
            <h5 style="margin: 0%;">아이디</h5>
            <input type="text">
        </div>
        <div>
            <h5 style="margin: 0%;">비밀번호</h5>
            <input type="password">
        </div>
        <div>
            <h5 style="margin: 0%;">비밀번호 확인</h5>
            <input type="password">
        </div>
        <br>
        <div>
            <button class="submit" @click="pageLogin">로그인 하기</button>
            &nbsp;
            <button class="button">회원가입 하기</button>
        </div>
    </div>
  </div>
</template>

<script>
import router from '../../router'
import { signupApi } from '../../api';

export default {
    data(){
        return{
            username: '',
            password: '',     
        }
    },
    created(){
        signupApi()
            .then(response => (this.menu = response.data.menu))
            .catch(error => console.log(error))
    },
    methods:{
        pageLogin(){
            router.push({path:"/"})
        }
    }
}

</script>

<style>

</style>