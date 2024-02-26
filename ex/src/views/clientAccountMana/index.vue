<template>
  <div id="wrapper">
    <div class="body">
        <div>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="고객 계정 관리" name="first">
                    <div class="demo-input-suffix">
                        <el-row :gutter="20">
                        <el-input
                            v-model="input2"
                            class="w-50 m-2"
                            placeholder="Type something"
                            style="width: 200px; margin-left: 10px; margin-bottom: 40px;"
                        />
                        <el-button type="primary">검색</el-button>
                        </el-row>
                    </div>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="이메일"  />
                        <el-table-column prop="name" label="닉네임" />
                        <el-table-column prop="address" label="가입일" />
                        <el-table-column fixed="right" label="" width="120">
                            <template #default="scope">
                                <el-button
                                button
                                type="primary"
                                size="small"
                                @click.prevent="deleteRow(scope.$index)"
                                >
                                7일 정지
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                    small
                    background
                    layout="prev, pager, next"
                    :total="4"
                    class="mt-4"
                    style="text-align: center;"
                    /> 
                </el-tab-pane>
                <el-tab-pane label="관리자 계정 관리" name="second">
                    <div class="demo-input-suffix">
                        <el-row :gutter="20">
                        <el-input
                            v-model="input2"
                            class="w-50 m-2"
                            placeholder="Type something"
                            style="width: 200px; margin-left: 10px; margin-bottom: 40px;"
                        />
                        <el-button type="primary">검색</el-button>
                        </el-row>
                    </div>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="adress" label="아이디"  />
                        <el-table-column prop="name" label="이름" />
                        <el-table-column prop="number" label="전화번호" />
                        <el-table-column prop="date" label="가입일" />
                        <el-table-column fixed="right"  width="120">
                            <template #default="">
                                <el-button
                                button
                                type="primary"
                                size="small"
                                @click.prevent="deleteRow(scope.$index)"
                                >
                                삭제
                                </el-button>
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" width="120">
                            <template #default="">
                                <el-button
                                button
                                type="primary"
                                size="small"
                                @click="pwChange"
                                >
                                비밀번호 재설정
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div style="">
                        <el-button @click="pageMove" size="large" type="danger" :icon="CirclePlusFilled" circle style="font-size: xx-large; margin-top: 20px; margin-left: 850px;">+</el-button>
                    </div>
                    <el-pagination
                        small
                        background
                        layout="prev, pager, next"
                        :total="4"
                        class="mt-4"
                    /> 
                </el-tab-pane>
            </el-tabs>
        </div>
        
        </div>
  </div>
</template>

<script setup>
import router from '../../router/index'


    const tableData = [
         {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        }
    ]
    
    const pageMove = () => {
        router.push({path:'adminAdd'})
    }
    const pwChange = () => {
        router.push({path:'pwChange'})
    }
    
</script>

<style scoped>
.body{
    position: absolute;
    width: 900px;
    height: 750px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>