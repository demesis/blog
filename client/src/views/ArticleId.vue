<template>
  <div id="ArticleId">
    <article>
      <div id="article-main"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "ArticleId",
  methods: {},
  async mounted() {
    let { data } = await this.$axios({
      method: "POST",
      url: "/art/address",
      data: {
        _id: this.$route.params.id,
      },
    });

    if (data.code) {
      return this.$message.error("文章id错误，查询失败");
    }

    $.get(this.baseURL + data.data, (md) => {
      editormd.markdownToHTML("article-main", {
        markdown: md,
      });
    });
  },
};
</script>

<style scoped lang='less'>
#article-main {
  border-radius: 15px;
}

@media screen and(max-width: 640px) {
  #article-main {
    width: 320px;
  }
}
</style>














