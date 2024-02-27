<template>
    <div class="body">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="열린 예측" name="first">
                    <el-select v-model="value1" multiple placeholder="종류" style="width: 200px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                    <el-select v-model="value2" multiple placeholder="날짜 선택" style="width: 200px; margin-left: 20px;">
                        <el-option v-for="item in optionss" :key="item.values" :label="item.labels" :value="item.values"/>
                    </el-select>
                    <el-calendar>
                        <template #date-cell="{ data }">
                        <p :class="data.isSelected ? 'is-selected' : ''">
                            {{ data.day.split('-').slice(1).join('-') }}
                            {{ data.isSelected ? '✔️' : '' }}
                        </p>
                        </template>
                    </el-calendar>
                </el-tab-pane>
                <el-tab-pane label="모든 예측" name="second">
                    <el-select v-model="value1" multiple placeholder="종류" style="width: 200px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                    <el-select v-model="value2" multiple placeholder="날짜 선택" style="width: 200px; margin-left: 20px;">
                        <el-option v-for="item in optionss" :key="item.values" :label="item.labels" :value="item.values"/>
                    </el-select>
                    <el-calendar>
                        <template #date-cell="{ data }">
                        <p :class="data.isSelected ? 'is-selected' : ''">
                            {{ data.day.split('-').slice(1).join('-') }}
                            {{ data.isSelected ? '✔️' : '' }}
                        </p>
                        </template>
                    </el-calendar>
                </el-tab-pane>
                <el-tab-pane label="새로운 예측" name="third">
                    <el-select v-model="value1" multiple placeholder="종류" style="width: 200px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                    <el-select v-model="value2" multiple placeholder="날짜 선택" style="width: 200px; margin-left: 20px;">
                        <el-option v-for="item in optionss" :key="item.values" :label="item.labels" :value="item.values"/>
                    </el-select>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="choice">
                            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange"></el-checkbox>
                        </el-table-column>
                    
                        <el-table-column prop="concert" label="대회"/>
                        <el-table-column prop="home" label="Home" />
                        <el-table-column prop="away" label="Away" />
                    </el-table>
                    <div style="margin: 10px;">
                        <el-button class="mt-4" type="primary" style="width: 100%; height: 50px;" @click="onAddItem">새로운 예측 생성</el-button>
                        </div>
                        
                </el-tab-pane>
            </el-tabs>
      </div>
  </template>
  
  <script setup>
  const tableData = [
         {
            home: 'city',
            away: 'Tom',
            concert: 'sfsfsfscs'
        },
        {
            home: 'city',
            away: 'Tom',
            concert: 'sfsfsfscs'
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
  .is-selected {
  color: #1989fa;
}
  
  </style>