<template>
  <div id="About">
    <!--about me-->
    <article>
      <h2>ABOUT ME</h2>
      <p>一个在不知道干嘛的时候学习前端的大学生😏</p>
      <p>谢谢你这么好看还这么关注我鸭！</p>
      <p>我还没有脱发！大概是写的代码还不够多。。。。。。</p>
    </article>

    <!--about site-->
    <article>
      <h2>ABOUT SITE</h2>
      <p><code>前 端：</code><span class="code">Vue + Element</span></p>
      <p>
        <code>后 端：</code><span class="code">Node + Express + Mongodb</span>
      </p>
      <p class="border">
        <code>服务器：</code
        ><a target="_blank" href="https://cloud.tencent.com/">腾讯云</a>
      </p>
    </article>

    <!--ABOUT COPYRIGHT-->
    <article>
      <h2>ABOUT COPYRIGHT</h2>
      <p>
        源码开源：<a href="https://github.com/demesis" target="_blank"
          >demesis的github</a
        >
      </p>
      <p>在注明出处的前提下，本站文章允许非商业用途的转载。</p>
    </article>

    <!--OTHER-->
    <article>
      <h2>OTHER</h2>
      <p>
        我是一名前端开发者，还在学校里学习，如果学习方面的问题，可以在首页寻找的qq号联系我哦！
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="less" scoped>
#About {
  flex: 1;

  article {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: Quicksand;
    border-radius: 15px;

    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }

    p {
      text-indent: 2em;
      color: #444;
      font-size: 14px;
      letter-spacing: 4px;
      line-height: 30px;
      &.border {
        border-bottom: 1px dotted rgb(170, 170, 170);
      }
    }

    code {
      text-indent: 0;
      display: inline-block;
      font-family: "Quicksand";
      font-size: 14px;
    }
    span.code {
      color: #bd4147;
      background-color: rgba(27, 31, 35, 0.05);
      font-weight: 700;
    }
    a {
      color: #409eff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
