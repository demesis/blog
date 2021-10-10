<template>
  <div id="home">
    <article class="hello">
      <h2>Hello</h2>
      <p class="des">
        你好！欢迎来到我的博客！我是一名正在学习的前端小菜鸡，这是我的主页！我会在这里发表一些不成熟的笔记和文章。博客目前使用的是Vue
        + Element + Node + Express + MongoDB搭建的，如果对源码感兴趣的话可以<a
          href="https://github.com/demesis"
          target="_blank"
          >[点击这里]</a
        >。欢迎提出宝贵的建议哦！
      </p>
      <div class="info">
        <div class="left">
          <h3>个人介绍</h3>
          <ul>
            <li>
              <p class="dt">nickname</p>
              <p class="dd">狗蛋</p>
            </li>
            <li>
              <p class="dt">address</p>
              <p class="dd">中国xx省</p>
            </li>
            <li>
              <p class="dt">emali</p>
              <p class="dd">407120938@qq.com</p>
            </li>
            <li>
              <p class="dt">github</p>
              <p class="dd">
                <a href="https://github.com/demesis" target="_blank"
                  >点击这里</a
                >
              </p>
            </li>
          </ul>
        </div>
        <div class="right">
          <h3>skills</h3>
          <ul>
            <li>
              <p class="lang">
                <span class="s1">HTML5 & CSS3</span>
                <span class="s2">80%</span>
              </p>
              <p class="level">
                <span style="width: 80%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Javascript</span>
                <span class="s2">80%</span>
              </p>
              <p class="level">
                <span style="width: 80%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">NodeJs</span>
                <span class="s2">80%</span>
              </p>
              <p class="level">
                <span style="width: 80%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Vue</span>
                <span class="s2">80%</span>
              </p>
              <p class="level">
                <span style="width: 80%"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <article class="article">
      <h2>Article</h2>
      <p class="des">
        热门文档推荐。
        <router-link to="/article">更多文章</router-link>
        请访问文章页&gt;.&lt;
      </p>
      <div class="content">
        <div class="left">
          <div class="art">
            <img src="../assets/img/article/js.jpg" alt="" />
            <p class="title">js</p>
            <div class="cover">
              <a href="https://www.runoob.com/js/js-tutorial.html">
                <p>Tag: HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
          <div class="art art2">
            <img src="../assets/img/article/css3.jpg" alt="" />
            <p class="title">html/css</p>
            <div class="cover">
              <a href="https://www.w3school.com.cn/h.asp"
                ><p>Tag: HTML</p>
                <p>View More</p></a
              >
            </div>
          </div>
        </div>
        <div class="right">
          <div class="art">
            <img src="../assets/img/article/vue.jpg" alt="" />
            <p class="title">Vue</p>
            <div class="cover">
              <a href="https://cn.vuejs.org/v2/guide/"
                ><p>Tag: HTML</p>
                <p>View More</p></a
              >
            </div>
          </div>
          <div class="art art2">
            <img src="../assets/img/article/react.jpg" alt="" />
            <p class="title">html/css</p>
            <div class="cover">
              <a href="https://react.docschina.org/tutorial/tutorial.html"
                ><p>Tag: HTML</p>
                <p>View More</p></a
              >
            </div>
          </div>
        </div>
      </div>
    </article>

    <article>
      <a href="https://beian.miit.gov.cn" class="beian">赣ICP备2021008066号</a>
    </article>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="less" scoped>
article {
  width: 100%;
  padding: 15px 15px 30px;
  margin-bottom: 15px;
  background-color: white;
  font-family: "Quicksand";
  border-radius: 15px;
  h2 {
    margin-bottom: 15px;
    font-size: 30px;
    letter-spacing: 3px;
    padding-top: 10px;
  }
  .des {
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    text-indent: 2em;
    color: #444;
    font-size: 16px;
    letter-spacing: 4px;
    line-height: 30px;
    font-family: Quicksand, "Microsoft YaHei";
    a {
      text-decoration: underline;
      color: #aaa;
    }
  }
}

article.hello {
  .info {
    display: flex;

    div.left,
    div.right {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    h3 {
      margin-bottom: 30px;
      font-weight: 400;
      font-size: 22px;
      color: #666;
    }

    ul {
      flex: 1;
    }

    div.left {
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        li {
          display: flex;

          p.dt {
            width: 40%;
            font-weight: bold;
          }

          p.dd {
            flex: 1;
          }
        }
      }
    }

    div.right {
      ul li {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        p.lang {
          display: flex;
          justify-content: space-between;
          letter-spacing: 2px;

          span.s1 {
            font-weight: bold;
          }

          span.s2 {
            font-size: 12px;
            font-weight: bold;
            color: #999;
          }
        }

        p.level {
          width: 100%;
          height: 5px;
          background-color: #ececec;

          span {
            display: block;
            height: 100%;
            background-color: #bfe2e6;
          }
        }
      }
    }
  }
}

article.article {
  div.content {
    display: flex;

    div.left {
      margin-right: 1px;
      flex: 1;
    }

    div.right {
      margin-left: 1px;
      flex: 1;
    }

    div.art {
      overflow: hidden;

      &.art2 {
        margin-top: 2px;
      }

      position: relative;

      img {
        display: block;
        width: 100%;
      }

      p.title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.1);
        font-weight: 700;
        line-height: 30px;
        color: #fff;
        text-align: center;
        transition: bottom 0.3s;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: Quicksand;
      }

      div.cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        a {
          display: block;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s;

          p {
            position: absolute;
            font-family: Quicksand;
            font-weight: bold;
            transition: 0.3s;
          }

          p:nth-child(1) {
            top: 20%;
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 22px;
            text-transform: uppercase;
          }

          p:nth-child(2) {
            left: 50%;
            bottom: 20%;
            width: 30%;
            height: 32px;
            border-radius: 16px;
            text-align: center;
            line-height: 32px;
            transform: translateX(-50%);
            color: #000;
            background-color: #bfe2e6;
          }
        }
      }

      &:hover {
        p.title {
          bottom: -30px;
        }

        div.cover a {
          opacity: 1;

          p:nth-child(1) {
            top: 32%;
          }

          p:nth-child(2) {
            bottom: 32%;
          }
        }
      }
    }
  }
}
.beian {
  text-decoration: underline;
  color: #aaa;
}
@media screen and(max-width: 640px) {
  article {
    padding: 15px 7px 30px;
    margin-left: -7px;
  }
}
</style>
