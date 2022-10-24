<template>
  <div>
    <input type="text" v-bind:value="userId" readonly />
    <input type="text" :value="userId" readonly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
    <!-- txt1 비어있으면 true , 값 입력 시 false -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: "H Soul H",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
      txt1: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
