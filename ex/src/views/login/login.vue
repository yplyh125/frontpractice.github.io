<template>
  <div id="wrapper" style="width: 600px; margin: 0 auto; text-align: center;">
    <h2>Team of the Match 관리를 위한 웹페이지 입니다.</h2>
    <div>
        <div style="text-align: center;" >
            <h4>아이디</h4>
            <input type="input" v-model="id">
        </div>
        <div style="text-align: center;">
            <h4>비밀번호</h4>
            <input type="password" v-model="pw">
        </div>
        <div style="text-align: center;">
            <button class="submit" @click="loginCheck">login</button>
        </div>
    </div>
    <hr>
    <div style="text-align: center;">
        회원이 아닌가요? <br>밑에 있는 버튼을 클릭해주세요.
        <br/>
        <button class="submit" @click="pageMoveSig">회원가입 하기</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
// import router from '../../router';

export default {
    setup() {
        const id = ref('');
        const pw = ref('');

        const loginCheck = () => {
            console.log(id.value);
            console.log(pw.value);
        }

        return {
            id,
            pw,
            loginCheck,
        }
    },
    methods:{
        get(){
            axios
                .get(`http://localhost:8080/manager/login`)
                .then((result) => {
                    console.log(result.data);
                })
        }
    }


}
</script>

<style>
    #wrapper{
        
    }
</style>