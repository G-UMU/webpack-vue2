<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        name: '',
      }
    }
  },
  mounted(){
    console.log(this.a?.b)
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-form-item__label{
  color: red;
}
</style>
