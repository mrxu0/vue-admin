<template>
  <el-form :model="form" ref="form" label-width="100px">
    <el-form-item
      label="用户名"
      prop="name"
      :rules="[
      { required: true, message: '用户名不能为空'}
    ]"
    >
      <el-input type="text" v-model.number="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item
      label="密码"
      prop="password"
      :rules="[
      { required: true, message: '密码不能为空'}
    ]"
    >
      <el-input type="password" v-model.number="form.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch("toLogin", this.form).then(res => {
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
