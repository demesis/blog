<template>
  <div id="User">
    <article>
      <h2>修改用户资料</h2>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="修改用户名" name="first">
          <el-form
            :model="userForm"
            :rules="rules"
            ref="userForm"
            label-width="100px"
          >
            <el-form-item label="原用户名：">
              {{ userInfo.user }}
            </el-form-item>
            <el-form-item label="新用户名：" prop="user">
              <el-input v-model="userForm.user"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="userNameUpdate"
                >确认修改</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="second">
          <el-form
            :model="passForm"
            :rules="rules"
            ref="passForm"
            label-width="100px"
          >
            <el-form-item label="原密码">
              <el-input type="password" v-model="passForm.oldPass"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pass">
              <el-input type="password" v-model="passForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="pass2">
              <el-input type="password" v-model="passForm.password2"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="passUpdate">确认修改</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="修改头像" name="third">
          <el-alert title="点击 + 选择图片自动上传修改" type="warning">
          </el-alert>
          <el-upload
            class="avatar-uploader"
            :action="baseURL + '/user/avatar'"
            :show-file-list="false"
            :with-credentials="true"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-tab-pane>
      </el-tabs>
    </article>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "User",
  data() {
    return {
      activeName: "first",
      userForm: {
        user: "",
      },
      passForm: {
        oldPass: "",
        password: "",
        password2: "",
      },
      rules: {
        //验证用户名
        user: [
          {
            validator(rule, value, callback) {
              let reg = /^[^\s]{2,8}$/;

              if (reg.test(value)) {
                callback();
              } else {
                callback(new Error("2-8位非空格字符"));
              }
            },
            trigger: "blur",
          },
        ],
        password: [
          {
            validator(rule, value, callback) {
              let reg = /^[\w,.?;<>/|\\:'"!@#$%^&*()+-]{6,16}$/;
              if (reg.test(value)) {
                callback();
              } else {
                callback(new Error("6-16位字符"));
              }
            },
            trigger: "blur",
          },
        ],
        password2: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error("密码不能为空"));
              } else if (value !== this.passForm.pass) {
                callback(new Error("两次输入密码不一致"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
      imageUrl: "",
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapMutations(["userUpdate", "updateUser"]),
    //修改用户名
    userNameUpdate() {
      this.$refs.userForm.validate(async (v) => {
        if (v) {
          this.$axios({
            method: "post",
            url: "/user/name",
            data: {
              user: this.userForm.user,
            },
          }).then((res) => {
            if (res.data.code) {
              return this.$message.error(res.data.msg);
            }
            this.$message.success("修改成功");
            this.userUpdate(this.userForm.user);
            this.userForm.user = "";
          });
        } else {
          return false;
        }
      });
    },
    //修改密码
    passUpdate() {
      this.$refs.passForm.validate(async (v) => {
        if (v) {
          this.$axios({
            method: "post",
            url: "/user/pass",
            data: {
              oldPass: this.passForm.oldPass,
              password: this.passForm.password,
            },
          }).then((res) => {
            if (res.data.code) {
              return this.$message.error(res.data.msg);
            }

            //提示，清除vuex，返回首页
            this.$message.success(res.data.msg);
            this.updateUser({});
            this.$router.replace("/");
          });
        } else {
          return false;
        }
      });
    },

    //上传成功的回调
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);

      if (res.code) {
        return this.$message.error(res.msg);
      }

      //提示
      this.$message.success("头像修改完成！");
      //更新vuex数据
      this.updateUser(res.data);
    },

    //上传之前的回调
    beforeAvatarUpload(file) {
      let fileType = file.type;
      const isLt2M = file.size / 1024 / 1024 < 2;
      const isJPG = /^image\/(jpeg|png)$/.test(fileType);

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG,PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },

  // 如果没有登录，显示首页
  created() {
    if (!this.userInfo.user) {
      this.$router.replace("/");
    }
  },
};
</script>

<style lang="less" scoped>
#User {
  flex: 1;

  article {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;

    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }
  }

  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 10px;
  }
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  /deep/ .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>