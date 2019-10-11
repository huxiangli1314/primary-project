<template>    
<div class="div_top">

<div class="v1">  
    <v-menu style="width:240px" :data="verticalMenuData"></v-menu>
    <v-menu style="width:240px" :data="verticalMenuData"></v-menu>
</div> 

  

 <div class="block">
    <el-carousel height="252px">
      <el-carousel-item v-for="item in 4" :key="item">
       <img src="https://res.zhangu365.com/sys/2019/0826/1543/07286c055d3697ac700f280cb2a5e3f9.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</div> 


</template>
<script>
export default {
    data:()=> ({
        verticalMenuData: [{
            name: '导航一',
            icon: 'mail',
            groups: [{
                groupName: "分组1",
                list: [{
                    name: "选项1"
                },{
                    name: "选项2"
                }]
            }, {
                groupName: "分组2",
                list: [{
                    name: "选项3"
                },{
                    name: "选项4"
                }]
            }]
        },{
            name: '导航二',
            icon: 'appstore',
            children: [{
                name: "选项5"
            },{
                name: "选项6"
            },{
                name: "三级导航",
                children: [{
                    name: "选项7"
                },{
                    name: "选项8"
                }]
            }]
        },{
            name: '导航三',
            icon: 'setting',
            children: [{
                name: "选项9"
            },{
                name: "选项10"
            },{
                name: "选项11"
            },{
                name: "选项12"
            }]
        }]
    })
}
</script>
<style >
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .block{
      width:1000px;
       margin-left:"50px" ;
  }
  .block img{
      width:100%;
      height:100%;
  }
  .div_top{
      display:flex;
     justify-content: center ;

   
  }
</style>