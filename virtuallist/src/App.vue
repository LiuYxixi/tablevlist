<template>
    <VirtualList :listData="data" :itemSize="100"/>

</template>

<script>
import VirtualList from './components/VirtualList.vue';

let d = [];
for (let i = 0; i < 100000; i++) {
  d.push({ id: i, value: i})
}

export default {
  name: 'App',
  data(){
    return{
      data:d
    }
  },
  components: {
    VirtualList
  }
}
</script>

<style>
html{
  height: 100%;
}
body{
  height: 100%;
  margin:0;
}
#app{
  height:100%;
}
</style>
