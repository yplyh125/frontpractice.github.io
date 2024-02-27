<template>
  <navheader />
  <router-view></router-view>
  
</template>
<script>
import navheader from '../src/nav/nav.vue'

export default {
  name: 'App',
  components: {
    navheader
  }
}
</script>


<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

.notosanskr * { 
 font-family: 'Noto Sans KR', sans-serif;
}

#app{
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
