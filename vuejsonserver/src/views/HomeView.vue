<template>
  <el-table @row-click="rowClicked" :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" width="80" />
    <el-table-column prop="userId" label="userId" width="120" />
    <el-table-column prop="title" label="title" />
  </el-table>
</template>

<script>
import apiBoard from "@/api/board";

export default {
  data() {
    return {
      title: "hello",
      tableData: null,
    };
  },

  mounted() {
    //가짜 서버에서 원하는 페이지 출력
    apiBoard
      .getArticles(0)
      .then((response) => {
        console.log("getArticles =", response);
        this.tableData = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    rowClicked(row) {
      this.$router.push({
        path: `/board/detail/${row.id}`,
      });
    },
  },
};
</script>
