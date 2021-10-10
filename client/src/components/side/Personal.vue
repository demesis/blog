<template>
  <div class="personal">
    <div class="top">
      <div class="img"></div>
      <div class="name">
        <p class="p1">TTXBB</p>
        <p class="p2">前 端 的 小 菜 鸡</p>
      </div>
      <div class="clear"></div>
      <div class="contact">
        <a
          href="https://github.com/demesis"
          target="_blank"
          class="iconfont icon-github"
        ></a>
        <a class="iconfont icon-twitter" title="科学上网"></a>
        <a href="" target="_blank" class="iconfont icon-tubiaozhizuo-"></a>
        <!--<a class="iconfont icon-weixin"></a>-->

        <a href="" target="_blank" class="iconfont icon-QQ"></a>
      </div>
    </div>
    <div class="bottom">
      <a href="https://github.com/demesis" target="_blank">下载这个博客</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
};
</script>

<style scoped lang="less">
.personal {
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 0 4px #ddd;
  border-radius: 15px;

  .top {
    width: 100%;
    background-color: #bfe2e6;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    .img {
      overflow: hidden;
      float: left;
      width: 60px;
      height: 60px;
      margin-top: 20px;
      margin-left: 30px;
      border: 2px solid #fff;
      border-radius: 50%;
      background: url(../../assets/img/personal/ttxbb.jpg) no-repeat center
        center / cover;
    }

    .name {
      float: right;
      margin-top: 29px;
      margin-right: 30px;

      .p1 {
        font-size: 20px;
        font-weight: bolder;
        letter-spacing: 5px;
      }

      .p2 {
        font-family: "Quicksand";
        color: #555;
        font-weight: 700;
        letter-spacing: 3px;
        font-size: 12px;
        margin-top: 5px;
      }
    }

    .clear {
      width: 0;
      height: 0;
      clear: both;
    }

    .contact {
      margin-top: 15px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-around;

      a {
        display: block;
        font-size: 20px;
        color: #525252;
        cursor: pointer;
      }
    }
  }

  .bottom {
    width: 100%;
    padding: 20px 0;
    background-color: #fff;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

    a {
      display: block;
      width: 65%;
      height: 40px;
      border-radius: 23px;
      margin: 0 auto;
      box-shadow: 0 0 0 #888;
      font-family: "Quicksand";
      font-size: 14px;
      text-align: center;
      line-height: 40px;
      font-weight: 700;
      color: #000;
      letter-spacing: 1px;
      background-color: #bfe2e6;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 0 2px 10px #888;
      }
    }
  }
}
</style>














