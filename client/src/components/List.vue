<template>
  <div id="List">
    <div class="main">
      <div class="logo">
        <a href="">TT·XBB</a>
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/article">文章</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
          <li><router-link to="/message">留言</router-link></li>
        </ul>
      </div>
      <Photo v-if="userInfo.user" />
      <div class="login" v-else>
        <el-button type="success" size="mini" @click="open"
          >登陆 / 注册
        </el-button>
      </div>

      <Login v-show="ifshow" @close="close" />
    </div>
  </div>
</template>

<script>
import Login from "./Login.vue";
import Photo from "./Photo.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      ifshow: false,
    };
  },
  methods: {
    open() {
      this.ifshow = true;
    },
    close() {
      this.ifshow = false;
    },
  },
  components: { Login, Photo },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style lang='less' scoped>
#List {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 50px;
  box-shadow: 0 0 2px #999;
  background-color: #fff;
  border-radius: 15px;
  .main {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    max-width: 1300px;
    margin: auto;
    height: 100%;
    padding: 0 15px;
    .logo {
      width: 130px;
      height: 50px;
      text-align: center;
      a {
        font-family: "Pacifico";
        display: block;
        width: 130px;
        height: 50px;
        letter-spacing: 3px;
        line-height: 50px;
        font-size: 25px;
        color: black;
      }
    }
    .nav {
      ul {
        display: flex;
        height: 50px;
        li {
          height: 50px;
          margin: 2px 0;
          a {
            display: block;
            height: 48px;
            line-height: 48px;
            font-weight: bolder;
            color: #777;
            padding: 0 25px;
            border-bottom: 2px solid transparent;
            &:hover {
              color: #35e0f3;
            }
            &.router-link-active {
              color: #35e0f3;
              border-color: #35e0f3;
            }
          }
        }
      }
    }
    .login {
      .el-button {
        margin-top: 11px;
        border-radius: 15px;
      }
    }
  }
}
@media screen and (max-width: 640px) {
  #List {
    .main {
      padding: 0 15px;
      .logo {
        width: 60px;
        height: 50px;
        text-align: center;
        a {
          width: 60px;
          letter-spacing: 1px;
          font-size: 8px;
        }
      }
      .nav {
        ul {
          li {
            height: 50px;
            margin: 2px 0;
            a {
              display: block;
              height: 48px;
              line-height: 48px;
              font-weight: bolder;
              color: #777;
              padding: 0 8px;
              border-bottom: 2px solid;
              border-bottom: 2px solid transparent;
            }
          }
        }
      }
      .login {
        .el-button {
          margin-top: 11px;
        }
      }
    }
  }
}
</style>