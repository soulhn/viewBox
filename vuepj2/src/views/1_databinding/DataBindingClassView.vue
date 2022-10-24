<template>
  <div>
    <div :class="{ 'text-red': true, active: true }">클래스 바인딩</div>
    <div :class="class2">클래스 바인딩2</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: "",
      hasError: false,
      class2: ["active", "hasError"],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
