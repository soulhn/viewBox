<template>
  <div>
    <p>{{ article.id }}</p>
    <p>{{ article.userId }}</p>
    <p>{{ article.title }}</p>
    <p>{{ article.body }}</p>

    <br />
    <el-button @click="goBack">뒤로가자</el-button>
  </div>
</template>

<script>
import apiBoard from "@/api/board";

export default {
  components: {},
  data() {
    return {
      article: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    apiBoard
      .getArticle(this.$route.params.id)
      .then((response) => {
        this.article = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  unmounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
