<template>
    <div class="div_top1">

    <Affix :offset-top="0">
    <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"><img src="../../pic/logo.png" alt=""></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">会员特权</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div>
           <Input v-model="value14" placeholder="猜你感兴趣" clearable style="width: 200px" />
         <Button type="info" ghost><Icon type="ios-search"  size="100px"/></Button>
  </el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">用户管理</div></el-col>
</el-row>


    </Affix>




    </div>
</template>
<style scoped>
.div_top1{
  height:80px;
  text-align:center;
  line-height:80px;
}
</style>