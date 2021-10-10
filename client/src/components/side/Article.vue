<template>
  <div class="hotArticle">
    <h4>Hot Articles</h4>
    <ul>
      <li v-for="(item, index) in hostList" :key="index">
        <i>{{ index + 1 }}</i>

        <router-link :to="`/article/${item._id}`" @click="refresh">{{
          item.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      hostList: [],
    };
  },
  methods: {
    refresh() {
      setTimeout(function () {
        location.reload();
      }, 100);
    },
  },
  async created() {
    let { data } = await this.$axios({
      method: "GET",
      url: "/art/hot",
    });
    if (data.code) {
      return;
    }
    this.hostList = data.data;
  },
};
</script>

<style scoped lang="less">
.hotArticle {
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 0 4px #ddd;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;

  h4 {
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e9e7;
    color: #383937;
    font-size: 16px;
  }
  ul {
    margin-top: 12px;
    li {
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      height: 40px;
      line-height: 40px;
      padding: 0 3px;
      &:nth-of-type(1) i {
        background-color: #71a598;
      }
      &:nth-of-type(2) i {
        background-color: #6eb3a3;
      }
      &:nth-of-type(3) i {
        background-color: #93bbb2;
      }
      i {
        display: block;
        width: 22px;
        height: 22px;
        margin-top: 9px;
        margin-right: 15px;
        border-radius: 50%;
        line-height: 22px;
        font-size: 16px;
        font-style: normal;
        color: #fff;
        text-align: center;
        font-weight: 100;
        font-weight: bolder;
      }
      a {
        display: block;
        flex: 1;
        color: #787977;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
        overflow: hidden;
        white-space: nowrap; // 不换行
        text-overflow: ellipsis; // 显示省略号

        &:hover {
          color: #409eff;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>














