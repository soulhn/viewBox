<!-- 데이터 바인딩 기본 -->
<!-- html 영역 -->
<template>
  <div>
    <h1>hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<!-- js 영역 -->
<script>
export default {
  data() {
    return {
      userName: "H Soul Hn",
      message: "어서어서오세요",
      arr: [],
      obj: {},
    };
  },
};
</script>
<!-- 이 컴포넌트에서만 사용하는 CSS -->
<style scoped>
.text-red {
  color: red;
}
</style>
