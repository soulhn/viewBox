<template>
  <div>{{ htmlString }}</div>
  <div v-html="htmlString"></div>
  <!-- htmlString: '<p style="color:red;">빨간색 문자</p>', -->
</template>

<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>',
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
