<template>
  <div>
    <H1>{{ propsTest }}</H1>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    propsTest: String,
  },
  data() {
    return {
      name: "PropsTest",
      sampleData: "",
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
