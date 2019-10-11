<template>
  <div id="app">
    
    <router-view></router-view>
    <header1></header1>
    <body1></body1>
    <body1></body1>
    <body2></body2>
    <body2></body2>
    <body2></body2>

    
  </div>
</template>

<script>
import header1 from "./components/xz/header.vue"
import body1 from "./components/xz/body1.vue"
import body2 from "./components/xz/body2.vue"
export default {

 components:{
   header1,
   body1,
   body2
 },


  methods: {
  },
}
</script>

<style>

</style>
