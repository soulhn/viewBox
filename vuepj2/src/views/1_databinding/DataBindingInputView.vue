<template>
  <div>
    <h1>Input 데이터 양방향 바인딩</h1>
    <input type="text" v-model="userId" />
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
    <br />
    <!-- 문자연산 -->
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> -
    <br />
    <!-- .number로 숫자연산 -->
    <input type="text" v-model.number="num1" /> +
    <input type="text" v-model.number="num2" /> -
    <span>{{ num1 + num2 }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: "",
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId);
    },
    changeData() {
      this.userId = "JS에서 변경한 값";
    },
  },
};
</script>

<style scoped></style>
