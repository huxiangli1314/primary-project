<template>
  <div id="app">
    
    <router-view></router-view>
    <header1></header1>
    <body1></body1>
    <body1></body1>
    <body2></body2>
     <body3></body3>
     <body2></body2>
      <body3></body3>
           <body2></body2>
           <body2></body2>
      <body3></body3>
                 <body2></body2>
           <body2></body2>
   <foot1></foot1>

    
  </div>
</template>

<script>
import header1 from "./components/xz/header.vue"
import body1 from "./components/xz/body1.vue"
import body2 from "./components/xz/body2.vue"
import body3 from "./components/xz/body3.vue"
import foot1 from "./components/xz/foot.vue"
export default {

 components:{
   header1,
   body1,
   body2,
   body3,
   foot1
 },


  methods: {
  },
}
</script>

<style>

</style>
