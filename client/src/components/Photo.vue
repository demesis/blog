<template>
  <div id="photo">
    <el-popover placement="bottom-start" :width="170" trigger="hover">
      <template #reference>
        <div
          class="img"
          :style="{
            backgroundImage: `url(${baseURL}${userInfo.photo})`,
          }"
        ></div>
      </template>
      <div class="btn">
        <el-button type="primary" size="mini" @click="updateUserinfo"
          >修改资料
        </el-button>
        <el-button type="danger" size="mini" @click="loginOut"
          >退出登录
        </el-button>
      </div>
    </el-popover>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Photo",
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapMutations(["updateUser"]),
    loginOut() {
      this.$axios({
        method: "post",
        url: "/login/loginout",
      }).then((res) => {
        this.$message.success(res.data.msg);
      });
      this.updateUser({});
      this.$router.replace("/");
    },
    updateUserinfo() {
      this.$router.push("/user");
    },
  },
};
</script>

<style lang='less' scoped>
.img {
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center top;
  border-radius: 50%;
  margin-top: 5px;
  cursor: pointer;
}
</style>