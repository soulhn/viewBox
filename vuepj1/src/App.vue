<template>
  <div class="menu">
    <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
  </div>

  <div v-for="(a, i) in products" :key="i">
    <h4>{{ products[i] }}</h4>
    <p>{{ prices[i] }} 만원</p>
    <button @click="reportCounter(i)">신고 버튼</button><span>{{ reportCount[i] }}</span>
  </div>

  <hr />

  <div>
    <h4>{{ products[0] }}</h4>
    <p>50만원</p>
    <button v-on:click="reportCounter">허위매물신고</button> <span>{{ reportCount }}</span>
  </div>

  <div>
    <h4>{{ products[1] }}</h4>
    <p>60만원</p>
  </div>

  <div>
    <h4>{{ products[2] }}</h4>
    <p>70만원</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      reportCount: [0, 0, 0],
      // 데이터 보관
      prices: [100, 200, 300],
      myStyle: "color : blue",
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      menus: ["Home", "Shop", "About"], //메뉴들
    };
  },
  methods: {
    //vue에서 함수 만드는 곳
    reportCounter(i) {
      this.reportCount[i] += 1;
    },
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
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
