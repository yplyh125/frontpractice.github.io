<template>
    <div class="body">
          <h2>공지 관리</h2>
          <el-button plain @click="outerVisible = true" class="move" size="large" type="danger" :icon="CirclePlusFilled" circle >+</el-button>
          <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="title" label="제목"/>
              <el-table-column prop="date" label="날짜" />
              <el-table-column fixed="right"  width="120">
                <el-button button type="primary" size="middle">보기</el-button>
              </el-table-column>
          </el-table>

        <el-dialog v-model="outerVisible" title="공지 등록" width="800">
            <el-input v-model="input" placeholder="제목" />
            <el-input
                v-model="textarea"
                :rows="10"
                type="textarea"
                placeholder="내용"
                style="margin-top: 10px;"
            />
            <el-dialog
            v-model="innerVisible"
            width="500"
            title="Inner Dialog"
            append-to-body
            >
            <span>This is the inner Dialog</span>
            </el-dialog>
            <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="innerVisible = true">
                등록
                </el-button>
            </div>
            </template>
        </el-dialog>
      </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'

    const input = ref('')
    const textarea = ref('')
    const outerVisible = ref(false)
    const innerVisible = ref(false)
    const tableData = [
            {
                date: '2016-05-03',
                title: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
  </script>
  
  <style>
    .body{
        position: absolute;
        width: 900px;
        height: 750px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .move{
        position: relative;
        font-size: xx-large; 
        margin-top: -100px;
        margin-left: 100px;
    }
  </style>