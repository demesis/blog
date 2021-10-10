<template>
  <div id="AdminC">
    <article>
      <h2>后台管理</h2>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="文章发表" name="second">
          <AdminArticleAdd></AdminArticleAdd>
        </el-tab-pane>
        <el-tab-pane label="文章管理" name="third">
          <AdminArticleManger></AdminArticleManger>
        </el-tab-pane>
        <el-tab-pane label="友链管理" name="fourth">
          <!-- <AdminLink></AdminLink> -->
        </el-tab-pane>
      </el-tabs>
    </article>
  </div>
</template>

<script>
// import AdminLink from "@/components/Admin/AdminLink";
import AdminArticleAdd from "@/components/Admin/AdminArticleAdd";
import AdminArticleManger from "@/components/Admin/AdminArticleManger";

export default {
  name: "AdminC",
  data() {
    return {
      activeName: "third",
    };
  },
  components: {
    //   AdminLink,
    AdminArticleAdd,
    AdminArticleManger,
  },
  // created() {
  //   if (!this.userInfo.user) {
  //     this.$router.replace("/");
  //   }
  // },
};
</script>

<style lang="less" scoped>
#AdminC {
  flex: 1;

  article {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: Quicksand;

    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }
  }
}
</style>