<template>
  <div id="AdminArticleManger">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="des" label="描述"> </el-table-column>
      <el-table-column prop="pv" label="浏览量"> </el-table-column>
      <el-table-column label="操作" :width="100">
        <template #default="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="handleDelete(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AdminArticleManger",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    //文章获取
    async getArticle() {
      let { data } = await this.$axios({
        method: "GET",
        url: "/art/all",
      });

      if (data.code) {
        return this.$message.error("文章列表查询失败");
      }

      this.tableData = data.data;
    },
    //文章删除
    async handleDelete(item) {
      let { data } = await this.$axios({
        method: "DELETE",
        url: "/admin/articleDelete",
        data: {
          _id: item._id,
          md: item.md,
        },
      });

      data.code || this.getArticle();
    },
  },
  created() {
    this.getArticle();
  },
};
</script>

<style lang="less" scoped>
</style>














