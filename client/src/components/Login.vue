<template>
  <div id="login" @click="close">
    <div class="main" @click.stop>
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户登录" name="login">
          <el-form :model="loginForm" label-width="70px" ref="loginForm">
            <el-form-item label="用户名" prop="user">
              <el-input v-model="loginForm.user"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login('loginForm')"
                >立即登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册账号" name="zhuce">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="70px"
          >
            <el-form-item label="用户名" prop="user">
              <el-input
                type="text"
                v-model="ruleForm.user"
                placeholder="可为中文"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即注册</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  emits: ["close"],
  name: "Login",
  data() {
    var checkUser = (rule, value, callback) => {
      let reg = /^[^\s]{2,8}$/;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("2-8位非空格字符"));
      }
    };
    var validatePass = (rule, value, callback) => {
      let reg = /^[\w,.?;<>/|\\:'"!@#$%^&*()+-]{6,16}$/;
      if (reg.test(value)) {
        callback();
      } else if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback(new Error("6-16位字符"));
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        user: "",
        password: "",
      },
      ruleForm: {
        user: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        user: [{ validator: checkUser, trigger: "blur" }],
      },
      activeName: "login",
    };
  },
  methods: {
    // vuex
    ...mapMutations(["updateUser"]),
    // 注册
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: "post",
            url: "/reg",
            data: {
              user: this.ruleForm.user,
              password: this.ruleForm.pass,
            },
          }).then((res) => {
            // 显示错误信息
            if (res.data.code) {
              return this.$message.error(res.data.msg);
            }
            // 注册成功提示
            this.$message.success("注册成功");
            // 跳到登录界面
            this.activeName = "login";
            // 清空表单
            this.$refs.ruleForm.resetFields();
          });
        } else {
          return false;
        }
      });
    },
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: "post",
            url: "/login",
            data: this.loginForm,
          }).then((res) => {
            // 显示错误信息
            if (res.data.code) {
              return this.$message.error(res.data.msg);
            }
            // 登录成功提示
            this.$message.success("登录成功");
            this.close();

            // 清空表单
            this.$refs.loginForm.resetFields();
            // 修改登录后用户vuex数据
            this.updateUser(res.data.data);
            location.reload();
          });
        } else {
          return false;
        }
      });
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang ='less'>
#login {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    padding: 10px 30px;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
}
.el-button {
  margin-left: 30px;
}
</style>