<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h4 :style="myStyle">헤라 빌</h4>
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h4>베라 빌</h4>
    <p>{{ price2 }}만원</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 데이터 보관
      price1: 60,
      price2: 70,
      myStyle: "color : blue",
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
