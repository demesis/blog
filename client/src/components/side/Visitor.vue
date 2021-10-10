<template>
  <div class="visitor">
    <h4>最近访客</h4>
    <ul>
      <li
        v-for="(item, index) in visitorList"
        :key="index"
        :style="{
          backgroundImage: `url(${baseURL}${item.visitor.photo})`,
        }"
      >
        <p>{{ item.visitor.user }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Visitor",
  data() {
    return {
      visitorList: [],
    };
  },
  async created() {
    let { data } = await this.$axios({
      method: "GET",
      url: "/visitor",
    });

    if (data.code) return;

    this.visitorList = data.data;
  },
};
</script>

<style lang="less" scoped>
.visitor {
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
  margin-top: 15px;
  box-shadow: 0 0 4px #ddd;
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
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;

    margin-top: 20px;

    li {
      position: relative;
      width: 53px;
      height: 53px;
      background-color: pink;
      margin-bottom: 6px;
      margin-right: 4.5px;

      background-size: cover;
      background-position: center top;

      p {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 16px;
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
        font-size: 12px;
        line-height: 16px;
        text-align: center;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>














