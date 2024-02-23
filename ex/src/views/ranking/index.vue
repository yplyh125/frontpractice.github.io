<template>
    <div class="body">
        <h2>사용자 랭킹 확인</h2>
        
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="win" label="랭킹"/>
            <el-table-column prop="score" label="점수" />
            <el-table-column prop="address" label="이메일" />
            <el-table-column prop="nikname" label="닉네임"/>
            <el-table-column prop="date" label="가입일" />
        </el-table>
    </div>
</template>
  
<script setup>
  const tableData = [
    {
        win:"1",
        score:"300",
      date: '2016-05-03',
      nikname: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      nikname: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
</script>
<style scoped>
    .body{
        position: absolute;
        width: 900px;
        height: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
  