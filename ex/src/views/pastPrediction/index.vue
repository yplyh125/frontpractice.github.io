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
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="home" label="Home"/>
                        <el-table-column prop="away" label="Away" />
                        <el-table-column prop="entire" label="총 참여자" />
                        <el-table-column prop="homeWin" label="홈 승"/>
                        <el-table-column prop="same" label="무승부" />
                        <el-table-column prop="awayWin" label="어웨이 승" />
                        <el-table-column prop="result" label="결과" />
                    </el-table>
                    <el-pagination small background layout="prev, pager, next" :total="4" class="mt-4" style="text-align: center;" /> 
                </el-tab-pane>
                <el-tab-pane label="모든 예측" name="second">
                    <el-select v-model="value1" multiple placeholder="종류" style="width: 200px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                    <el-select v-model="value2" multiple placeholder="날짜 선택" style="width: 200px; margin-left: 20px;">
                        <el-option v-for="item in optionss" :key="item.values" :label="item.labels" :value="item.values"/>
                    </el-select>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="home" label="Home"/>
                        <el-table-column prop="away" label="Away" />
                        <el-table-column prop="entire" label="총 참여자" />
                        <el-table-column prop="homeWin" label="홈 승"/>
                        <el-table-column prop="same" label="무승부" />
                        <el-table-column prop="awayWin" label="어웨이 승" />
                        <el-table-column prop="result" label="결과" />
                    </el-table>
                    <el-pagination small background layout="prev, pager, next" :total="4" class="mt-4" style="text-align: center;" /> 
                </el-tab-pane>
                <el-tab-pane label="모든 예측" name="third">
                    <el-select v-model="value1" multiple placeholder="종류" style="width: 200px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                    <el-select v-model="value2" multiple placeholder="날짜 선택" style="width: 200px; margin-left: 20px;">
                        <el-option v-for="item in optionss" :key="item.values" :label="item.labels" :value="item.values"/>
                    </el-select>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="home" label="Home"/>
                        <el-table-column prop="away" label="Away" />
                        <el-table-column prop="entire" label="총 참여자" />
                        <el-table-column prop="homeWin" label="홈 승"/>
                        <el-table-column prop="same" label="무승부" />
                        <el-table-column prop="awayWin" label="어웨이 승" />
                        <el-table-column prop="result" label="결과" />
                    </el-table>
                    <el-pagination small background layout="prev, pager, next" :total="4" class="mt-4" style="text-align: center;" /> 
                </el-tab-pane>
            </el-tabs>
      </div>
  </template>
  
  <script setup>
  const tableData = [
           {
              home: '2016-05-03',
              away: 'Tom',
              entire: 'No. 189, Grove St, Los Angeles',
              homeWin: "1",
              same:"무승부",
              awayWin: "544",
              result:"좋음"
          },
          {
              home: '2016-05-03',
              away: 'Tom',
              entire: 'No. 189, Grove St, Los Angeles',
              homeWin: "1",
              same:"무승부",
              awayWin: "544",
              result:"좋음"
          },
          {
              home: '2016-05-03',
              away: 'Tom',
              entire: 'No. 189, Grove St, Los Angeles',
              homeWin: "1",
              same:"무승부",
              awayWin: "544",
              result:"좋음"
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
  
  </style>