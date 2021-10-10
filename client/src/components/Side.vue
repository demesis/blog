<template>
  <div id="side">
    <Personal />
    <Article />
    <Visitor />
    <!-- <div class="personal">

      </div> -->
    <!-- <div class="article">

      </div>
      <div class="visitor">

      </div> -->
  </div>
</template>

<script>
import Personal from "./side/Personal.vue";
import Article from "./side/Article.vue";
import Visitor from "./side/Visitor.vue";
export default {
  name: "Side",
  components: { Personal, Article, Visitor },
};
</script>

<style lang="less" scoped>
#side {
  position: fixed;
  width: 270px;
}
@media screen and (max-width: 640px) {
  #side {
    display: none;
    width: 0px;
  }
}
</style>