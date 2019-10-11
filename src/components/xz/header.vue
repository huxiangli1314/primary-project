<template>
    <div class="div_top1">

    <Affix :offset-top="0" >
    <el-row class="bg">
  <el-col :span="6"><div class="grid-content bg-purple"><img src="../../pic/logo.png" alt=""></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">会员特权</el-menu-item>
  <el-submenu index="2">
    <template slot="title">全部模版</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
  
  
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div>
 <div class="c1"> 
           <Input v-model="value14" placeholder="热门搜索： 婚礼 企业招聘 邀请函" clearable style="width: 200px" />
         <Button type="info" ghost><Icon type="ios-search"  size="100px"/></Button>
         
         </div>
  </el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">
  
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">作品管理</el-menu-item>
  <el-menu-item index="4">
  <Badge :count="3">
       <img src="../../pic/xm.png" class="img1">
    </Badge>

  
  
  </el-menu-item>
</el-menu>
  
  
  
  </div></el-col>
</el-row>


    </Affix>




    </div>
</template>
<style scoped>
.div_top1{
  height:100px;
  text-align:center;
  line-height:80px;
  margin-top:20px;
  
}
.bg{
  background:white;

}
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
    .img1{
      width:30px;
      height:30px;
      margin-bottom:20px;
    }
</style>


