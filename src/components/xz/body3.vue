<template>
    <div>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
   <el-menu-item index="8"><a href="https://www.ele.me" target="_blank"><Icon size="24" type="ios-paper" /></i>推荐</a></el-menu-item>
  <el-menu-item index="8"><a href="https://www.ele.me" target="_blank"><Icon size="24" type="ios-basket" />H5</a></el-menu-item>
   <el-menu-item index="8"><a href="https://www.ele.me" target="_blank"><Icon  size="24" type="md-beer" />图片</a></el-menu-item>
    <el-menu-item index="8"><a href="https://www.ele.me" target="_blank"><Icon  size="24" type="ios-book" />视频</a></el-menu-item>
     <el-menu-item index="8"><a href="https://www.ele.me" target="_blank"><Icon  size="24" type="md-bowtie" />长单页</a></el-menu-item>
      <el-menu-item index="8"><a href="https://www.ele.me" target="_blank"><Icon  size="24" type="ios-calendar" />表单</a></el-menu-item>
</el-menu>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
    .el-menu{
        background-color:#00c08f;
        margin-top:10px;
        width:1220px;
        margin-left:80px;
        border-radius:6px;
        
    }
.el-menu a{
    color:white;
    font-size:16px;
}


</style>

