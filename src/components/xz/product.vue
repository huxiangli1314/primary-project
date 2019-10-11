<template>
    <div>
    <Affix :offset-top="0">
    <el-row>
  <el-col :span="6"><div class="grid-content bg-purple"><img src="../../pic/logo.png" alt=""></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">dfsfdasdasd</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div>
           <Input v-model="value14" placeholder="猜你感兴趣" clearable style="width: 200px" />
         <Button type="info" ghost><Icon type="ios-search"  size="100px"/></Button>
  </el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">safdfsad</div></el-col>
</el-row>
    </Affix>
    </div>
</template>
<style>

</style>